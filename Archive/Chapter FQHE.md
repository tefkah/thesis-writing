---
title: Chapter FQHE
tags:
  - chapter
  - FQHE
transclude: t :hlevel 7
id: a27646b2-08d9-4f2b-bf8b-c056d6599540
mtime: 20210701200807
ctime: 20210319115558
---

# Chapter FQHE

# Meta thoughts

## How to think about this document

This file will be the start of a chapter on the Fractional Quantum Hall Effect. The goal here is to create an outline first consisting of headings which ideally refer to an already existing note.
What I want to avoid here is writing everything from scratch again: I already have enough notes, I should reuse those.

## TODO Steps to write this document \[2/3]

### \[X] Create the three act structure in 2nd level subheadings

### \[X] Create 7-9 things in between

### \[ ] Create a lot of paragraph headings in between those \[0/4]

-
-
-
-

## Theme

roam Explanations are not as rigid as you think

## Open Issues \[0/3]

### \[ ] Where to place IQHE, if at all?

### \[ ] How do the FQHE plateaux form? Is there even a good explanation there?

### \[ ] In how much details should I treat non-abelian anyons?

# The Fractional Quantum Hall Effect

## Part I (Brief, \<4k): The motivation for looking at the FQHE gets explained, namely the fact that something appears to be explained with an infinite idealization, with reference to my introduction and Shech's article,

### a. _b_ The FQHE is briefly introduced, namely the weird bumps and a hint of mentioning anyons and that the reason for this is that the config space is 2D

### b. _a_ This 2D explanation is identified as an infinitesimal idealization, one which has been claimed to play a key role in the _explanation_ of the effect, and explanation =\> existence. It should be clear how weirdly different this explanation is from other more common ones, such as classical ones. Also it should be emphasized how universal this explanation is, such as the fact that the location of the bumps does not even depend on the material.

### c. It is argued that if this explanation would succeed in the way described above, we would have a reasonable case for an actual sectioning off of reality? Here it must be clear why this effect is so useful to study, but also what I will do when it does not turn out to be so dramatic, i.e. how I will generalize

## Part II (Long, \~10k): The details of the FQHE are laid bare, with little interpretation going on in order for the actual "explanation" of the effect to be as clear as possible, mostly based on Tong

### d. The groundwork needed for the explanation to get things of the ground is laid: the CHE is explained in more detail, Landau levels are introduced and the distinction between the Integer and Fractional QHE is clarified, and the former is (for now) made clear to be less important to explain

#### What do we want!? "Quantization!" When do we want it!? "After gaining a thorough understanding of why it is necessary!"

##### To understand the QHE, we must first grasp the fundamental mechanism through which it can arise in the first place, namely the quantization of energy states of electrons when subject to a constant magnetic field. These specific energy eigenstates are called _[[Landau levels]]_, and deriving and gaining a general understanding of them will be our first task.

##### Note that the existence of these energy levels is neither trivial nor unsurprising: a free particle (such as (roughly) one normally found in a strip of metal) is not quantized.

#### Getting a vibe of the thing

##### Before doing so, it is useful to describe the CHE in more detail, as while the description given earlier about the potential difference arising from a Lorentz force makes intuitive sense, it is not nearly rigorous enough to allow us to derive the QHE. What we want at this stage is an expression for the transversal and longitudinal conductance, from which we can plot the expected classical potential difference vs the strenght of the magnetic field.

...

#### Quantization

##### The (literal) textbook approach we will follow here is describing the classical system first and then quantizing it. The rough steps required are to first compute the [[Lagrangian]] of the classical system, use that to compute its [[Hamiltonian]], from which we can derive the [[Poisson Brackets]]. Then, we treat the Hamiltonian as if it were quantum, use the Poisson Brackets as the [[Canonical Commutation Relation|Canonical Commutation Relation,]] rewrite the Hamiltonian in a form we understand (as always, the [[Harmonic Oscillator]]), and use that Hamiltonian to construct the [[Hilbert Space]] from which we can read the energy levels. Sounds simple enough, right?

##### First, let us recap the Lagrangian of a particle in a magnetic field.

$L = T - V$$T=1/2 m\dot{x}^2$$V = e \dot{x}\cdot \textbf{A}$

$$
L=\frac{1}{2}m \dot{\textbf{x}}^{2}-e \dot{\textbf{x}}\cdot \textbf{A}
$$

##### From here we can derive the Hamiltonian

$H= \dot{\textbf{x}} \cdot \textbf{P} -L = \dot{\textbf{x}} \frac{\partial L}{\partial \dot{\textbf{x}}} - L = .....$

$$
H = \frac{1}{2m} (\textbf{p} + e \textbf{A})^{2}
$$

##### Using the Hamiltonian it is easy to derive the Poisson Bracket structure.

Little sidenote about why that is important.

$$
\{F(x,y),G(x,y)\}=\frac{\partial F}{\partial x}\frac{\partial G}{\partial y} - \frac{\partial F}{\partial y}\frac{\partial G}{\partial x}
$$

$$
\{x_i, p_j\}=\delta_{ij} \text{   with    } \{x_i,x_j\}=\{p_i,p_j\}=0
$$

Coool

##### Now we can move on to the quantum side, which means we can take over $\ref{eq:magham}$ and substitute the functions for quantum operators.

Operators are functions which spit out other functions, rather than a scalar or vector.

$$
H=\frac{1}{2m}(\hat{\textbf{p}} + e \hat{\textbf{A}} )^{2}
$$

We take Gauge $\nabla \times \hat{\textbf{A}}= B \hat{z}$

And get canonical commutation relations

$$
[x_i, p_j]=i\hbar\delta_{ij} \text{   with   } [x_i, x_j]=[p_i,p_j]=0
$$

Then we do raising lowering, find the hamiltonian and then

$$
E_n=\hbar\omega_B \Big(n+\frac{1}{2} )\quad n \in \mathbb{N}
$$

Tada

#### Important details and idealizations

##### Astute readers might have noticed that, suprisingly, the spin of the particles has not been mentioned once so far! This is because we can relatively safely neglect it as a good approximation, as the effect of spin on the energy states smoothly becomes less and less prominent the higher the strength of the magnetic field is.

##### An additionally seemingly important detail is the fact that the Hall System is taken to be in 2D from the start.

[[The Dimensions of the Hall System Is Set to 2 From the Start]]

### e. The FQHE is set up in more detail, with the goal of making clear which idealizing assumptions are made, such as the LWF, the plasma analogy and why the toy model is needed. It is again emphasized that the FQHE is explained more in a "making plausible" way rather than a "derivation way", and seeds are planted as to what this will imply for the kind of explanation (not DN) under study

#### Dawdling

##### Now that we have developed a base-level understandig of the (quantum) mechanics at play in the effect in general, it is time to turn our attention to the matter at hand: understanding the Quantum Hall system.

##### I don't want to look at the IQHE too much, as while it is interesting, its explanation does not require nearly the same idealizations as its fractional counterpart.

##### However, some of the lessons learned from the effect do prove useful, such as why the plateaux a) have the value they have and b) why the plateaux persist over a wideish range of magnetic field strengths.

##### There are two difficulties however with using lessons from the IQHE in the fqhe effect

###### The Integer explanation relies on the fact that there are (small) impurities in the sample. However, we know that the FQHE only occurs when the sample is _very_ pure, so the explanation in both cases will likely be different

###### The explanation of the IQHE purposefully neglects the interactions electrons have with each other, which is a) unrealistic and b) unneglectable when talking about the FQHE, as it plays a key role in lifting the degeneracy of the Landau states.

##### For those reasons we will be skipping a thorough examination of the Integer Quantum Hall Effect and jump straight into the FQHE

#### FQHE

##### The Ugly: Idealizations, Idealizations Everywhere

###### Perhaps the most striking difference in the derivation of the FQHE as opposed to the IQHE is the rigour of reasoning used in the former. Unlike its Integer Counterpart, the "explanation" much less resembles, well, a derivation, and is better characterized as a "motivation" instead, using a combination of handwaving, squinting at equations and plain stubbornness to finally get a result which is in the same `ballpark` solar system as what we would imagine an proper explanation to be.

###### It would do us well to list the most egregious ones first, so they are not able to sneak up on us in the end.

- [[The wavefunction of the FQHE is GUESSED from general grounds]]
- [[The FQH State Is Interpreted as a Plasma to Allow for Intuitions and Computation]]
- The LWF is not even an actual ground state of the FQH Hamiltonian, instead from it we derive a Toy Hamiltonian of which the LWF is the ground state, bringing us even further from our goal.

\-[[Fractional statistics can only be calculated using adiabaticity|Fractional Statistics can Only be Calculated Using Adiabaticity]]

###### Using these assumptions/idealizations however, we can make it plausible that FQ statistics are happening, I don't think we will use much more.

###### The wavefunction under consideration is called the Laughlin Wave Function, thought up by >>Laughlin in 1983 after the experimental observation of the FQHE in 1982 by ...

###### Wavefunction is not derived analytically, because hard, and not through perturbation theory because with 10<sup>11</sup> particles perturbations are not small. Instead it is guessed and shown to be similar enough to the actual WF to be useful.

$N=\frac{AB}{\phi_0}e^-$$\hbar\omega_B >> E_{cont}>>V_{disorder}$
The Laughlin WF only applies to the filling fractions of $\nu=\frac{1}{m}$

###### How is it guessed? We need to start with a simplyfying toy model in order to make sense of this, the ol' magnetic annulus.

If we use [[Symmetry gauge|symmetry gauge]] we get that$\hat{\textbf{A}}=-\frac{1}{2} \hat{\textbf{r}}\times \textbf{B} = -\frac{yB}{2}\hat{x}+\frac{xB}{2}\hat{y}$

###### Using these assumptions, if we _insist_ that we are in the lowest Landau Level (LLL), we are able to write down the WFs for _any_ 2 particle wavefunction, regardless of the potential

$$
\Psi(z_1, z_2)= (z_1-z_2)^m e^{-\sum_{i=1}^N |z_i|^2/4l_B^2}
$$

where $m$ is the proportion of the denominator of the filling factor.
Isn't that neat.

###### From here Laughlin guessed his WF from two general points of reference:

[[Every QH WF must be antisymmetric]]

[[Every QH WF must have the form f-z(z1...zn)exp(-sum|zi|2)|Every QH WF must have the form fz(z1...zn)exp(-sum|zi|2)]]

###### From this we arrive at...

[[The Laughlin Wavefunction]]

We see that it fulfills both requirements, but is that enough?

###### Add

###### Arguments for why and how

###### We should use the

###### Toy

###### Hamiltonian

###### The plasma makes it so we can see the LWF state as being an incompressible fluid

##### The Bad: Making things exciting

### f. The Fractional Statistics are derived using the Berry Connection, making clear the similarities here with the Aharonov Bohm effect. The explanation is given in such a way as to be plausible but biased towards my understanding of the problem, and it is shown how the frac charge etc obtains. Maybe also small comments about how the actual plateaux get there?

## Part III (Brief, \<4k): The details of the explanation in II evaluated wrt to the goals of I, and we see that they do not match and that I is much too ambitious and even fallacious, as the mathematics are made too important

### g. The explanation above of the emergence of anyons is recapped, and put next to Shech's (and perhaps others (definitely include others)) account of the same explanation.

### h. It is made clear that the explanation given by me is much less committal yet accomplishes the same thing, namely an account of how anyons behave. If phase transitions are treated before this, I can contrast the "purity" of my explanation with that above, as we do not even lose the universal behavior.

### i. From h. it becomes clear that some kind of fallacy is committed when putting forth the explanation of Shech, but this is not worked out in detail as that will be the topic of the next chapter, leaving readers begging for more content.
