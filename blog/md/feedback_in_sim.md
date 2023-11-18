---
title: Feedback in hydrodynamical simulations
date: 2023-11-17
description:
    Feedback processes, arising from stellar wind, SN explosion, and black hole
    accretion, play a critical role in regulating galaxy formation and
    evolution. The incorporation of feedback processes in hydrodynamical
    simulations enables us to numerically produce galaxies very similar to what
    we see in our Universe, and these simulations are widely used to obtain
    insights into different physical processes that regulate galaxy formation
    and evolution. However, we must first understand the numerical
    implementation of these physical processes and their limitations in
    hydrodynamical simulations.
categories: [Astrophysics]
---

# Why feedback is necessary

Galaxies are formed within dark matter halos, which are virilized structures
collapsed from primordial overdense regions. Dark matter halos contain dark
matter and baryons with a mass ratio of 6:1 ($f_{\rm b}\approx 0.16$). If a
constant fraction of baryons in all halos is converted into stars in central
galaxies, we expect the stellar mass function of central galaxies to be in the
same shape as that of the halo mass function. But we did not see this. Instead,
we found that the stellar mass conversion efficiency, which is defined as
$\epsilon=M_*/(f_{\rm b}M_{\rm h})$, declines towards both low-mass and
high-mass ends. This indicates _at least two mechanisms to suppress the stellar
mass conversion efficiency in low-mass and massive halos._

<figure id="fig1">
<img src="/blog/image/smhmr.png" width=700px>
<figcaption>
<strong> Figure 1.</strong>
Stellar mass-halo mass relation compiled from previous research.
Taken from <a href="https://arxiv.org/abs/1804.03097">Wechsler & Tinker 2018 </a>.
</figcaption>
</figure>

In the last several decades, many candidate mechanisms were proposed, among
which the most effective two processes are **stellar feedback** in low-mass
halos and **AGN feedback** in massive halos. Both feedback processes can
suppress star formation activities by heating cold interstellar medium and
expelling it out of galaxies and even halos. The difference is that the stellar
feedback processes are powered by the stellar winds of massive stars and
supernova explosions, which is less powerful than the AGN feedback process,
which is powered by the energy released during the accretion of supermassive
black holes in galaxies.

# Feedback in hydro-simulations: radiative loss

**Cosmological hydrodynamical galaxy formation simulations**, abbreviated with
**hydro-simulations** in the following text, are intended to simulate the
formation and evolution of galaxies from first-principle physics. However, due
to the computational limitation, we can only use massive gas cells
($\gtrsim 10^6$ solar mass) to represent physical gas particles, which consist
of neutral/ionized atomic particles and molecules. Therefore, it is inevitable
to assume that the gas particles in each gas cell have the same temperature and
density. One consequence is that once a gas cell is heated, all the gas
particles within this cell will be involved in the cooling process by converting
the thermal energy into radiation, which is not modeled in most
hydro-simulations.

The major obstacle to implementing effective AGN feedback processes in
hydro-simulation is the **radiative loss problem**. Stellar feedback and AGN
feedback take place at star-forming regions and around accreting black holes,
where the gas density is high. Consequently, the feedback energy will be cooled
and radiatively lost rapidly once deposited into gas cells in these high-density
regions. This is a _numerical effect_ due to the coarse modeling of gas cells,
and the real situation could be that only a small amount of gas particles are
heated to a very high temperature so that they cannot be easily cooled, and
consequently, they can effectively push other gas particles away and suppress
the star formation activities.

Many numerical techniques were invented to circumvent the radiative loss
problem. One strategy is to directly inject kinetic energy by accelerating gas
cells rather than heating them, but this is still not enough since gas cell
collisions in these high-density regions can rapidly convert the kinetic energy
to thermal energy and radiative it away. A more brutal method is to disable the
hydrodynamical interaction and/or radiative cooling for gas cells that are
accelerated or heated by feedback processes. Alternatively, one can inject huge
amounts of energy into several selected ''lucky'' gas cells in either thermal or
kinetic form, in which case the cooling time is lengthy enough for these gas
cells to interact with other gas cells and push them away.

# Feedback efficiency, stellar mass, and black hole mass

Once an effective feedback recipe is adopted, we need to determine the
parameters that control how effective feedback processes expel gas out of
galaxies and/or halos. This **feedback efficiency** for stellar feedback can be
quantified as the mass of outflow gas driven by the feedback of per unit stellar
mass formed, which is called the **loading factor**
$\eta_{\rm SF}\equiv \Phi/{\rm SFR}$ with $\Phi$ denoting the outflow rate.
Similarly, the feedback efficiency for AGN feedback can be quantified as
$\eta_{\rm AGN} =\Phi/\dot M_{\rm BH}$. These feedback efficiencies are poorly
constrained in observation, since they can only be measured in a highly biased
sample and large uncertainties arise due to various observational effects and
different model choices. Therefore, the feedback efficiencies are free
parameters to be tuned in hydro-simulations.

[Schaye et al. 2015](https://arxiv.org/abs/1407.7040) argue that the feedback
efficiencies for stellar and AGN feedback control the stellar mass and black
hole mass of galaxies, respectively. Let us start with the relation between
stellar mass and stellar feedback efficiency. Firstly, we assume that a galaxy
is a quasi-equilibrium system in the sense that the gas acquisition through
inflow is balanced by outflow processes driven by feedback. Note here we ignore
the gas budget consumed by star formation activities. Secondly, we assume that
_stellar loading factor $\eta_{\rm SF}$ is a constant\_ so that the star
formation rate is determined by the feedback efficiency and the outflow rate.
Since the outflow rate is determined by the inflow rate which only depends on
gravity, the star formation rate solely depends on the feedback efficiency. If
the stellar feedback process is twice as efficient as the fiducial case, a
galaxy can form half of the fiducial stellar mass to generate an equally strong
outflow to balance the inflow rate. Hence the stellar mass is only half of the
fiducial case.

A similar argument also applies to the relation between black hole masses and
the AGN feedback efficiency. If the AGN feedback efficiency is twice the
fiducial value, the black hole can generate an equally strong outflow by
accreting half of the fiducial mass. Hence the resulting black hole is half of
the fiducial value.

From the above arguments, we learned that the stellar mass and black hole mass
in hydro-simulations are determined by feedback efficiencies, which are free
parameters in simulations. Consequently, hydro-simulations must be tuned to
reproduce the stellar mass function and the stellar mass-black hole mass
relation to deliver "realistic" galaxy catalogs. It is important to remember
that the stellar mass and black hole mass of galaxies in hydrodynamical
simulations are not produced from first-principle physics, which is usually
misunderstood by some simulation users and exaggerated by some simulation
creators.

# Two approaches

One may wonder how can we simulate star formation and feedback without resolving
some critical physical processes, including gas cooling, giant molecular cloud
formation, and star formation. Generally speaking, a system can be investigated
with two approaches: **bottom-up** and **top-down**. Taking galaxy formation and
evolution as an instance, the bottom-up approach requires us to simulate all the
processes from first-principle physics, which is computationally demanding. To
simulate realistic star formation activities in galaxies, we at least need to
resolve the Jeans mass, which is about a few hundred solar masses for cold ISM
whose temperature is about 10K. We can only do some zoom-in simulations for
dwarf galaxies with such resolution, not to mention simulations in cosmological
boxes. Alternatively, we can approach this problem top-down-wardly. The
rationale is that _the evolution of a system can be determined with a set of
differential equations describing its behavior and a set of well-defined
boundary conditions_. For a galaxy system, the critical physical processes,
including inflow, outflow, black hole accretion, and star formation, are
governed by a set of differential equations, including the continuity equation,
the star formation law, and feedback recipes. The boundary condition is the
stellar mass and black hole mass of this galaxy at the present day. Hence, the
evolution trajectory is uniquely determined to some extent.
