---
title: Study galaxy evolution though proto-cluster
date: 2021-04-03
description:
    Introducing the proto-cluster, its importance to study galaxy evolution, and
    our recent work on its identification.
tags: [Protocluster, Galaxy evolution]
categories: [Astrophysics]
---

# What is proto-cluster?

In $\Lambda$CDM Universe, galaxies are formed and evolved in dark matter halos.
Meanwhile, dark matter halos are growing hierarchically though accretion and
merging (See <a href="paper_review_0610031.html">this review</a> for more
information). Dark matter halos at $z=0$ with halo mass greater than
$10^{14}M_{\odot}$ are usually called as galaxy clusters, and their progenitors
at high $z$ are **proto-clusters**. The evolution of proto-cluster from high $z$
to local Universe is shows in <a href="#fig1">Fig.1</a>.

<figure id="fig1">
<img src="/blog/image/protocluster_fig1.png" width=740>
<figcaption>
<strong> Figure 1.</strong> Cosmic volume occupied by the proto-cluster from
$z=7$ to $z=0$. The blue clump shows the Lagrangian volume of proto-cluster and
the red dot is the most massive halo in the proto-cluster
(<a href="https://ui.adsabs.harvard.edu/abs/2017ApJ...844L..23C/abstract" target="_blank">Chiang et al. 2017</a>).
</figcaption>
</figure>

# Why is proto-cluster important?

Previous study
([Weinmann et al. 2006](https://ui.adsabs.harvard.edu/abs/2006MNRAS.366....2W/abstract))
shows that galaxy properties, such as color, morphology, and star formation
rate, have a strong dependence on the host halo mass. A natural question raised:
**what makes galaxies in different halos have different properties?** Thus, it
is meaningful to study the progenitors of galaxy clusters and other low mass
galaxy groups separately.

Here I give you an example for illustration. Let us assume that we have two
galaxy groups at $z=0$. One with $10^{14}M_\odot$ (we can call it a galaxy
cluster), let us denote it as $G_A$. The other one's halo mass is
$10^{12}M_\odot$ and let us denote it as $G_B$. From the observation, we know
that galaxies in the $G_A$ is more red, early-type and quenched, and galaxies in
$G_B$ is more blue, late-type and star-forming. Then, we go back to high $z$,
where $G_A$ has some low mass progenitors that have not been merged, so as
$G_B$. Let us find some low mass progenitor halos of $G_A$ and find some
comparable progenitor halos of $G_B$. Now, the question is: **are galaxies in
these halos different?** If the answer is _yes_, we need to go back to higher
redshift to find the cause of the difference. If the answer is _no_, we need to
find the what happened from this redshift to $z=0$, which is responsible for
phenomenon we observed at $z=0$.

Actually, there have been some explanations for this phenomenon, and the mostly
accepted one is called **environment effect**. The basic mechanism is that
galaxies in massive halos are experiencing some extra interaction with the
surround environment, compared with the galaxies in low mass halos. For example,
the gas on the galaxy disk will be removed when the galaxy is moving in the hot
gas of massive halos with high speed. Without the gas, the star forming activity
will be ceased, thus the galaxy is quenched. This phenomenon is called
**ram-pressure stripping**. There are other similar mechanisms to explain the
difference of galaxies in various environment, such as **tidal effect**,
**harassment** etc.

With proto-cluster, we can study these effects in more details. For example, we
can constrain the time scale of galaxy quenching or morphology transformation in
different environment. And their dependence on the halo mass. These information
can help us to constrain the model more tightly and understand the galaxy
evolution process better.

# Difficulty in identifying proto-cluster

**First of all, the definition of proto-cluster is fuzzy.** We know that galaxy
group is defined as galaxies that **are** sharing a common dark matter halo, but
the proto-cluster is defined as galaxies that **will be** sharing a common dark
matter halo at $z=0$. A suitable analogy is that finding galaxy group is like
finding a rich guy, and finding proto-cluster is to find a guy who will be rich
when he/she turns 40. Consequently, if we know the spatial distribution of
galaxies, it will be easy to identify galaxy groups accurately. However, it is
still very hard to identify proto-clusters.

**Second, the proto-cluster is spatially large.** Normally, a galaxy group is
about mega parsec, but a proto-cluster can go to $\sim 30$ mega parsecs. As a
result, a small survey can still give us a decent number of galaxy groups, but
we can hardly get some complete proto-clusters detected.

**Last but not least, the proto-cluster is distant.** The definition of
proto-cluster requires high redshift, and that makes the observation very hard.
Currently, we only have limited number of high-$z$ galaxy surveys to accurate
redshift determination, such as
[zCOSMOS](https://ui.adsabs.harvard.edu/abs/2007ApJS..172...70L/abstract).
Moreover, these high-$z$ galaxy surveys are usually incomplete due to expensive
observations.

# How to find proto-clusters?

Even though it is very hard to detect proto-clusters, there have been many
attempts to do it. The basic idea behind these methods is to detect the
**overdensity of some tracers**. For example, people are using galaxies
([Chiang et al. 2013](https://ui.adsabs.harvard.edu/abs/2013ApJ...779..127C/abstract)),
Ly-$\alpha$ emitters
([Chiang et al. 2015](https://ui.adsabs.harvard.edu/abs/arXiv:1505.03877))
or Ly-$\alpha$ absorber
([Cai et al. 2016](https://ui.adsabs.harvard.edu/abs/2016ApJ...833..135C/abstract)).
These methods are restricted by the data available at the time. As I said,
proto-cluster is defined with dark matter halos, and they are using baryonic
tracers for the identification. Consequently, the relation between the dark
matter and the baryonic tracers should be calibrated using the semi-analytical
model or hydrodynamic simulation, and this relation is quite diverse from models
to models.

# What is our method?

To identify proto-clusters, we must build the relation between dark matter halos
and the baryon, because the proto-cluster is defined with dark matter halos and
we can only observe baryonic matter. Compared with proto-cluster, galaxy group
has clearer definition and they can be easily detected. So we migrate all the
baryonic related stuff to the galaxy group detection process. Then we only need
to identify the proto-clusters from the galaxy groups or, equivalently, dark
matter halos.

In this <a href="/about_me/publication.html">paper</a>, we developed a proto-cluster
finder based on dark matter halo distribution, where the halo catalog can be
reliably constructed using the galaxy group finding technique
([Wang et al. 2020](https://ui.adsabs.harvard.edu/abs/2020MNRAS.499...89W/abstract)).
Test on mock shows that the simple Friend-of-Friend method can identify
$\gtrsim 85\%$ proto-clusters with purity $\gtrsim 95\%$, and the standard
deviation of halo mass estimation is $\sim 0.25$ dex. Even when we consider the
halo mass error and group incompleteness introduced by the galaxy group finding,
The result does not vary much. We also test the performance from other sides,
please see the paper for the details.

We also demonstrate the the advantage brought by the proto-cluster for studying
the galaxy evolution. The simple conclusion is: without proto-cluster, the
galaxy sample selected at high $z$ are mostly likely to enter low mass halos
when evolved to $z=0$, especially for galaxies with low stellar mass; with
proto-cluster, one can effectively select the progenitor galaxies which will
enter massive galaxy clusters at $z=0$. Thus, proto-clusters can help us the
study the difference between these two populations of galaxies, and it will
progress our understanding of galaxy cluster formation and their galaxy
population (See <a href="#why-is-proto-cluster-important">$\S\,2$</a>).

# Outlook

In this paper, all the tests are performed on mock catalog without full
consideration of observational effects. We will perform more realistic test in
future paper and explore the potential of proto-clusters in understanding galaxy
evolution.
