---
title: External gravitational field in GADGET-4
date: 2024-05-02
description:
    Here we introduce how to incorporate with external gravitational field in
    GADGET-4, a state-of-the-art numerical simulation code for galaxy and
    structure formation.
categories: [Simulations]
---

# Introduction

In some simulation situations, we want our host system to be analytical instead
of an analytical N-body system to save time and computational resource. Such
situations include the tidal stripping effect suffered by a satellite
subhalo/galaxy in a host halo, or a globular cluster in a host galaxy.

Since the presence of an external gravitational field affects the most
fundamental operations in a simulation, which are gravity calculation and orbit
integration, one need to change the source code to do it.

# Builtin external field in GADGET-4

GADGET-4 provides a builtin external field, which has a Hernquist density
profile, and it can be configured by changing the configuration file and the
parameter file.

In the configuration field, one needs to add

```
EXTERNALGRAVITY
EXTERNALGRAVITY_STATICHQ
```

The property of this Hernquist profile could be specified by updating the
parameter file

```
A_StaticHQHalo=5.0
Mass_StaticHQHalo=100
```

Since we changed the configuration file, we need to rebuild the source code
before we run Gadget.

# User-defined external field in GADGET-4

Adopting a user-defined external field in GADGET-4 requires not only changing
the configuration file and the parameter file, but also modifying at least four
source code files:

1. `src/gravity/grav_external.cc`
2. `define_extras`
3. `src/data/allvars.cc`
4. `src/data/allvars.h`

## `grav_external.cc`

This field has a piece of code which looks like

```c++
#ifdef EXTERNALGRAVITY_STATICHQ
      {
        vector<double> pos;
        Sp.nearest_image_intpos_to_pos(Sp.P[target].IntPos, intpos_center, pos.da);

        double r = sqrt(pos.r2());

        double m = All.Mass_StaticHQHalo * pow(r / (r + All.A_StaticHQHalo), 2);

        if(r > 0)
          Sp.P[target].GravAccel += (-All.G * m / (r * r * r)) * pos;

#if defined(EVALPOTENTIAL) || defined(OUTPUT_POTENTIAL)
        Sp.P[target].ExtPotential += (-All.G * All.Mass_StaticHQHalo / (r + All.A_StaticHQHalo));
#endif
      }
#endif
```

And we need to add similar code snippets for our own density profile. For
example, here is the code to add a Dekel-Zhao density profile:

```c++
#ifdef EXTERNALGRAVITY_STATICDEKEL
      {
        vector<double> pos;
        Sp.nearest_image_intpos_to_pos(Sp.P[target].IntPos, intpos_center, pos.da);

        double r = sqrt(pos.r2());
        double x = r / All.Rs_StaticDekelHalo;
        double c = All.Rvir_StaticDekelHalo / All.Rs_StaticDekelHalo;
        double a = All.Alpha_StaticDekelHalo;

        auto f=[](double x, double a){return pow(sqrt(x) / (1. + sqrt(x)), 2. * (3. - a));};

        double m = All.Mass_StaticDekelHalo * f(x, a) / f(c, a);

        if(r > 0)
          Sp.P[target].GravAccel += (-All.G * m / (r * r * r)) * pos;

      }
#endif
```

This profile has four free parameters

1. `Mass_StaticDekelHalo` is the mass enclosed in the virial radius;
2. `Rvir_StaticDekelHalo` is the virial radius of the halo;
3. `Rs_StaticDekelHalo` is the scaling radius of the halo;
4. `Alpha_StaticDekelHalo` is the inner logarithmic slope of the halo.

It is noteworthy that we pass the code related to the potential term, which is
only related if you want to evaluate and output the potential and has nothing to
do with the simulation itself.

## `define_extras`

Since we add a new macro `EXTERNALGRAVITY_STATICDEKEL` to the source code, we
need to tell GADGET-4 what we did, which is done by appending a new line in
`define_extras`. In our case, it is

```
EXTERNALGRAVITY_STATICDEKEL
```

## `allvars.h`

The properties of our density profile will be passed through the parameter file.
In order to do that, we need to modifying the source code that is responsible
for reading the parameter file. The first one is `allvars.h`, from which we
could find a piece of code for the builtin Hernquist profile:

```c++
#ifdef EXTERNALGRAVITY_STATICHQ
  double A_StaticHQHalo;
  double Mass_StaticHQHalo;
#endif
```

And we could append a similar code snippet right after it, which is

```c++
#ifdef EXTERNALGRAVITY_STATICDEKEL
  double Mass_StaticDekelHalo;
  double Rvir_StaticDekelHalo;
  double Rs_StaticDekelHalo;
  double Alpha_StaticDekelHalo;
#endif
```

## `allvars.cc`

After changing the header file `allvars.h`, we also need to update the source
file `allvars.cc` accordingly. One can also find a piece of code in `allvars.cc`
that is related to the builtin Hernquist profile, which reads

```c++
#ifdef EXTERNALGRAVITY_STATICHQ
  add_param("A_StaticHQHalo", &A_StaticHQHalo, PARAM_DOUBLE, PARAM_FIXED);
  add_param("Mass_StaticHQHalo", &Mass_StaticHQHalo, PARAM_DOUBLE, PARAM_FIXED);
#endif
```

And we append our code snippet after it, which gives

```c++
#ifdef EXTERNALGRAVITY_STATICDEKEL
  add_param("Mass_StaticDekelHalo", &Mass_StaticDekelHalo, PARAM_DOUBLE, PARAM_FIXED);
  add_param("Rvir_StaticDekelHalo", &Rvir_StaticDekelHalo, PARAM_DOUBLE, PARAM_FIXED);
  add_param("Rs_StaticDekelHalo", &Rs_StaticDekelHalo, PARAM_DOUBLE, PARAM_FIXED);
  add_param("Alpha_StaticDekelHalo", &Alpha_StaticDekelHalo, PARAM_DOUBLE, PARAM_FIXED);
#endif
```

# Configure and run

After changing the source code, we could activate this profile by appending the
following to the configuration file

```
    EXTERNALGRAVITY
    EXTERNALGRAVITY_STATICDEKEL
```

And we need to re-compile the code to generate a new executable.

> > > WARNING: According to the GADGET-4's rule, when we add new macros and new
> > > parameters to the source code, we also need to add corresponding
> > > documentation, otherwise the check in compilation shall not be passed. But
> > > we could disable this check by replacing **make** command with **make
> > > build**.

Then we need to assign values to the parameters in our density profile by
changing the parameter file, which is

```
Mass_StaticDekelHalo    1e4
Rvir_StaticDekelHalo    232.321
Rs_StaticDekelHalo      23.2321
Alpha_StaticDekelHalo   0.5
```

The units of these quantities are specified by you in the same parameter file.
Here I am using

```
UnitLength_in_cm         3.085678e21   ;  1.0 kpc
UnitMass_in_g            1.989e41      ;  1.0e8 solar masses
UnitVelocity_in_cm_per_s 9.7844e5      ;  1 kpc / 100 Myr
```

So the aforementioned halo is a $10^{12}\rm M_\odot$ Dekel-Zhao halo with
$r_{\rm vir}=232.321\rm kpc$, concentration $c\equiv r_{\rm vir}/r_{\rm s}=10$,
and the inner slope $\alpha=0.5$.
