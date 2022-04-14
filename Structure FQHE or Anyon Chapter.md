---
title: Structure FQHE/anyon chapter
tags:
  - chapter
  - anyons
  - FQHE
latex_header: \usepackage{braket}
transclude: t
include: '"./20210414134239-if_particles_cannot_be_closer_than_the_thickness_of_the_strip_the_configuration_space_is_approximately_2d.org"
  :minlevel 4'
id: 40453cb7-ee57-42b9-8180-cb973ce219c3
mtime: 20210701200754
ctime: 20210407150939
---

# Structure FQHE/anyon chapter

<!-- #+startup: latexpreview -->



<!-- #+latex_header: \documentclass{tufte-book} -->

# The Fractional quantum hall effect and its discontents

<!-- convince the reader that what you're saying is worthwhile -->


So, now that we have gained a high-level idea of idealizations, the question is: which idealizations are worth looking at? We have seen some standard examples such as air resistance, but those turned out to be easily understood as approximations rather than idealizations, for when we want to predict the velocity of a falling ball it does not really matter whether there is no air resistance or $0$ air resistance, so we can freely move between (demote and promote) the idealized model (the ball falling in a vacuum) and the approximate propositions about our actual system (for the first seconds of the fall of the ball its speed $\approx gt$).

We must keep in mind, however, that whether an idealization proves problematic depends not only on the specific model constructed, but crucially on the specific properties we are idealizing (away) and what properties of the target system we care about preserving. In the case of the ball, we are primarily interested in its velocity, which is (at least for the first few seconds) only marginaly affected by the idealization.

Imagine instead another researcher, Andreas, who is a bit of an odd fellow. Andreas does not care in the least what the velocity of the ball is, it's all the same to them. What Andreas _is_ interested in is whether the ball will continue to accelerate indefenitely or whether the ball will reach a stable velocity at some point, whatever that may be, Andreas doesn't care. For Andreas, this model would not at all do as an idealization, as the ball falling in air resistance will never reach a stable velocity, always accelerating, accelerating...

Therefore, it might not seem wise to argue in detail about what the status of any given statement, equation or theory _is_, as one man's approximation is another man's idealization. The whole field of study could perhaps just be summed up with "it depends", another philosophical debate has been explained away and Wittgensteinians around the world rejoice.

As big of a fan of ol' Ludwig I am, I do think there is sufficient reason not to treat this as just another language game and that at the very least there are some unexplored areas left to explore. Two possibilities lie before us. Firstly we could argue that a hard distinction _can_ be made between idealizations and approximations. For one, Norton explicitly claimed that his distinction was not meant as the be all end all definition of both terms, but merely a `characterization`, which, while a fair description of Norton's work here, does seem like the philosopher's equivalent of a Youtuber claiming "no copyright infringement intended" after using a Metallica song in their intro: you might not want people to take it a certain way, but you should have expected they would.

However, even disregarding Norton's disclaimer, it does not quite feel in the spirit of this thesis to attempt to construct a rigorous distinction between two sketchy, dare I say "vague" concepts. Instead, to somewhat placate those pesky Wittgensteinians, I will go for the second option, namely to discuss a purported idealization in which the property under question is such that we all agree to care about the outcome of our scrutinizing: the very existence of the system/property/... to begin with! And what could be more interesting (to physicists, and therefore the world) than the existence of  a whole class of new particles?

## Anyons

Anyons are a theorized and alledgedly observed new type of particles. Up until their theorizing/observation, physics squarely placed particles in two types: [[fermions]] such as electrons, neutrinos and quarks, and [[bosons]] such as photons, protons and the Higgs particle. What unites all these particles is that if you have two of them, they are _indistinguishable_ from one another, meaning that when you find yourself in the unenviable position of calculating with more than one particle, you have to account for the fact that it is _impossible_ to keep the two apart. We call this "accounting for" _phase_, which we multiply with the state of the system anytime we exchange the two particles.  By the spin-statistics theorem, the phase of a particle also tells us something about their [[spin]].[^3]  "Thus" we have fermions with spin of integer multiples of $\frac{1}{2}$, and bosons with integer spin.

We will see why this is the case in a second, but the important disclaimer to the above result is that it only holds in $3D$ and higher. There exists a way to get around the inevitability of two types of particles in $2D$, such that we can show that there could be particles which have different statistics and could take on _any_ spin, aptly named [[anyons]].

What makes them interesting as a case study here is that the commonly accepted explanation for anyons states that they are not able to exist in 3 dimensions, only being possible in 2 dimensions. This is very intersting, because the world we know is 3D, how can it possibly be that these particles are 2D?

The reason this is especially interesting is that were this to be so, we would have a very clearly observable case of a discontinuous change of a very continuous parameter: the crossing of the boundary between 2D and 3D. This boundary crossing has a couple of different qualities that make it an excellent case study

1) The change is rather dramatic: getting rid of a whole dimension is no easy feat.
2) The explanation for anyons is somewhat controversial, meaning that there is a lot of different viewpoints
3) The difficulty of this problem is usually waved away by physicists by saying that the problem is actually just _effectively 2D_, meaning that the system is 3D but just behaves in a 2D fashion. This is usually not substantiated much, however.

Remember the main trilemma we find ourselves in when discussing such a boundary. If we have a binary property dependent on a continuously varying parameter, we (or so I wish to show) have one of three choices for drawing a line

1) The parameter $x$ is not a continuous but a discrete parameter. This allows us to draw the line with arbitrary precision somewhere
2) The  parameter $x$ is continuous, and either $\not P$ or $P$ is true $\forall x$
3) The parameter $x$ is continuous and we do not really care about whether $P \or \not P$ is _really_ true, nor care about where the line is really drawn, we just have cases where the line is definitely drawn and once where it is unclear. We give up the binary nature of $P$.

The case of the anyon presents itself as either 2/3 (The system is not 2D but 3D and effectively 2D) or as one which falls outside of these categorizations, that is: it's interesting. The former is what physicists usually argue but do not practice (they do not provide an adequate characterization, as I shall show) while the latter is the argument made by  [@Shech2019], which I will examine in great detail in the rest of this chapter.

This might still annoy some but I don't care this is enough warmup.

That's whats at stake in the qhe, between 2d and 3d

## 1.4 Sorry, what was this about the quantum hall effect again?

The astute reader may have noticed that we have not yet referred to the title of this chapter at all! What is this quantum hall effect?

This is true: anyons were independently theorized by .... in 1978, and their existence in 2D can be predicted using merely topological

I will argue in the

The FQHE does not per se rely on anyons for its explanation, rather it shows that the mechanism which gives rise to the effect are anyonic interactions.

I argue that we cannot look at the way anyons are theorized through constructing configuration spaces without looking at how this might physically manifest itself in the lab.

One objection to this reasoning is that it would bias the investigation in "my" favor, namely that I would think the explanation to be unsatisfactory regardless because we cannot manifest (such) a 2D system in a 3D world. This is a fair concern, so I propose a "bet" of sorts: if I am not able to find and alternative characterization of how effective 2D systems would give rise to anyons, I will accept that the system is exactly and not approximately 2D.
Having 2D systems, while not fitting in our current worldview as snugly as I would like, would open the door to a lot of interesting new physics.

On the other hand, if I do succeed in providing an agreeable characterization of effective 2D, then this would deepen our understanding of such effects much more, open up that black box so to say, and perhaps allow us to more easily construct such systems later due to our deepened understanding.

`JUSTIFY BETTER`
Finally, I wish to address the quantum hall effect itself _first_, before diving into the purported explanation of anyons. If we were to examine the anyons first .....

# The quantum hall effect

## Once again, what is it

### Classical Hall effect

[[The classical Hall Effect is just an application of the Lorentz Force|classical hall effect]]

### Preliminaries

#### What do we want!? "Quantization!" When do we want it!? "After gaining a thorough understanding of why it is necessary!"

To understand the QHE, we must first grasp the fundamental mechanism through which it can arise in the first place, namely the quantization of energy states of electrons when subject to a constant magnetic field. These specific energy eigenstates are called _[[Landau levels]]_, and deriving and gaining a general understanding of them will be our first task.

Note that the existence of these energy levels is neither trivial nor unsurprising: a free particle (such as (roughly) one normally found in a strip of metal) is not quantized.

#### Getting an idea of things

Before doing so, it is useful to describe the CHE in more detail, as while the description given earlier about the potential difference arising from a Lorentz force makes intuitive sense, it is not nearly rigorous enough to allow us to derive the QHE. What we want at this stage is an expression for the transversal and longitudinal conductance, from which we can plot the expected classical potential difference vs the strenght of the magnetic field.

#### Quantization

The (literal) textbook approach we will follow here is describing the classical system first and then quantizing it. The rough steps required are to first compute the [[Lagrangian]] of the classical system, use that to compute its [[Hamiltonian]], from which we can derive the [[Poisson Brackets]]. Then, we treat the Hamiltonian as if it were quantum, use the Poisson Brackets as the [[Canonical Commutation Relation|Canonical Commutation Relation,]] rewrite the Hamiltonian in a form we understand (as always, the [[Harmonic Oscillator]]), and use that Hamiltonian to construct the [[Hilbert Space]] from which we can read the energy levels. Sounds simple enough, right?

First, let us recap the Lagrangian of a particle in a magnetic field.$L = T - V$$T=1/2 m\dot{x}^2$$V = e \dot{x}\cdot \textbf{A}$

From here we can derive the Hamiltonian$H= \dot{\textbf{x}} \cdot \textbf{P} -L = \dot{\textbf{x}} \frac{\partial L}{\partial \dot{\textbf{x}}} - L = .....$

Using the Hamiltonian it is easy to derive the Poisson Bracket structure.
Little sidenote about why that is important.

Coool

Now we can move on to the quantum side, which means we can take over $\ref{eq:magham}$ and substitute the functions for quantum operators.

We take Gauge $\nabla \times \hat{\textbf{A}}= B \hat{z}$

And get canonical commutation relations

Then we do raising lowering, find the hamiltonian and then

Astute readers might have noticed that, suprisingly, the spin of the particles has not been mentioned once so far! This is because we can relatively safely neglect it as a good approximation, as the effect of spin on the energy states smoothly becomes less and less prominent the higher the strength of the magnetic field is.

An additionally seemingly important detail is the fact that the Hall System is taken to be in 2D from the start.

#### Dawdling

Now that we have developed a base-level understandig of the (quantum) mechanics at play in the effect in general, it is time to turn our attention to the matter at hand: understanding the Quantum Hall system.

### Integer vs Fractional

Integer is somewhat interesting but only insofar as it allows us to sort of get why the plateuax are there, although this explanation does not really work for the FQHE as it does not take electron interactions into account which are crucial
\#BEGIN<sub>COMMENT</sub>[[the quantum hall effect has two variations, integer and fractional]]
\#+END<sub>COMMENT</sub>

## IQHE

### Landaus

[[Landau levels in an electric field]]

[[Landau states have a large degeneracy]]

[[derivation of Landau levels for QHE]]

### Why are the plateaux at those levels?

Edge modes

[[edge modes determine the values of the IQHE plateaux]]

### Wait... why are there plateaux anyways?

Impurities

However, some of the lessons learned from the effect do prove useful, such as why the plateaux a) have the value they have and b) why the plateaux persist over a wideish range of magnetic field strengths.

There are two difficulties however with using lessons from the IQHE in the fqhe effect The Integer explanation relies on the fact that there are (small) impurities in the sample. However, we know that the FQHE only occurs when the sample is _very_ pure, so the explanation in both cases will likely be different The explanation of the IQHE purposefully neglects the interactions electrons have with each other, which is a) unrealistic and b) unneglectable when talking about the FQHE, as it plays a key role in lifting the degeneracy of the Landau states.

For those reasons we will be skipping a thorough examination of the Integer Quantum Hall Effect and jump straight into the FQHE

# FQHE in depts

## Adding electron interaction

[[IQHE has no electron interactions, FQHE does]]

[[reasoning of FQHE is less rigorous than IQHE]]

## The Ugly: Idealizations, Idealizations Everywhere

Perhaps the most striking difference in the derivation of the FQHE as opposed to the IQHE is the rigour of reasoning used in the former. Unlike its Integer counterpart, the "explanation" much less resembles, well, a derivation, and is better characterized as a "motivation" instead, using a combination of handwaving, squinting at equations and plain stubbornness to finally get a result which is in the same `ballpark` solar system as what we would imagine an proper explanation to be.

It would do us well to list the most egregious ones first, so they are not able to sneak up on us in the end.

## Finding the wavefunction

[[The wavefunction of the FQHE is GUESSED from general grounds]]

While you might think that quantum mechanics is easy[^2], it is actually rather difficult to solve the equations of systems barely larger than a Helium atom. In fact, for most systems we cannot even write down the wavefunction, much less show how it will evolve. The standard solution to these problems is to use  [[perturbation theory]] to find something reasonably close to the actual wavefunction. This works by guessing some test-wavefunction, have it interact with the Hamiltonian plus some slight perturbation, and then ....
Do this a couple of times and we get reasonably close to the actual wavefunction of the system: a true approximation in the Nortonian sense.

"Alright", you say, dumbfounded "I guess that's alright. Kind of dissapointing that we don't have the 'actual wavefunction', but I can live with it." Luckily for us, we will not have to settle for the perturbed wavefunction, as we cannot even use perturbation theory here! Recall the insidious italics above: perturbation theory has us treat the disturbance as a _small_ disruption. If we poke the system slightly, we expect it to go relax back to the same state again, which is what allows the above equality $\eqref{eq:perturbation}$ to hold.

Ideally we would want to use the Hamiltonian of the IQHE and perturb it a little in order to account for the effects of "turning on" the electron interactions. But the electron interaction cannot be modeled as a small perturbation, **as it's too big**: remember that the Landau levels are _wildly_ degenerate, so any additional term is going to multilply considerably, $10^{23}$ considerably. So what now?

## Writing down the LWF

This problem was 'solved' by Laughlin in 1982, by instead of even attempting to do the tedious mathematics, he simply wrote down "the" wavefunction of the system. The scare-quotes are not for show this time, as the Laughlin Wavefunction cannot by any measure be said to be the actual one describing the system. Instead, the argument goes, it describes a system which is in the same _equivalence class_ of the actual system. **HOW DO WE KNOW THAT**

While this may sound silly, Laughlin did not just pull it out of thin air, instead it is more of an educated guess, one which makes some sense.

Wavefunction is not derived analytically, because hard, and not through perturbation theory because with 10<sup>11</sup> particles perturbations are not small. Instead it is guessed and shown to be similar enough to the actual WF to be useful.$N=\frac{AB}{\phi_0}e^-$$\hbar\omega_B >> E_{cont}>>V_{disorder}$
The Laughlin WF only applies to the filling fractions of $\nu=\frac{1}{m}$

### Step one is admitting you have a problem

How is it guessed? We need to start with a simplyfying toy model in order to make sense of this, the ol' magnetic annulus. It looks like ...

If we use [[Symmetry gauge|symmetry gauge]] we get that$\hat{\textbf{A}}=-\frac{1}{2} \hat{\textbf{r}}\times \textbf{B} = -\frac{yB}{2}\hat{x}+\frac{xB}{2}\hat{y}$

.
.
.

Using these assumptions, if we _insist_ that we are in the lowest Landau Level (LLL), we are able to write down the WFs for _any_ 2 particle wavefunction, regardless of the potential

where $m$ is the proportion of the denominator of the filling factor.
Isn't that neat.

From here Laughlin guessed his WF from two general points of reference:

[[Every QH WF must have the form f-z(z1...zn)exp(-sum|zi|2)|Every QH WF must have the form fz(z1...zn)exp(-sum|zi|2)]]

with $f(z_i...z_n)$ an analytic function of $z_i$ s, as we do not want our wavefunctions to be nonanalytic.

[[Every QH WF must be antisymmetric]]

The state is describing fermions, so it better be anti-symmetric.

Using this, he wrote down what is now known as the [[The Laughlin Wavefunction]]

Cool.

### Addional LWF problems

The LWF is not even an actual ground state of the FQH Hamiltonian, instead from it we derive a Toy Hamiltonian of which the LWF is the ground state, bringing us even further from our goal.

Using these assumptions/idealizations however, we can make it plausible that FQ statistics are happening, I don't think we will use much more.

From this we arrive at...

We see that it fulfills both requirements, but is that enough?

## Excitations

Excitations

Something about the holes

[[Excitations of the LWF Ground State Give Rise to Quasi-holes or particles|Excitations of the LWF Ground State Give Rise to Quasi-holes/particles]]

Something about the ground state of the hamiltanian being different

## Anyons and fractional charge, finally

At last we are close to discussing anyons again. The key insight that leads to the connection between the two is demonstrating that the quasi-holes and quasi-particles have _fractional charge_ and, finally, fractional statistics. To actually prove that we need to introduce something else entirely, the Berry Phase, but before doing so it is worth it to go through a less technical explanation for why these holes would have fractional charge.

To see this, let us return to the hole wavefunction

where, once again, $m$ is the inverse of the [[The filling factor is the ratio of filled or empty quantum states|filling factor]]  $\nu=1/m$ and $\eta$ the position of the hole. We can generalize this a wavefunction with $M$ holes, as

(note the added exponent after the $z_i-\eta_i$ term)

The handwavey explanation goes as follows. Say we ignore the Pauli-exclusion principle for as second (as we do not yet know if that even holds for these holes) and we place all of the holes $M$ at one position $\eta$. The wavefunction for this system would look identical to $\ref{eq:LWFhole}$, except for the added exponent (which you of course noted), like so

$\Psi_{holes-in-one-spot}^\eta(z)=\prod_{i=1}^N(z_i-\eta)^m\prod_{k<l}(z_k-z_l)^m e^{-\sum_{i=1}^n \abs{z_i}^2/{4l_B^2}}$
If we squint our eyes a bit, the parameter $\eta$ could look like a variable instead, describing a particle rather than simply a position of the hole(s). If that is the case, however, $\eta$ would just work like another $z_l$ , an electron of charge $-e$
. However, since it's not, we can infer that it's simply the normal Laughlin WF minus one electron. Then, since there are $m$ electrons, we say that a hole has charge $+e/m$.

Now, there are a lot of holes in this argument, most prominently us conveniently discarding the Pauli-exclusion principle. This could however be forgiven by pointing at the plasma analogy again (as we shall see in a bit) and say that they will act like a single particle if close together. Furthermore, the argument does not work perfectly, as while $m$ holes look like the absence of one electron, this does not mean that every hole has the same charge.

To get a more satisfactory and concrete answer we will have to calculate the fractional charge the hard way, using the Berry Connection. While we need to introduce some more **things**, this will also allow us to _finally_ calculate the statistics of the particle, and, as a bonus, it also helps us make sense of the [[Aharonov Bohm Effect]].

### Berry phase

<!-- #+transclude: t :hlevel 5
[[id:3dad96b9-a6bf-449f-981e-4e141f865dd5][Berry Connection]] -->


The Berry phase is the phase that a particle picks up when it is "around" in one of its eigenstates by varying the _parameters_ of the hamiltonian from and back to the eigenstate again. The parameters are usually not the first thing we consider when writing down the Hamiltonian, but could be thought of as, for instance, the specific settings used to prepare the system. Varying these settings slightly (such as the temperature or something) might still keep the system in the same eigenstate, loosely similar to how many statistical mechanical micro-states could give rise to the same macrostate.

Continuing that analogy, if we do this slow enough, the [[adiabatic theorem (quantum)]] guarantees that the system will stay in its eigenstate.[^1]

If we do this, after moving the Berry phase back the system will have incurred a phase, the [[Berry phase]]

### Berry Connection

# The explanation of anyons

[[The configuration space explanation chapter]]

[[If particles cannot be closer than the thickness of the strip, the configuration space is approximately 2D]]

## TODO

[[Proof ballspace is not simply connected]]

[[How does QM work in non-simply connected space?]]

[[How to justify particles not being able to escape]]

# Footnotes

[^3]: The spin-statistics theorem is only provable in relativistic quantum mechanics. In this thesis we will almost exclusively work in non-relativistic quantum mechanics, which means that this relation is an assumption.

[^2]: You probably did not think this.

[^1]: Catch is that the varying of the parameters should not induce a degeneracy in the specific eigenstate.
