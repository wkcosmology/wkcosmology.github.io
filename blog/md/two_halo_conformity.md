---
title: Dissect the two-halo galactic conformity effect for central galaxies
date: 2023-02-09
description:
    Observations suggest that the star formation states of central galaxies
    depends on not only their internal properties, but also the external
    environment, where central galaxies around another quiescent central galaxy
    is more probable to be quiescent; this correlation extends to $\sim 4$ Mpc.
    This phenomenon poses a challenge to the conventional galaxy formation
    models, in which the properties of galaxies are determined by their local
    environment.
tags: [Galaxy quenching, Galaxy environment]
categories: [Astrophysics]
---

This blog is based on [arXiv:2304.06886](https://arxiv.org/abs/2304.06886).

# Two-halo galactic conformity

[Kauffmann et al. 2013](https://arxiv.org/abs/1209.3306) first found the
**two-halo galactic conformity** effect, where _galaxies around quiescent
central galaxies have a higher fraction of quiescence than galaxies around
star-forming central galaxies, and this correlation extends to several Mpcs_.
Subsequent studies found that this effect is caused by the correlation between
the quiescent fraction of central galaxies and the large-scale environment
([Sun et al. 2018](https://arxiv.org/abs/1801.01617)). Similar effects are also
found in semi-analytical models and hydrodynamical simulations of galaxy
formation, from which they find that the central galaxies around massive
clusters are the major contributor to this effect
([Lacerna et al. 2022](https://arxiv.org/abs/2110.09536)).

# Physical explanations

There have been two major explanations proposed for the two-halo galactic
conformity effect. [Kauffmann 2015](https://arxiv.org/abs/1508.02400) proposed
that the powerful AGN feedback not only quenches the host galaxy, but also
affects the star formation activities of neighbour galaxies up to several Mpcs.
[Ayromlou et al. 2023](https://arxiv.org/abs/2207.02218) proposed that central
galaxies start to quench their star formation activities prior to falling into
the host halo and becoming satellite galaxies.

# Backsplash galaxy

Here we analysed the two-halo galactic conformity effect in the IllustrisTNG
simulation, from which we see strikingly similar signals to the observational
results. A further investigation reveals that the backsplash galaxies are
responsible for this signal, since the removal of these backsplash galaxies can
effectively eliminate the two-halo galactic conformity signal, as one can see
from Figs. 1 and 2.

<figure id="fig1">
<img src="/blog/image/conformity1.jpg" width=740>
<figcaption>
<strong> Figure 1.</strong>
The quiescent fraction of central galaxies as a function of stellar mass in
different large-scale environments in the IllustrisTNG simulation. The middle
panel shows the result with the backsplash galaxies removed. The right panel
shows the result with the central galaxies around massive halos removed. Both
can effectively eliminate the two-halo galactic conformity effect.
</figcaption>
</figure>

<figure id="fig2">
<img src="/blog/image/conformity2.jpg" width=740>
<figcaption>
<strong> Figure 2.</strong>
The quiescent fraction of central galaxies around quiescent (red) and
star-forming (red) central galaxies. The middle panels show the result with the
backsplash galaxies removed, and the bottom panels show the results with the
central galaxies around massive halos removed.
</figcaption>
</figure>

The **backsplash galaxy** is a central galaxy at the time of observation, but
was a satellite galaxy of another massive halo previously. It is noteworthy that
the emergence of backsplash galaxies depends on the definition of halo boundary.
If one adopts the backsplash radius as the halo boundary, most of the backsplash
galaxies defined here will be classified as satellite galaxies, and others will
be classified as **fly-bys**.

During the satellite phase, a backsplash galaxies will go through a pericenter,
at which the ram pressure is strong enough the strip a considerable fraction of
its cold gas out. Consequently, this galaxy is more likely to be quenched even
after it gets away from that massive halo.

<figure id="fig3">
<img src="/blog/image/fq_around_cluster.jpg" width=740>
<figcaption>
<strong> Figure 3.</strong>
The quiescent fraction of central galaxies around massive halos (gray), and the
results are presented for backsplash (red) ad non-backsplash (blue) galaxies. The
magenta lines show the fraction of backsplash galaxies among all central galaxies
as a function of normalized halo-centric distance.
</figcaption>
</figure>

_The excess quenching of backsplash galaxies compared with other central
galaxies can cause the two-halo galactic conformity effect._ To begin with, the
backsplash galaxies are clustered around massive halos up to several Mpcs. And
these backsplash galaxies are more quenched than other non-backsplash galaxies
(see Fig. 3). Finally, when we select quiescent central galaxies to measure the
two-halo galactic conformity signal, those backsplash galaxies around massive
halos are more probable to be selected due to their excessive quiescent
fraction. Their neighbours (to several Mpcs) are more probable to be backsplash
galaxies and, therefore, more probable to be quiescent.

# Summary

We studied the two-halo galactic conformity in the IllustrisTNG simulation,
whose signal is very similar to what we seen in observation. And we find that
the backsplash galaxies are responsible for this signal, instead of any powerful
AGN feedback, nor super-halo-scale environmental effects.
