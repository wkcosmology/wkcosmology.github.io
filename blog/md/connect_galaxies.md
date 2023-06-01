---
title: Connect galaxies across cosmic time
date: 2023-05-30
description:
    Galaxies observed at different redshifts are causally irrelevant but
    statistically related. By connecting galaxies across cosmic time in a
    model-dependent way, one can directly infer the evolution of galaxy
    properties.
tags: [Galaxy-halo connection, Galaxy evolution]
categories: [Astrophysics]
---

# Redshift evolution and causality

Light speed is finite, so it takes finite time before we can see distant
objects. For example, it takes about eight minutes for the photon to travel from
the Sun to the Earth, so the Sun perceived by us is actually what it is like
eight minutes ago. This effect becomes more non-negligible in astronomy because
all objects that we are interested in are so distant that it may take millions
to trillions of years before we can receive the light these distant galaxies
emit.

This effect also allows us to study the evolution of our Universe and the
galaxies in it. For example, galaxies observed at $z\sim 1$ are when the
Universe is only 6 Gyr old, while the current age for our Universe is about 13.7
Gyr. Similarly, $z\sim 2$ galaxies are at the time when the Universe was 3.4 Gyr
old. Hence, by observing galaxies at different redshifts, we can get the
**statistical** evolution of galaxies as a function of cosmic time.

However, one must be aware that we can only get the statistical evolution
instead of the causal evolution, because we are actually observing **different
patches** of our Universe at different cosmic time.

# Galaxy-halo connection

Our method of connecting galaxies across cosmic time relies on the tight
correlation between galaxies and their dark matter halos, which is called the
galaxy-halo connection in literature (See [this blog](./halo_model.html) for a
physical picture).

Dark matter halos and their assembly histories, i.e. their progenitors, can be
generated from pure dark matter numerical simulations and semi-analytical
methods.

The connection between dark matter halos and galaxies is built upon several
methods. The first category contains methods based on heuristic assumptions. For
example, the **subhalo abundance matching** (SHAM) method assumes that more
massive galaxies tend to live in more massive halos. The **age distribution
matching** method assumes that, at a given stellar mass, early-formed dark
matter subhalos prefer to host quiescent galaxies, which can help us to assign
colors or the star formation rates to subhalos. The second category involves a
parametric model to populate galaxies into dark matter halos (not subhalos) and,
then, constrain these parameters using summary statistics, like the stellar mass
function and the two-point correlation function. The third category is to model
the formation and evolution of galaxies in dark matter halos, like the
hydrodynamical simulations, semi-analytical models, and empirical models of
galaxy formation and evolution (these models will be introduced in a separate
blog). Finally, there have be many attempts to directly probe the dark matter
distribution around observed galaxies through gravitational lensing, satellite
galaxy kinematics, and the kinematics of gas and stars.

# Connect galaxies across cosmic time

To connect galaxies across cosmic time, we can first populate observed galaxies
into subhalos at different redshifts leveraging the established galaxy-halo
connection. Then, we can use the causal link provided by the subhalo merger
trees to connect these populated galaxies across cosmic time. This is the gist
of this method.

# Summary in one figure

<figure id="fig1">
<img src="/blog/image/connect_gals_fig1.jpg" width=740>
<figcaption>
<strong> Figure 1.</strong>
A schematic draw on connecting galaxies across cosmic time.
</figcaption>
</figure>
