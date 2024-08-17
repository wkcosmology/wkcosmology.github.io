---
title:
    The stellar mass-halo mass relation for star-forming and quiescent galaxies
date: 2024-08-17
description:
    The stellar mass-halo mass relation of galaxies is deemed one of the most
    fundamental scaling relations in galaxy formation and evolution. Subsequent
    studies found convergent evidence that SHMR profoundly depends on the star
    formation status of central galaxies, which says that, at a given stellar
    mass or halo mass, star-forming galaxies have lower stellar mass-to-halo
    mass ratio than quiescent galaxies.
tags: [Galaxy-halo connection, Dark matter halo, Galaxy evolution]
categories: [Astrophysics]
---

This blog is based on [arXiv:2408.07743](https://arxiv.org/abs/2408.07743).

# The SHMR for the general population

The picture of galaxy formation within dark matter halos suggests strong
relationships between galaxies and their host dark matter halos, and the stellar
mass-halo mass relation (SHMR) is the most fundamental relation to connect
galaxies and dark matter halos. We have seen that SHMR conveys at least three
important messages about galaxy formation (see [this blog](./halo_model.html)):

1. The stellar mass-to-halo mass ratio is **generally low** when compared with
   the universal baryonic fraction, which says that galaxies are not good at
   converting baryons into stars.
2. The stellar mass-to-halo mass ratio is lower in **low-mass halos**, which
   requires at least one additional mechanism to suppress the stellar conversion
   efficiency.
3. The stellar mass-to-halo mass ratio is lower in **high-mass halos**, which
   also requires at least one additional mechanism to suppress the efficiency
   here.

These results not only put stringent constraints on galaxy formation models, but
also elicit numerous efforts on the feedback effects from stellar feedback and
AGN feedback.

# The SHMR for star-forming and quiescent galaxies

Convergent observational evidence from independent studies has shown that, at a
_fixed stellar mass_, quiescent central galaxies prefer to live in more massive
halos than their star-forming counterparts. Moreover, measurements of individual
systems further confirm that, at a _fixed halo mass_, star-forming galaxies have
higher stellar mass than quiescent galaxies. In other words,

> Either binned in stellar mass or halo mass, star-forming galaxies can convert
> available baryons into stars more efficiently than quiescent galaxies.

When compared with state-of-the-art galaxy formation models, including one
semi-analytical model (L-GALAXIES) and three hydrodynamical simulations (TNG,
Illustris, EAGLE), we found that only the semi-analytical galaxy formation model
could reproduce the observational result while the other three hydrodynamical
simulations failed.

<figure id="fig1">
<img src="/blog/image/shmr_compare.jpg" width=740>
<figcaption>
<strong> Figure 1.</strong>
The stellar mass-halo mass relation from observational measurements (top-left
two panels) and four galaxy formation models (the remaining four panels).
</figcaption>
</figure>

# The evolution history of galaxies and their host halos

To figure out the secret of L-GALAXIES's success and all other three
simulations' failure, we further analyze the evolution history of galaxies and
their host halos. As one can see from the following figure, the average halo
growth histories are similar to each other for star-forming and quiescent
galaxies in L-GALAXIES, while, in all three hydrodynamical simulations,
quiescent galaxies prefer to live in early-formed halos. As a consequence,
L-GALAXIES can differentiate the efficiency of converting baryons into stars for
star-forming and quiescent galaxies, while galaxies in all three hydrodynamical
simulations end up with similar stellar mass and halo mass, regardless of their
star formation status.

<figure id="fig2">
<img src="/blog/image/shmr_history.jpg" width=740>
<figcaption>
<strong> Figure 2.</strong>
The evolution history of halo mass (top panels), stellar mass (middle panels),
and star formation rate (bottom panels) of galaxies in $10^{12}{\rm M_\odot}/h$
halos for four different galaxy formation models (from left to right:
L-GALAXIES, TNG, Illustris, EAGLE). The blue and red lines are for star-forming
and quiescent galaxies selected at z=0.
</figcaption>
</figure>

# Illustration

We realize that the _key difference between L-GALAXIES and the other three
hydrodynamical simulations is **how galaxy quenching is related to the assembly
history of dark matter halos**_. In L-GALAXIES, the halo assembly histories of
star-forming and quiescent galaxies are very similar to each other, which, in
other words, says that _the quenching of central galaxies only weakly correlates
to the halo assembly history_ (**Scenario-II**). On the contrary, all other
three hydrodynamical simulations predicts _that quiescent galaxies profoundly
prefer early-formed halos_ (**Scenario-I**). Finally, for the sake of
completeness, we also consider the case that _star-forming galaxies prefer
early-formed halos_ (**Scenario-III**).

The prediction of stellar mass and halo mass evolution is shown in the following
illustrative figure. In all three scenarios, all galaxies are star-forming at
the initial stage, so their stellar mass growth is proportional to the growth of
dark matter halos, thus the total available baryons, which is a reasonable
assumption. Then, some galaxies are quenched, their stellar mass growth will be
suppressed, compared to their star-forming counterparts.

In **Scenario-I**, the progenitors of quiescent galaxies were more massive when
they are still star-forming, since these progenitors live in more massive halos.
Then, when these galaxies were quenched and got suppressed in terms of their
stellar mass growth, which allows their star-forming counterparts to catch up.
Eventually, these two populations end up with similar stellar mass, which is
**disfavored** by observational data.

In **Scenario-II**, since star-forming and quiescent galaxies have similar halo
assembly histories, they have similar stellar mass initially. Then, along with
the quenching of some galaxies, their stellar mass growth is suppressed and end
up with lower stellar mass, compared to their star-forming counterparts.

In **Scenario-III**, the stellar mass of those quiescent galaxies is not only
suppressed by late-time quenching, but also disadvantaged initially since their
progenitor halo mass is lower. Consequently, those quiescent galaxies end up
with lower stellar mass than their star-forming counterparts, and the difference
is even larger than **Scenario-II**.

In summary, the qualitative observational results strongly **disfavor
Scenario-I**, while furhter discrimination between Scenario-II and Scenario-III
requires more quantitative results.

<figure id="fig3">
<img src="/blog/image/shmr_demo.jpg" width=740>
<figcaption>
<strong> Figure 3.</strong>
A illustration of the stellar mass and halo mass evolution produced by three
different scenarios of galaxy quenching and halo mass assembly history.
</figcaption>
</figure>
