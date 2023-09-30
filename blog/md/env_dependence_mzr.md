---
title: The environmental dependence of the mass-metallicity relation
date: 2023-05-15
description:
    Gas-phase metallicity is a crucial probe of various physical processes
    during the formation and evolution of galaxies. Here we studied the
    environmental dependence of the mass-metallicity relation using
    state-of-the-art cosmological hydrodynamical simulations of EAGLE and
    IllustrisTNG. We found that central and satellite galaxies have the opposite
    environmental dependence of their mass-metallicity relation, which is due to
    different underlying physical processes.
tags: [Metallicity]
categories: [Astrophysics]
---
This blog is based on [arXiv:2305.08161](https://arxiv.org/abs/2305.08161).

# Introducing galaxy and metallicity

A galaxy is defined as the assembly of gravitationally bound visible stars. It
may also contain multiphase gas and a dark matter halo, but these components are
not necessary. The most fundamental quantity to describe a galaxy is its stellar
mass, which is the "mass" in the title.

Metal, different from our daily usage, is defined as all the elements heavier
than helium. This definition is motivated by the fact that most of the hydrogen
and helium in our Universe are formed during the primordial nuclear synthesis
process, while all other elements are primarily formed during the stellar
evolution process. Metal is stored in galaxies either in the stars, or in the
gas phase. The former can be observed through the absorption line in the stellar
atmosphere, while the latter can be observed through the emission line emitted
by these metal elements after they are excited to a higher energy level and
decayed to the basic level. Here we only focus on the gas-phase metallicity,
although stellar metallicity is also very interesting. For each galaxy, we can
define a quantity called metallicity to describe the fraction of metal within
the gas.

# Metallicity and its physics

The gas-phase metallicity is regulated by many different processes. First of
all, the formation and evolution of stars will consume gas and return
metal-enriched gas, thus this process increases the metallicity. Secondly, most
of the galaxies are accepted fresh gas from the inter-galactic space, and these
gas is mostly metal-poor and able to dilute the gas-phase metallicity. Finally,
there are various processes that drive gas out of the galaxy, like the feedback
process and the gas-stripping processes. These processes can alter the
metallicity depending on the spatial distribution of metallicity within the
galaxy and the preference affected locations. For example, if the galaxy center
is more metal-rich than the outskirt, the AGN feedback process will decrease the
global metallicity since it preferentially ejects gas in the galaxy center,
which is higher than the average metallicity in the galaxy, while the
gas-stripping process will increase the global metallicity since the metal-poor
gas on the galaxy outskirt is stripped.

On the opposite, the measurement of galaxy metallicity can help us constrain the
above processes and understand the physics behind galaxy formation and
evolution. In the previous decades, many models are proposed to explain the
observed mass-metallicity scaling relation (MZR) in our local and distant
Universe. However, the environmental dependence of this scaling relation is
poorly studied, and this is our motivation to initiate this project.

# The environmental dependence of MZR

Using the state-of-the-art cosmological hydrodynamical simulation of EAGLE, we
found that, at a given stellar mass, low-mass galaxies living in massive halos
have higher metallicity than their counterparts in low-mass halos. However, this
trend is reversed for high-mass galaxies, where those in massive halos have
lower metallicity. So for the IllustrisTNG simulation. This seemingly
complicated environmental dependence becomes much clearer when galaxies are
separated into centrals and satellites. Central galaxies, which dominate the
high-mass end, are more metal-poor when they are living in more massive halos,
while satellite galaxies, which dominate the low-mass end, are more metal-rich
when found in massive halos. These trends preserve through $z\sim 2$ to our
local Universe.

# The physics driving the env.-dependency

We further explored the underlying physics that drives this environmental
dependence of MZR for central and satellite galaxies separately. For central
galaxies, we found that the environmental dependence of MZR is primarily due to
the excessive gas accretion at high-$z$. Those living in massive halos tend to
accrete more metal-poor and pristine gas, thanks to the efficient code-mode
accretion, and these gas can effectively dilute the metal content of the galaxy.
At low $z$, the effect of this excessive accretion becomes subdominant, while
the AGN feedback plays a crucial role here. Due to the negative metallicity
gradient possessed by most of the central galaxies in the EAGLE simulation, AGN
feedback preferentially ejects those metal-rich gas in the galaxy center and
decreases the global metallicity consequently.

Satellite galaxies suffer from two additional environmental effects, compared
with centrals. The first one is called strangulation, which means the gas
accretion is terminated after a central galaxy becomes a satellite. Without the
dilution of these accreted metal-poor gas, the metallicity of these satellite
galaxies increases accordingly. The other effect is called ram-pressure
stripping, which originates from the interaction between the cold interstellar
medium (ISM) in satellite galaxies and hot intra-cluster medium (ICM) in the
host halo. When the interaction becomes strong enough, the ISM can be stripped
out of the satellite. Since the gas on the galaxy outskirt are the most loosely
bound, they are preferentially stripped. Besides, since these gas are relatively
metal-poor, their stripping can effectively increase the global metallicity.

# Urgency for observational test

The above analysis is based on hydrodynamical simulations and cannot be trusted
until its prediction is verified observationally. At low $z$, the environmental
dependence of satellite galaxies is consistent with the observation from the
SDSS survey, while the environmental dependence for central galaxies requires
more accurate and unbiased halo mass calibration. At high $z$, the predictions
of the EAGLE and IllustrisTNG simulations are consistent with the observational
result in [Wang et al. 2022](https://arxiv.org/abs/2108.06373). More
statistically robust test of these model predictions become possible along with
the next-generation galaxy surveys, like MOONS and PFS.
