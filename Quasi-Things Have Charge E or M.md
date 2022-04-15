---
title: Quasi-things Have Charge e/m
tags:
  - anyons
  - FQHE
transclusion: t
id: 41ef8c58-7d6d-413d-8f32-0e2b04c7949d
mtime: 20210701200816
ctime: 20210312123300
---

# Quasi-things Have Charge e/m

# Quasi-holes/particles carry charge e/m

## Intuition

This can be "intuited" by looking at the WF of the hole ([[where does the hole WF come from?]])

$$
\psi_{hole}(z_i) = \prod_{i=1}(z_i-\eta)\prod_{k<l}(z_k-z_l)^m e^{\sum_{i=1}^n \abs{z_i}^2/4l_B^2}
$$

or, more generally, the WF of many holes

$$
\psi_{M-hole}(z_i) = \prod_{j=1}^M \prod_{i=1}^N(z_i-\eta)\prod_{k<l}(z_k-z_l)^m e^{\sum_{i=1}^n \abs{z_i}^2/4l_B^2}
$$

We note that if $M=m$, the WF will simply look like

$$
\psi_{m-hole}(z; \eta) = \prod_{i=1}^N (z_i-\eta)^m \prod_{k<l} (z_k-z_l)^m e^{\sum_{i=1}^n \abs{z_i}^2/4l_B^2}
$$

If we squint our eyes and look at  as another electron, then this would simply be the N+1 LWF. But it's not,  is the absence of an electron. Since $m$ \$\$s make one 'electron', it's reasonable to assume that one  has charge $q=e\m$.

## Berry Connection

The above "proof" is rather shoddy. However, we can make a more educated guess by looking using the [[Berry Connection]]

However, this is too difficult to calculate, so we need to

[[Screening Allows us to Calculate the Berry Connection]]

which ends up being

$$
\mathcal{A}_{\eta_i} =& -\frac{i}{2m}\sum_{j\neq i} \frac{1}{\eta_i-\eta_j}+\frac{i\bar{\eta}_i}{4ml_B^2}//
    \mathcal{A}_{\bar{\eta}_i} =& ++\frac{i}{2m}\sum_{j\neq i} \frac{1}{\bar{\eta}_i-\bar{\eta}_j}-+\frac{i\eta_i}{4ml_B^2}
$$

...

Tada we get the right answer
