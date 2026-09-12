---
title: Why the fundamental metallicity relation exists
date: 2026-09-12
description: The fundamental metallicity relation is one of the tightest scaling
  relations in extragalactic astronomy, and it is conventionally explained by
  assuming that galaxies sit in equilibrium between inflow, star formation,
  and outflow. But a galaxy in equilibrium has a metallicity that depends only
  on its mass-loading factor, so it cannot produce an FMR at all. Here we show
  that the FMR emerges instead from the transition between the inflow-driven
  regime and equilibrium, and that its familiar parameterisation is contingent
  rather than fundamental.
tags: [Metallicity, Chemical evolution, Galaxy evolution]
categories: [Astrophysics]
---

This blog is based on [arXiv:2608.04784](https://arxiv.org/abs/2608.04784).

# What is the FMR?

The **mass-metallicity relation** (MZR) says that more massive galaxies are more
metal-rich, and it evolves: at fixed stellar mass, galaxies at higher redshift
are more metal-poor. The **fundamental metallicity relation** (FMR) is a
stronger statement. Galaxies populate a tight surface in the three-dimensional
space of stellar mass, star formation rate, and gas metallicity, and that
surface is approximately invariant out to at least $z\sim 3$.

It is common to treat the FMR as nothing more than the anti-correlation between
SFR and metallicity at fixed stellar mass. That is only part of it. The full
content of the FMR is that a _single_ parameter $\alpha$ collapses galaxies of
all masses and all epochs onto one locus,

$$
\xi \equiv \log_{10}M_\star - \alpha\log_{10}{\rm SFR},
$$

with $\alpha\approx 0.55$. Any explanation that produces the anti-correlation
but not the redshift-invariant surface is incomplete.

# The gas flow model

Everything in this work follows from two mass-continuity equations,

$$
\frac{{\rm d}M_{\rm g}}{{\rm d}t} = \Phi - (1 - R + \eta)\,\epsilon\,M_{\rm g},
$$

$$
\frac{{\rm d}(M_{\rm g}Z_{\rm g})}{{\rm d}t}
    = y\,\epsilon\,M_{\rm g} - Z_{\rm g}(1 - R + \eta)\,\epsilon\,M_{\rm g},
$$

where $\Phi$ is the gas inflow rate, $\epsilon\equiv{\rm SFR}/M_{\rm g}$ is the
**star formation efficiency**, $\eta$ is the **mass-loading factor**, $R$ is the
mass return fraction and $y$ is the metal yield. These equations are usually
called the bathtub model or the gas regulator model, names that reflect a
historical preoccupation with their equilibrium solutions. We prefer **gas flow
model**, because they are just continuity equations and nothing obliges their
solutions to be in equilibrium.

If $\Phi$, $\epsilon$, and $\eta$ are constants, the system has a closed-form
solution, and a single timescale controls everything:

$$
\tau_{\rm eq} \equiv \frac{1}{(1 - R + \eta)\,\epsilon}.
$$

This is the time needed for star formation and outflows to grow large enough to
balance the inflow. The dimensionless ratio $t/\tau_{\rm eq}$ is then the only
parameter that determines where a galaxy sits between two limits.

# Two limits

**Equilibrium** ($t\gg\tau_{\rm eq}$) is the assumption behind the gas regulator
class of models. Here

$$
Z_{\rm g} = \frac{y}{1 - R + \eta}.
$$

The metallicity depends on the mass-loading factor and nothing else. Not the
inflow rate, not the stellar mass, not cosmic time.

**Inflow-driven** ($t\ll\tau_{\rm eq}$) is the opposite limit, and it is the one
we argue most star-forming galaxies actually occupy. Expanding the solution to
leading order,

$$
M_{\rm g} = \Phi t,\qquad Z_{\rm g} = \frac{y\epsilon t}{2},
    \qquad M_\star = \frac{(1-R)\Phi\epsilon t^2}{2}.
$$

Eliminating $t$ and $\Phi$ gives the FMR directly,

$$
Z_{\rm g} = \frac{y\,\epsilon}{1 - R}\,\frac{M_\star}{\rm SFR},
$$

and substituting ${\rm SFR}=\epsilon M_{\rm g}$ gives the **gaseous FMR**,

$$
Z_{\rm g} = \frac{y}{1 - R}\,\frac{M_\star}{M_{\rm g}}.
$$

Note what happened: the star formation efficiency cancelled. The gFMR depends
only on $y$ and $R$, both set by the IMF alone. Metals accumulate in proportion
to $M_\star$ and are diluted by the gas that keeps arriving, so their ratio is
fixed by nucleosynthesis. _This is why the gFMR is more fundamental than the
FMR_, and the anti-correlation between SFR and metallicity is not driven by
stochastic accretion at all: at fixed $M_\star$, a galaxy with higher SFR
assembled its stars faster and had less time to enrich.

# Peeling the model back to its core

The scalings above come from an idealised model. Do they survive when
$\epsilon$ and $\eta$ are allowed to vary as they do in the real Universe? We
calibrated a cosmological version of the gas flow model against the evolving
MZR, the star-forming main sequence, and the stellar mass-halo mass relation,
and then ran it backwards, stripping out one dependence at a time.

<figure id="fig1">
<img src="/blog/image/fmr_physics.svg" width=740>
<figcaption>
<strong> Figure 1.</strong>
Gas metallicity against $\log_{10}M_\star/{\rm SFR}$ under five progressively
simpler prescriptions for the star formation efficiency and the mass-loading
factor. Marker shapes denote stellar mass bins, shading denotes redshift. From
left to right: the fiducial model; $\epsilon$ and $\eta$ depending on stellar
mass only; $\epsilon$ depending on redshift only; $\epsilon$ constant; both
constant. In the rightmost panel every galaxy, at every mass and every epoch,
falls on one universal sequence. (Fig. 6 of the paper.)
</figcaption>
</figure>

The rightmost panel is the result worth pausing on. In a universe where
$\epsilon$ and $\eta$ are universal constants, the FMR is not a surface at all.
It is a one-dimensional curve in the $Z_{\rm g}$-$M_\star/{\rm SFR}$ plane, and
the parameter $\alpha$ is unnecessary.

That curve is steep at low $M_\star/{\rm SFR}$ and flat at high
$M_\star/{\rm SFR}$, and we now know why. Since $M_\star/{\rm SFR}\propto t$ and
$\tau_{\rm eq}$ is constant in this experiment, low $M_\star/{\rm SFR}$ means low
$t/\tau_{\rm eq}$, hence the inflow-driven regime and the linear scaling
$Z_{\rm g}\propto\epsilon M_\star/{\rm SFR}$. High $M_\star/{\rm SFR}$ means the
galaxy has approached equilibrium, where $Z_{\rm g}\to y/(1-R+\eta)$ and further
increases in $M_\star/{\rm SFR}$ change nothing. _The shape of the FMR is a
direct picture of the transition from inflow-driven evolution to equilibrium._

Reading the panels right to left rebuilds the real Universe. A mass-dependent
$\eta$ splits the mass bins apart, but only at the flat end, because $\eta$
enters the metallicity only in equilibrium. A mass-dependent $\epsilon$ splits
them at all redshifts, because $\epsilon$ multiplies $M_\star/{\rm SFR}$ in the
inflow-driven scaling. A redshift-dependent $\epsilon$ then separates the
epochs. The parameter $\alpha<1$ is the horizontal shift that pushes massive
and high-redshift galaxies back into line, and its numerical value encodes the
combined mass and redshift dependence of $\epsilon$ and $\eta$.

So there is no fundamental reason for the FMR to be redshift-invariant. It works
because $\epsilon(M_\star)$ and $\eta(M_\star)$ happen to be well approximated by
power laws, and because the redshift evolution of $\epsilon$ is regular enough
that one $\alpha$ can absorb both offsets at once. _The FMR is contingent, not a
symmetry_ — which is precisely what makes it a useful constraint on $\epsilon$
and $\eta$.

# A closed-form description of the whole transition

The controlled experiments establish the hierarchy but do not give an equation.
For that we return to the ideal model, where the full solution can be written
using two functions of the evolutionary stage $x\equiv t/\tau_{\rm eq}$:


$$
Z\_{\rm g} = \frac{y}{1-R}\left(\frac{M\_{\rm g}}{M\_{\star}}\right)^{-1}
    {\cal K}\_{1}\!\left(\frac{t}{\tau\_{\rm eq}}\right),
\qquad
{\cal K}\_{1}(x) = \frac{1 - e^{-x} - x e^{-x}}{x - 1 + e^{-x}}
$$

$$
\frac{1-R+\eta}{1-R}\left(\frac{M\_{\rm g}}{M\_{\star}}\right)^{-1}
    = {\cal K}\_{2}\left(\frac{t}{\tau\_{\rm eq}}\right),
\qquad
{\cal K}\_{2}(x) = \frac{x - 1 + e^{-x}}{1 - e^{-x}}
$$

These two equations convert a measured gas fraction and mass-loading factor into an
evolutionary stage; then convert that stage into a metallicity.
Together they relate three quantities, the gas metallicity, the gas fraction,
and the mass-loading factor, and _given any two of them the third follows_. That
is the practical point of the whole framework: it turns metallicity and gas
fraction measurements into a measurement of $\eta$.

The limits are the ones we already met. As $t/\tau\_{\rm eq}\to 0$,
$\cal{K}\_1\to 1$ and we recover the gFMR, independent of both $\epsilon$ and
$\eta$. As $t/\tau\_{\rm eq}\to\infty$, $\cal{K}\_1\to\tau\_{\rm eq}/t$ and the
metallicity saturates at $y/(1-R+\eta)$, now independent of the gas fraction.
$\cal{K}_1$ interpolates smoothly between them.

The obvious worry is that equations (4.1) and (4.2) were derived assuming
constant $\Phi$, $\epsilon$, and $\eta$, none of which holds in a cosmological
setting. So we tested them.

<figure id="fig2">
<img src="/blog/image/ideal_model_explain.svg" width=740>
<figcaption>
<strong> Figure 2.</strong>
The cosmological gas flow model (symbols) compared with the analytic ideal model
(solid lines). <strong>Left panel:</strong> the FMR. <strong>Right
panel:</strong> the gFMR. The lines are the median metallicity from equations
(4.1) and (4.2), taking the gas fraction and mass-loading factor from the
cosmological model as inputs. (Fig. 9 of the paper.)
</figcaption>
</figure>

The agreement is excellent across four decades of stellar mass and out to
$z=3$. This is not luck. The inflow rate does not enter any scaling relation
among $M_\star$, SFR, $M_{\rm g}$, and $Z_{\rm g}$, so its variation is
irrelevant. And for the quantities that do matter, consider a galaxy growing
from $M_\star/2$ to $M_\star$: that final doubling supplies half the metals, and
over it $\epsilon\propto M_\star^{0.33}$ changes by a factor $1.26$ while
$\eta\propto M_\star^{-0.30}$ changes by $0.81$. The ideal model works because
$\epsilon$ and $\eta$ vary slowly over the interval that dominates the metal
budget.

# Where the equilibrium model breaks

This is the part I most want to argue. The equilibrium assumption is not a
harmless simplification that gets the answer nearly right; it removes the very
thing the observations are sensitive to.

**It cannot produce an FMR.** In equilibrium $Z_{\rm g}=y/(1-R+\eta)$, so at
fixed stellar mass there is no SFR dependence whatsoever. No anti-correlation,
no surface, nothing. The FMR is not a small correction to the equilibrium
prediction; it is invisible to it.

**It cannot produce an evolving MZR.** Galaxy formation models almost universally
parameterise $\eta$ as a function of stellar mass or halo circular velocity with
no redshift dependence. If metallicity depends on $\eta$ alone, it inherits no
redshift dependence either, and the model predicts an MZR that does not evolve.
This is a long-standing problem in semi-analytic models, and it is in direct
conflict with the data.

Both failures have the same root. _The equilibrium assumption erases the memory
of the accretion history, and the accretion history is exactly what metallicity
is recording._

**It is not even a good approximation for most galaxies.** The starting point of
the equilibrium models is the exact expression

$$
Z_{\rm g} = \frac{y - \epsilon^{-1}\,{\rm d}Z_{\rm g}/{\rm d}t}
    {(1 - R + \eta) + (1 - R)\mu + \epsilon^{-1}\,{\rm d}\ln\mu/{\rm d}t},
$$

with $\mu\equiv M_{\rm g}/M_\star$. The equilibrium approximation consists of
dropping $\epsilon^{-1}{\rm d}Z_{\rm g}/{\rm d}t$ from the numerator, and the
only justification ever offered is a linear stability analysis showing that
departures from equilibrium decay on a timescale $\tau_{\rm eq}$. That
establishes an equilibrium _exists_; it says nothing about whether galaxies have
had time to reach it. When we evaluate the ratio
$(\epsilon^{-1}{\rm d}Z_{\rm g}/{\rm d}t)/y$ directly in the cosmological model,
it asymptotes to $0.5$ at low masses and high redshift, exactly the inflow-driven
prediction from $Z_{\rm g}=y\epsilon t/2$. Dropping the term therefore introduces
a factor-of-two offset, about $0.3$ dex. For context, the entire observed
metallicity spread between the highest- and lowest-SFR galaxies at fixed stellar
mass is $\lesssim 0.3$ dex, and the MZR evolves by only $\lesssim 0.5$ dex from
$z\sim 0$ to $z\sim 3.3$. The approximation is quantitatively defensible only for
massive galaxies at low redshift.

**It is internally inconsistent in practice.** Lilly et al. (2013) assume
${\rm d}Z_{\rm g}/{\rm d}t=0$ for all galaxies and then derive an MZR whose
normalisation rises with cosmic time at fixed stellar mass. A star-forming galaxy
growing in mass and moving forward in time along that relation must have
${\rm d}Z_{\rm g}/{\rm d}t>0$, contradicting the assumption used to derive it.
Their "ideal regulator" has a related problem: constant $\epsilon$ and $\eta$ do
not by themselves give ${\rm d}\ln\mu/{\rm d}t=0$, which additionally requires a
constant specific inflow rate. That condition is used implicitly but is absent
from the definition and is not justified in general. Their fallback is a
timescale argument, that the specific inflow rate varies about three times more
slowly than gas consumption, but the gas consumption timescale there is computed
from molecular gas alone, whereas atomic gas dominates the reservoir at least to
$z\sim 1$, and stellar mass return replenishes the reservoir on top of that.
Correcting both brings the two timescales into the same range and the separation
disappears.

None of this means equilibrium is wrong everywhere. It means equilibrium is a
_limit_, occupied by massive galaxies at low redshift, and that the interesting
population lives on the way there.

# Summary

The FMR exists because galaxies are caught in transit. Its steep end is the
inflow-driven regime, where metals accumulate in proportion to $M_\star$ and are
diluted by inflowing gas; its flat end is equilibrium, where the mass-loading
factor takes over. The parameter $\alpha$ that collapses the observations is not
a symmetry of galaxy evolution but a record of how $\epsilon$ and $\eta$ happen
to depend on stellar mass and redshift, which is why it can be turned around and
used to constrain them. The gFMR, expressed in gas mass rather than SFR, is the
more fundamental relation, since the star formation efficiency drops out of both
the inflow-driven scaling and the pace of the approach to equilibrium. And
equations (4.1) and (4.2) make all of this quantitative: measure any two of the
gas metallicity, the gas fraction, and the mass-loading factor, and the third
follows.

The practical upshot for semi-analytic models is uncomfortable. Models with high
mass-loading factors drive galaxies into equilibrium early and then cannot evolve
their MZR without invoking a redshift-dependent $\eta$, for which there is no
observational support. Lowering both $\eta$ and $\epsilon$ lengthens
$\tau_{\rm eq}$, keeps galaxies inflow-driven for longer, and delivers the MZR
evolution and the FMR from the same physics.
