---
title: Estimating the concentration parameter of simulated halos
date: 2023-09-22
description:
    The radial density distribution of simulated dark matter halos can be
    described a universal NFW profile with two free parameters, i.e. halo mass
    and halo concentration. Therefore, estimating these two parameters
    efficiently and robustly for simulated halos is of paramount importance in
    the face of the upcoming cosmological simulations in large boxes.
tags: [Dark matter halo]
categories: [Astrophysics]
---

# Halo density profile

Dark matter halos, as the building blocks of cosmic structures, consists of dark
matter particles in virial equilibrium. Numerical simulations show that the
radial density distribution of dark matter halos can be described by a universal
NFW profile, which is

$$
\rho(r) = \frac{\rho_0}{r/r_s(1 + r/ r_s)^2}
$$

which approximates $r^{-1}$ for $r\ll r_s$ and $r^{-3}$ for $r\gg r_s$. This
profile has two free parameters, $\rho_0$ and $r_s$, which can be replaced by
other two equivalent parameters: halo mass $M_h$ and halo concentration
$c\equiv r_{\rm vir}/r_s$, where $r_{\rm vir}$ is the virial radius.

$N$-body simulation is an essential tool to study the formation and evolution of
dark matter halos, where dark matter are represented by massive particles with a
mass of $\sim 10^3-10^{10}\rm M_\odot$, depending on the numerical resolution.
The movement of these particles under gravity are simulated by iteratively
calculate the gravitational force, the acceleration, the change of velocity, and
the displacement. Since these particles are very massive, the gravity between
close encounters will become unphysically large. Therefore, to suppress this
artificial, the gravitational potential induced by a particle is

$$
\phi(r) = \frac{GM}{\sqrt{r^2 + \epsilon^2}}
$$

where $\epsilon$ is the gravitational force softening length, below which the
gravitational interaction deviates from Newton's gravity and cannot be trusted.

In $N$-body simulations, dark matter halos are identified by a percolation
algorithm called Friends-of-Friends (FoF), where groups of dark matter particles
are linked together if the distance between two particles are below a chosen
value, which is usually 0.02 times the mean inter-particle distance. The
particles in each group are collectively defined as a **FoF halo** or a **main
halo**. Then, the particle with the minimal gravitational potential is usually
chosen as the **halo center**. To determine the halo boundary, one can put a
sphere centered at the halo center with shrinking radius until the mean density
within the sphere equals to a threshold, whose value depends on the application
situation and a commonly used one is 200 times the critical density of the
universe. And the radius of this sphere is defined as the **virial radius**,
while the mass enclosed is defined as the corresponding **halo mass**. Note that
both the halo radius and the halo mass depend on the choice of the threshold
density.

# Estimating halo concentration

The previous section describes the measurement of halo radius and halo mass,
which is unambiguous. However, the measurement of halo concentration is not so
straightforward.

## NFW profile fitting method

The most straightforward method is to fit the radial density profile to the NFW
profile by minimizing the $\chi^2$ value, which is expressed as

$$
\chi^2 = \sum_i\frac{(M_i^{\rm sim} - M_i)^2}{M_i^{\rm sim}}
$$

where $M_i^{\rm sim}$ is the total mass is the $i$-th radial bin and $M_i$ is
the prediction of the NFW profile. We note that the the density profile below
the gravitational softening length cannot be trusted, so we need to exclude the
particles at the inner part from the fitting.

## $V_{\rm max}/V_{\rm vir}$ method

For NFW halos, the circular velocity at $r$ is defined as

$$
V_c(r) = \sqrt{\frac{GM}{r}}
$$

and $V_{\rm max}$ and $V_{\rm vir}$ are defined as

$$
V_{\rm max} = \texttt{MAX}\left(V_c(r)\right),~~~V_{\rm vir} = V_c(r_{\rm vir})
$$

For NFW halos, the halo concentration is related to $V_{\rm max}/V_{\rm vir}$ as

$$
\frac{V_{\rm max}}{V_{\rm vir}} = \left[\frac{0.216c}{\ln(1 + c) - c / (1 + c)}\right]^{1/2},
$$

through which we can derive halo concentration. However, this relation is only
applicable to $c\gtrsim 3$, since $V_{\rm max}\geq V_{\rm vir}$ by definition.
In addition, [Mansfield & Avestruz 2021](https://arxiv.org/abs/2008.08591) found
that $V_{\rm max}/V_{\rm vir}$ will be systematically underestimated for halos
represented by $<1000$ particles.

## Maximum likelihood method

The maximum likelihood method is always a promising way to estimate parameters
in distribution functions. For NFW halos, the logarithmic likelihood function is

$$
\ln\mathcal L\propto \sum_i\left(\ln(x_i) - \ln\left[\ln(1 + c) - \frac{c}{1 + c}\right] - 2\ln(1 / c + x_i)\right)
$$

where $x_i = r_i/r_{\rm vir}$. The shortcoming of this method is that the
summation over all the particles needs to be evaluated at each iteration in the
optimization process, which is computationally expensive.

## $R_1$ method

Here we define the first moment of matter distribution as

$$
R_1 = \frac{1}{M_{\rm vir}r_{\rm vir}}\int_0^{r_{\rm vir}}4\pi r^3\rho(r)dr
$$

and it is related to halo concentration for NFW halos through

$$
R_1 = \frac{c -2\ln(1 + c) + c / (1 + c)}{c[\ln(1 + c) - c/(1 + c)]}
$$

so that one can easily obtain halo concentration by interpolating the above
equation. This method can accurately estimate the concentration parameter when
halos are represented by only a few hundreds particles, as shown in the
following section.

# Convergence test

The computational cost of $N$-body simulations is proportional to the number of
particles, so one must balance between the box size and the mass resolution,
which means either a large box with low mass resolution, or a small box with
high mass resolution. A large box with low mass resolution means that dark
matter is represented by massive particles. Accordingly, the gravitational
softening length should be large to suppress the artificial gravity between
close encounters. Consequently, low-mass halos are poorly sampled and the mass
distribution in the inner density region cannot be trusted. On the contrary, a
small box with fine mass resolution means that the structure of dark matter
halos can be well resolved, at the cost of poor statistics for massive halos.

Regarding this issue, one may ask what is the smallest halo that can be resolved
at a given mass resolution, and what kinds of properties of these halos can be
trusted. These questions can be answered by the **convergence test**, where the
results obtained from low-resolution simulations are compared with the
high-resolution version. And it will be better if these two simulations have
identical initial condition to eliminate the cosmic variance effect. Here we use
TNG100-1-Dark and TNG100-3-Dark from the IllustrisTNG simulation suite. These
two simulations have identical initial condition and simulation code, but
different mass resolution and gravitational force softening length.

Fig. 1 shows the mass-concentration relation of simulated halos in these two
simulation, together with a higher resolution simulation TNG50-1. Here one can
see that the NFW profile fitting method underestimate the concentration
parameter of low-mass halos in TNG100-3-Dark since the density peak at the halo
center is smoothed by the large gravitational force softening length. In
contrast, the $R_1$ method suffers less from such an effect since it gives more
weight to the outer region.

<figure id="fig1" style="float:left;">
<img src="/blog/image/mass_concentration_relation_tng.jpg" width=400 style="float:left;">
<figcaption style="margin-top:200px;">
<strong> Figure 1.</strong>
The mass-concentration relation of simulated halos in three TNG-Dark simulations.
where the concentration on the top and bottom panels is obtained through NFW
profile fitting method and $R_1$ method respectively. This figure shows that
the NFW profile fitting method tends to underestimate the concentration parameter
for low-mass halos in low-resolution simulations due to large gravitational force
softening length, while the $R_1$ method is less affected by such an effect.
</figcaption>
</figure>

# Summary

We introduced four different methods to estimate the concentration parameter of
simulated halos, among which two of them are proposed in
[Wang et al. 2023](https://arxiv.org/abs/2309.01039) for the first time. Here we
particularly emphasize the efficiency and robustness of the $R_1$ method and
suggest all the $N$-body simulations list it as one of halo properties.
