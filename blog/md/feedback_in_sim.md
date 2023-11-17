---
title: Feedback in hydrodynamical simulations
date: 2023-11-17
description:
    Feedback processes, arising from stellar wind, SN explosion, and black hole
    accretion, play a critical role in regulating galaxy formation and
    evolution. The incorporation of feedback processes in hydrodynamical
    simulations enables us to numerically produce galaxies very similar to what
    we see in our Universe. However, some misunderstandings must be clarified
    before we blindly use the data product from these hydrodynamical
    simulations.
tags: [Hydrodynamical simulation]
categories: [Astrophysics]
---

# Feedback in theory

Galaxies are formed within dark matter halos, which are virilized structures
collapsed from primordial overdense regions. Dark matter halos contain both dark
matter and baryons with a mass ratio of 6:1 ($f_{\rm b}\approx 0.16$). If a
constant fraction of baryons in all halos is converted into stars in central
galaxies, we expect the stellar mass function of central galaxies to be in the
same shape as that of the halo mass function. But we did not see this. Instead,
we found that the stellar mass conversion efficiency, which is defined as
$\epsilon=M_*/(f_{\rm b}M_{\rm h})$, declines towards both low-mass and
high-mass ends. This indicates at least two mechanisms to suppress the stellar
mass conversion efficiency in low-mass and massive halos.

In the last two decades, many candidate mechanisms were proposed, among which
the most effective two processes are **stellar feedback** in low-mass halos and
**AGN feedback** in massive halos. Both feedback processes can suppress star
formation activities by heating cold interstellar medium and expelling it out of
galaxies and even halos. The difference is that the stellar feedback processes
are powered by the stellar winds of massive stars and supernova explosions,
which is less powerful than the AGN feedback process, which is powered by the
energy released during the accretion of supermassive black holes in galaxies.

# Feedback in simulation

One may expect that we can incorporate the feedback processes in hydrodynamical
simulations by simply heating gas in star-forming regions and around accreting
supermassive black holes. However, these feedback processes can not suppress the
stellar mass conversion efficiency as we expected due to a numerical issue
called the **overcooling problem**. The locations where star formation and black
hole accretion took place also contain abundant gas. Therefore, once the
feedback energy is deposited into these regions, frequent collision among gas
particles will rapidly convert this thermal/kinetic energy into radiation
through the cooling process.

The overcooling problem is a numerical effect since we can only model the gas
component with $\sim 10^{6-7}M_\odot$ gas Particles (which are different from
physical gas particles, and we use capital P here to distinguish them) due to
the limited computational power. Therefore, the feedback energy can only be
injected into the "massive" gas Particle as a whole and induce a small amount of
temperature increment. Then all the gas particles in this gas Particle are
involved in converting feedback energy into radiation, which could be very
efficient. The realistic situation might be that the feedback energy is
deposited into a relatively small amount of gas particles around, e.g. a few
hundred solar mass ISM, and it can induce a huge temperature increment so that
it cannot be cooled rapidly.

Many _numerical techniques_ were proposed to conquer this overcooling problem.
One method is to disable the cooling and/or the hydrodynamical interaction with
surrounding gas Particles temporarily by hand. Alternatively, one can inject
huge amounts of energy into several selected ''lucky'' gas Particles in either
thermal or kinetic form.

# Stellar mass, halo mass, and feedback efficiency

[Schaye et al. 2015](https://arxiv.org/abs/1407.7040) gives an excellent
argument about how the stellar mass is determined by stellar feedback
efficiency, and how the black hole mass is determined by AGN feedback
efficiency. Here we briefly introduce it. Firstly, a galaxy is a steady system
in the sense that the gas acquisition through inflow is balanced by outflow
processes driven by feedback. Note here we ignore the gas budget consumed by
star formation activities. Secondly, we assume that the ratio between outflow
rate $\Psi$ is proportional to the star formation rate $\rm SFR$, where their
ratio is commonly referred to as the loading factor,
$\eta \equiv \Psi/{\rm SFR}$. Here the loading factor is equivalent to the
feedback efficiency, which specifies the amount of gas expelled per unit stellar
mass formed.

Consequently, the star formation rate is determined by the feedback efficiency
and the outflow rate. Since the outflow rate is determined by the inflow rate
which only depends on gravity, the star formation rate solely depends on the
feedback efficiency. If the stellar feedback process is twice as efficient, a
galaxy can form half of the stellar mass to generate an equally strong outflow
to balance the inflow rate. Hence the stellar mass is only half of the fiducial
case.

A similar argument also applies to the relation between black hole masses and
the AGN feedback efficiency. If the AGN feedback efficiency is twice the
fiducial value, the black hole can generate an equally strong outflow by
accreting half of the fiducial mass. Hence the resulting black hole is half of
the fiducial value.

From the above arguments, we learned that the stellar mass and black hole mass
in hydrodynamical simulations are determined by feedback efficiencies, which are
poorly constrained in observation, so they can be regarded as free parameters in
simulations. Consequently, all hydrodynamical simulations must be tuned to
reproduce the stellar mass function and the stellar mass-black hole mass
relation to deliver "realistic" galaxy catalogs. It is important to remember
that the stellar mass and black hole mass of galaxies in hydrodynamical
simulations are not produced from the first-principle physics, which is usually
misunderstood by simulation users and exaggerated by simulation creators.

This argument might be counterintuitive at first since we thought that the star
formation processes should be determined by micro-physics, including gas
cooling, giant molecular cloud formation, and then star formation. So how can we
"simulate" the star formation process without the ability to resolve this
physics? We are approaching this problem with a different method. We assume that
the relationship among different global quantities, i.e. stellar mass, SFR, and
outflow rate, can be described by a set of differential equations by assuming
the system is in equilibrium. Then we can specify the solution to these
quantities once we have the boundary condition, which is the inflow rate in this
case.

# Last word

A system can be investigated with bottom-up and top-down approaches. Taking
galaxy formation and evolution as an instance, the bottom-up approach requires
us to simulate all the processes from the first-principle physics, which is
computationally demanding. To simulate realistic star formation activities in
galaxies, we at least need to resolve the Jeans mass, which is about a few
hundred solar masses for cold ISM whose temperature is about 10K. We can only do
some zoom-in simulations for dwarf galaxies with such resolution, not to mention
simulations in cosmological boxes. Alternatively, we can approach this problem
top-down-wardly. The rationale behind it is that the evolution of a system can
be determined with a set of differential equations describing its behavior and a
set of well-defined boundary conditions. This is exemplified by the
aforementioned argument of galaxies as self-regulating systems.
