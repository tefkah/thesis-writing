---
title: notes on FQHE
tags:
  - FQHE
id: 8539bd4a-0af3-452d-9867-e5462637645a
mtime: 20210701200840
ctime: 20210216120554
---

# Notes on FQHE

# Context

Here I want to provide some general thoughts about the Fractional Quantum Hall Effect ([[descripion of QHE]]) which I will follow up on later, based solely on [@Tong2016\,Arovas2020] with the goal of claryfying the claims made in [@Shech2019]

# Shechs claims about the fqhe

## Particles should behave the same if you spin the system around 360

So the wavefunction $\Psi_0$ = $1\Psi_{360}$. We could see this as spinning it around 180 degrees twice, so $A_{180}^2\Psi = 1\Psi$, so $A_{180}=\pm 1$.

Rotations are usually represented with an exponent, so we can generalize to$\Psi_\theta = e^{i\theta}\Psi_0$

It seems to be the case that only $\theta=0,\pi$ happens in our normal world, leading to bosons and fermions respectively.

## There are two ways of understanding _why_ this happens: the <u>operator</u> framework and the <u>configuration space</u> framework

### What are they?

## According to Landsman 2016, the operator and configuration space framework are identical in dimensions greater than two.

## In the configuration space framework for understanding  permutation invariance, in two dimensions the "exchange phase" $\theta$ can take on any value and gives rise to "anyons"

So this does NOT count for the operator framework.

## This is because only in the conf framework, there are two theorems which say that $e^i\theta$ is equivalent to the <u>"one-dimensional unitary representation"</u> $\gamma$ of the <u>"fundamental group"</u>  $\pi_1$

These fundamental groups are$\pi_1(Q)=B_N \text{ (Braid Group) for } d=2$$\pi_1(Q)=S_N \text{ (permutation group) for } d=3$

This has alledgedly been shown by Arin 1947, Fadell and Neuwirth 1962, and Fox and Neuwirth 1962

## The braid and permutation group have fundamentally different representations

Sn has $\gamma=\pm 1$, while Bn has $\gamma_\theta = e^i\theta, 0\leq\theta\leq 2\pi$

## The braid group unlike the permutation group cannot be approximately instantiated by physical space

## The Hall voltage $V_h$ happens when a magnetic field perpendicular to a thin, current carrying conductor induces a Lorentz force and thus a potential difference across said conductor.

This is the <u>Hall Effect</u>. It is a classical effect and the voltage thus increases linearly according to Ohms law R=V/I

## Specifically, the characterization of the CHE is that the transversal current varies linearly with the strength of the magnetic field and that the longitudinal resistance is small but nonvanishing

I'm not sure why the longitudinal resistance is super important, but i guess it is just "normal" resistance

## Shockingly, this isnt

The transversal (Hall) resistance turns out not to vary clean an d linearly, but is quantized at $R_H = h/e^2v$ .
The longitudinal resistance turns out to vanish when the Hall resistance is a multiple of R<sub>H</sub>

$\nu$ is called the filling factor, its the ratio between the filled and empty electron states, and has both fractional and integer values, shockingly called the integer and fractional quantum hall effect respectively.

## The FQHE is said to be explained by using quasiparticles interacting with impurities. These quasiparticles have <u>fractional quantum statistics</u> and are thus <u>anyons</u>

This is the important part of course, and one which is not at all obvious.

The chain of explanation is thus the other way around of how Shech brings it:

### We expect classical hall effect

### We see weird things suchs as fractional filling

### We say "ah those are just quasiparticles"

### these quasi particles obey fractional quantum statistics i.e. are interchangeable more than bosons and anyons

### Because they do that their fundamental group must be B<sub>n</sub>, which cannot be

### Thus no approximate instantiation

## However, in 4.2 Shech seems to switch to want to explain the Emergence of anyons, not the FQHE.

"What explains the emergence of anyons, i.e., particles pbeying fractional quantum statistics?" pp1975

## The standard story explains this by appeal to the difference of the fundamental groups of 2D and 3D.

This appeals to some abstract mathematical structure, one which according to Leng should be approximately instantiated

This explanation is similar to asymptotic explanation, in the sense that all fqhe systems can exhibit anyons, it's not limited to a particular compound.

# The order of explanation for Shech

## He has two claims:

### Physical FQHE systems instantiate the (abstract mathematical) structure corresponding to 2D configuration space

### Fractional statistics "exists" because...

#### The phase factor characteizing quantum statiss is the one dimensional unitary representation of the fundamental group of a systemis configuration space

#### In two dimensions the fundamental group is the Braid group

## This leads to

Us no longer being able to say that the physical system is "approximately instantiated", as $3D \napprox 2D$

## TAKEAWAY

Shech's explanation is pretty messy, it's not clear what is doing the explaining and what is explained. It is thus my turn to explain.
