---
title:
    Characterize the assembly of dark matter halos with the protohalo size
    history
date: 2023-09-04
description:
    The assembly of dark matter halos can be described by halo merger trees,
    which are too complex to be understood, nor incorporated into theoretical
    models, so data compression is required. This blog introduces a novel method
    to compress the halo merger tree into a linear protohalo size history, and
    it shows that this compression strategy keeps additional information about
    halo assembly, compared with the conventional mass accretion history.
tags: [Galaxy-halo connection, Dark matter halo, Protocluster]
categories: [Astrophysics]
---

This blog is based on [arXiv:2309.01039](https://arxiv.org/abs/2309.01039).

# Assembly of dark matter halos

Dark matter halos are the building blocks of our Universe, and their assembly
proceeds hierarchically: small halos are formed at first from the collapse of
primordial overdense regions under gravity, and they merge with each other to
assemble large halos. This process can be described by a tree-like structure
called **halo merger trees**. This tree grows from the descendant halo, and
splits into multiple progenitors recursively, as shown on Fig. 1.

<figure id="fig1">
<img src="/blog/image/halomergertree.jpg" width=600>
<figcaption>
<strong> Figure 1.</strong>
A schematic draw of a halo merger tree with cosmic time evolving from left to right. The
halos linked by the red arrows assembly the main branch.
</figcaption>
</figure>

This tree structure is too complicated to be understood, nor incorporated into
the modelling of halo formation and galaxy-halo connection, so data compression
is required. The conventional method is to extract the main branch by
recursively selecting the most massive progenitor halo, as shown by the red
arrows in Fig. 1, and this is referred to as the **mass accretion history**
([Wechsler et al. 2002](https://arxiv.org/abs/astro-ph/0108151)). This data
compression is successful since subsequent studies found that the mass accretion
history is tightly related to the clustering and structure of descendant halos
([Gao et al. 2005](https://arxiv.org/abs/astro-ph/0506510)), as well as the
properties of hosted galaxies. Therefore, this data compression greatly reduces
the complexity and keeps the critical information about halo assembly, so it is
successful.

# Protohalo size history

The redshift evolution of the protohalo size is an alternative method to
compress halo merger trees into linear arrays of histories. To begin with, each
halo at $z=0$ has multiple progenitor halos at $z> 0$, and the protohalo is
defined as the collection of these halos at a given $z$. The protohalo size is
defined as $$R(z)=\sqrt{\frac{\sum_i M_ir_i^2}{\sum_i M_i}}$$ where $M_i$ and
$r_i$ are the mass and the distance to the center of mass for $i$-th halo, and
the sum is for all halos in the protohalo at the redshift of $z$.

<figure id="fig2">
<img src="/blog/image/protohalo_size_evolution.jpg" width=740>
<figcaption>
<strong> Figure 2.</strong>
Top panels: The protohalo size histories of halos in different halo mass bins.
Bottom panels: The protohalo size histories in bins of the central-to-total stellar
mass ratio of descendant halos.
</figcaption>
</figure>

The protohalo size history can be described by a double power-law function, as
shown on Fig. 2. At $z> 2$, the protohalos have nearly no evolution in their
size, and the massive halos have larger protohalos. At $z\sim 2$, all protohalos
begin to shrink and eventually collapse into the descendant halos at $z\sim 0$.

The bottom panels of Fig. 2 show that the protohalo size strongly correlates to
the central-to-total stellar mass ratio of descendant halos, where larger
protohalos collapse into descendant halos with more substructures and less
dominant central galaxies.

# Protoclusters

A straightforward application of the tight correlation between the protohalo
size and the descendant substructure is to refine the connection between
protoclusters and descendant clusters; protoclusters are just protohalos with
cluster-size descendant halos.

<figure id="fig3">
<img src="/blog/image/protocluster_secondary.jpg" width=740>
<figcaption>
<strong> Figure 3.</strong>
The left two panels: The correlation between the protocluster size at $z\sim 2$
and $z\sim 8$ and the central-to-total stellar mass ratio of descendant halos
at $z\sim 0$. The right panel: The inter-correlation of protocluster sizes at $z\sim 2$
and $z\sim 8$.
</figcaption>
</figure>

As shown in Fig. 3, the protocluster size strongly correlates to the
central-to-total stellar mass ratio of descendant halos. Once the protoclusters
can be identified with their sizes unbiasly estimated, we can use it to refine
the connection of protoclusters across cosmic time and link them to descendant
clusters at $z\sim 0$. In other words, we can recover the assembly history of
galaxy clusters statistically, from which we can also study the evolution of
their member galaxies.

# Halo assembly bias

Dark matter halos are clustered in the universe, and the clustering strength
depends on halo properties. The primary dependence is on the halo mass, where
more massive halos are more clustered, and this can be explained with a Gaussian
initial density field and the Press-Schechter formalism
([Mo & White 1996](https://arxiv.org/abs/astro-ph/9512127)). Besides, the
clustering of dark matter halos also depends on their secondary properties, such
as the halo formation time, halo concentration, halo spin, and halo
substructure. These dependence is collectively referred to as the **halo
assembly bias** effect, or the **secondary halo bias** effect. It is noteworthy
that the existence of the halo assembly bias effect for some secondary halo
property indicates the entanglement of this property and the surrounding
environment.

<figure id="fig4">
<img src="/blog/image/mah_psh_on_nbr_cnt.jpg" width=740>
<figcaption>
<strong> Figure 4.</strong>
The mean mass accretion history (left) and protohalo size history (right)
for cluster-size halos with different numbers of companion cluster-size halos
within 10 Mpc.
</figcaption>
</figure>

There is one unresolved problem: previous studies find that the halo
concentration exhibits strong halo assembly bias effect, while no such effect
can be observed on the mass accretion history for cluster-size halos (see the
left panels of Fig. 4, also
[Jing et al. 2007](https://arxiv.org/abs/astro-ph/0610099) and
[Mao et al. 2018](https://arxiv.org/abs/1705.03888)). _If one believes that the
halo structure is determined by their assembly history, then why the halo
concentration ''knows'' the surrounding environment without the mass accretion
history "knowing" it?_ Our answer is that the information about the halo
assembly bias effect is lost during the data compression from halo merger trees
to mass accretion histories. And Fig. 4 shows that this information is captured
by the protohalo size history since it strongly correlates to the surrounding
environment, as halos with larger protohalo size tend to live in denser regions.

# Summary

We propose the protohalo size history as an alternative method to compress halo
merger trees. The protohalo size history is also a complement to the
conventional mass accretion history for the following reasons. First of all, the
main progenitor only occupies a small portion of all progenitor halos at high
$z$, while the calculation of protohalo size involves all the progenitor halos.
Secondly, the correlation between the mass accretion history and the
substructure of descendant halos is rather weak, while the amplitude of the
protohalo size history strongly correlates to the central-to-total stellar mass
ratio of descendant halos. Finally, for cluster-size halos, the mass accretion
history has nearly no correlation to the spatial clustering of dark matter
halos, which is the halo assembly bias effect, while the amplitude of the
protohalo size history can induce strong halo assembly bias effect.
