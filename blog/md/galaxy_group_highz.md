---
title: Identifying galaxy groups for high redshift spectroscopic surveys
date: 2023-09-20
description:
    This blog introduces major obstacles in identifying galaxy groups in galaxy
    surveys, especially for the upcoming high-$z$ surveys. We also introduce how
    to conquer these problems using state-of-the-art statistical learning tools.
tags: [Galaxy group]
categories: [Astrophysics]
---

This blog is based on [arXiv:2006.05426](https://arxiv.org/abs/2006.05426).

# Galaxy groups and clusters

[This blog](./halo_model.html) introduces how galaxies are formed and evolved in
dark matter halos, and how halos merge with each other to build galaxy groups
and clusters. In summary, a galaxy group/cluster is a collection of galaxies
sharing a common dark matter halo. Therefore, it is straightforward to identify
galaxy groups in cosmological simulations where the distribution of dark matter
is accessible. However, identifying galaxy groups in observation is challenging,
since the distribution of dark matter is unavailable.

# Finding groups in observation

Most of the methods to identify galaxy groups in observation relies on the
proximity of member galaxies, while other methods leverage other signature of
galaxy groups and clusters, such as their X-ray emission or the distortion on
the background cosmic microwave background, which will discussed in the future.

The simplistic method to identify galaxy groups is the **Friends-of-Friends
(FoF)** method. The basic assumption is that two galaxies belong to a common
galaxy group as long as their distance is below a prior threshold; the threshold
is referred to as the **linking length**. For instance, if the distance between
Gal-A and Gal-B is below the threshold, and the distance between Gal-B and Gal-C
is also below the threshold, then Gal-A, Gal-B, and Gal-C belong to a common
galaxy groups regardless of the distance between Gal-A and Gal-C.

Identifying galaxy groups in observation suffers from two observational effects.
The first one is the **redshift space distortion** effect, where the
line-of-sight distance of observed galaxies is contaminated by their peculiar
velocities. To conquer this effect, we need two parameters for the linking
lengths: one for the line-of-sight and the other one for the transverse
direction. Nevertheless, member galaxies in two groups that are close to each
other on the sphere are likely mixed with each other due to the projection
effect. The second one is the **spatial sampling** effect, where the targeted
galaxies has no fiber allocation due to **fiber collision** effect, which will
be introduced in the next section. This effect can significantly compromise the
performance of group finders. Following the above instance, if Gal-B is missed
due to spatial sampling, and the distance between Gal-A and Gal-C does not
satisfying the grouping criteria, then a group will be fragmented into two
groups.

# Spatial sampling of galaxy surveys

The spatial sampling effect refers to that some targeted galaxies have no fiber
allocation due to the **fiber collision** effect. For low-$z$ surveys like SDSS,
the spectra of galaxies are collected through the fibers plugged on a metal
plate on the focal plane (see Fig. 1), and the fiber collision effect is that
two fibers cannot be close to each other since we cannot drill two holes too
close.

<figure id="fig1" style="float:left;">
<img src="/blog/image/sdss_plate.png" width=400px style="float:left;">
<figcaption style="margin-top:150px;margin-left:420px">
<strong> Figure 1.</strong>
One SDSS plate. Each small hole is matched to one targeted galaxy and
the spectrum of this galaxy is collected through the fiber plugged into
this hole.
</figcaption>
</figure>

The situation is different for high-$z$ surveys. Firstly, high-$z$ surveys
require large telescope since these galaxies are very faint, so it is impossible
to manually drill the hole and replace the plate for each exposure. We need
automatic fiber system where the positioning of each fiber is controlled by an
robotic arm, as shown in Fig. 2. For these systems, each fiber can only move
within a corresponding circle, so their positioning is more restrained. Even
though we can mitigate this fiber collision effect through multiple exposure,
the high inhomogeneity of galaxies on the sky requires $\approx$ 15 exposures to
get full sampling for crowded regions and $\approx 3$ exposures for void
regions. Therefore, fulling sampling means a huge waste of fiber times for those
fibers in void regions. As a compromise, current surveys, like PFS and MOONS,
will have an average spatial sampling rate of 70%, which means that about 30%
targeted galaxies have no spectroscopic observation and this rate is higher in
crowded regions.

Note that since the spatial sampling effect at high-$z$ does not stem from the
``collision'' between fibers, I prefer to use the general _spatial sampling
effect_ instead of the _fiber collision effect_.

<figure id="fig1">
<img src="/blog/image/PFS_fiber.png" width=700>
<figcaption>
<strong> Figure 2.</strong>
<strong>Left panel:</strong> The focal plane of the PFS instrument.
<strong>Middle panel:</strong> The zoom-in viewpoint, and each fiber can only
move within each black solid circle. <strong>Right panel:</strong> One fiber,
which is controlled by two robotic arms.
</figcaption>
</figure>

# Group finding at high redshift

Fig. 3 shows the impact of the incomplete spectroscopic redshift surveys on the
group identification. Here we can see that _even through we have identified most
of the galaxy groups in the spectroscopic sample_, which is indicated by the
high completeness as a function of richness, _there are still a significant
fraction of galaxy groups missed_, which is indicated by the low completeness as
a function of halo mass. We have proposed a method based on the state-of-the-art
statistical learning tool of random forest to assign galaxies with only
photometric redshift to spectroscopic groups or as the central galaxy of a new
group. The performance is shown in solid lines, from which one can see that most
of the groups are retrieved.

<figure id="fig1">
<img src="/blog/image/group_performance_pfs.jpg" width=700>
<figcaption>
<strong> Figure 3.</strong>
The completeness of the identified galaxy group catalog as a function of group
richness (<strong>left panel</strong>) and halo mass (<strong>middle
panel</strong>), and the purity of the identified galaxy group catalog
(<strong>right panel</strong>). In each panel, different colors means different
sampling strategies: the first four colors are for random sampling with
different sampling strategy, and the last color is to mimic the PFS survey. The
dashed lines show the results with only spectroscopic galaxies, and the solid
lines show the results after incorporating with photometric galaxies.
</figcaption>
</figure>

# Summary

The upcoming high-$z$ spectroscopic redshift surveys truly pose a serious
challenge to the identification of cosmic structures. We for the first time
pointing this problem out and propose a promising solution. Nevertheless, these
is still many space for improvement.
