---
title: Outline Anyons bad
author: Thomas F. K. Jorna
tags:
  - anyons
latex_header: \usepackage[style=apa, backend=biber]{biblatex}
latex_header_extra: \DeclareUnicodeCharacter{2212}{-}
transclude: "[[id:654e4bfd-594e-48f2-b6b1-7ad252e1c05c][If particles cannot be
  closer than the thickness of the strip, the configuration space is
  approximately 2D]]"
id: 273c7d2a-e23c-4991-b680-6af3cb1d9162
mtime: 20210701200716
ctime: 20210528160149
---


{/* Created 2021-06-07 Mon 22:59 */}


# Outline Anyons Bad

- Section

  - Subsection

    - Subsubsection

      - Paragraph

# Intro

Now that we have discussed idealizations in depth conceptually, it would be nice to see this all applied to a specific example.

The example we will be looking are _anyons_, an entirely new class of particles like fermions and bosons.
They seem rather fundamental, although it's likely you have never heard about them, as they are mostly theoretical: anyons, so the story goes, are only possible in two dimension.

This, clearly is an idealization. However, many things are postulated in physics and never realized, so just being an idealization does not make it intersitng.
However, anyons are claimed to be observed \[@Bartolomei2020]. How then do we square this?

Some, like \[@Shech2019], go even further and claim that these kinds of observations give indirect evidence for Platonism, making anyons even more intersting to look at.

The standard explanation of anyons is inherently _topological_. Topological explanation share something inherently in common with idealizations, and are thus extra worth looking at.

We can't directly talk about the failure of any particular idealization, only about a certain property. Anyons are interesting because the property is existence.

However, to properly understand anyons, we need to look at the actual systems from which they come, which are things that look like the quantum hall effect. Otherwise we are simply examining the idealization on its own, rather than seeing whether the idealization corresponds to reality in any way (super-symmetry etc). Therefore, we should look at the FQHE to properly evaluate the status of anyons.

From examining this, we see that the phase does not arise topologically in the description of the quantum hall effect (as you cannot really calculate things with that) but _geometrically_. Thus we will need to examine how geometric phase works and whether and how this could be related to the topology.

This discussion will then offer some inspiration for how such topological questions should be thought of.

- Topological explanations are not uncommon in physics, example?.

## New intro

`Good line to introduce the chapter`

The main subject of discussion here will be a new class of (quasi-)particles: anyons. In undergraduate courses, or, if you're lucky, highschool, we learn that two types of particles exist: fermions and bosons. These particles are distinguished by spin, half-integer and integer spin respectively. Anyons, as their name suggests, break this binary and are allowed _any_ type of spin, creating a whole new category of particle.[^4] While anyons are fascinating in their own right, we are interested in them because, according to the canon explanation, anyons are two-dimensional particles. More suggestively, the space they occupy cannot be _approximately_ $2D$, such as a $3D$ space of $1nm$ height, but _exactly_ two dimensional: a clear case of an infinite(simal) idealization. Of course, anyons would be just another plaything, were it not that, at the time of writing, anyons have rather strong empirical backing \[@Bartolomei2020].

Another reason why anyons present such an interesting case, is that their explanation explicitly requires _topological_ arguments. Topological arguments, as I will show, show up in unexpected places and allow problematic idealizations to sneak in, as they smooth out many of the difficult to solve geometry. By tackling such an explicit use of topology in an infinite idealization, we will be able to use the argumentative structure in our general analysis of infinite idealizations. `The opposite of topology is geometry`

- [ ] this is a new task tallyho

[^4]: Or an infinite number of new particle types, depending on one's preference.

# Topology and Anyons

In a standard physics undergraduate program, you learn that there are two types of particles, fermions and bosons, which are distinguished by their spin, fermions coming in half-integer multiples $(\frac{1}{2}, \frac{3}{2} , ... )$ and bosons in integer multiples $(0, 1, 2, ...)$. A good starting question for understanding anyons would be: why _do_ we think there are only two types of particles? Why not $1$, or $3$, or infintely many? While many similar questions are as of yet unanswerable, such as why there appear to be only three generations of leptons (e.g. electrons, muons, tauons) or three fundamental forces in the standard model (electromagnetic, weak, and strong), this one does have an accepted answer. It is, as always, a combination of experimental results and theory. Fermions and bosons' share few features besides the fact that they are particles, but the important commonality is that they are both _indistinguishable_ particles. Every electron is the exact same as every other electron, and every photon is perfectly identical to the next. There is no way to tell whether two fermions or two bosons have switched places when you weren't looking. We will explore the consequences of this in more detail later, but the important consequence of this fact is that it induces an overdescription of the physical situation: we can mathematically describe two situations, one in which we have electron $1$ on the left and electron $2$ on the left. While mathematically distinct, these situations are physically identical, and in order for our physics to make sense we need to account for this distinction. The reasons for assuming indistinguishability could be a thesis topic in its own right, and the above description does not attempt to do it justice. The important point is _how_ we arrive from this indistinguishability to the fact that there are two types of particles: how does indistinguishability help us distinguish particles, and how do we mathematically distinguish these identical states?

As a warm-up, let us consider a rather handwavey argument. Handwavey, because it relies on the particles still being distinguishable, but it illustrates the point. Say we start with a system $\Psi_0$ of two particles, $x_1$ and $x_2$, each with their own probability distribution $\psi_i$$\Psi_0=\psi_a(x_1)\psi_b(x_2)$
Now, for our next trick, we will exchange the two particles, such that particle $x_1$ is in state $\psi_a$ and particle $x_2$ is in state $\psi_b$. If we suggestively take state $\psi_i$ to be mean something like "having probability $1$ of being found around $x=a$", then this exchange can be the physical exchange of the two particles. Now, of course, we do not know which particle is which, so writing down the 1-exchange wave function would be getting ahead of ourselves, but we do know that if we were to exchange the particles once again we should regain our initial wavefunction $\Psi_0$. To dentote this, we define an exchange operator $P$ which does just, and say that the wavefunction after exchanging twice (= rotating by 360 degrees) is $\psi_{2\pi}=P^2\psi_0=1\psi_0$. To find the wavefunction of the 1-exchang system, we find$\psi_{\pi}=P\psi_0=\sqrt{1}\psi_0=\pm 1\psi_0$

This yields two possibilities for particles: those for with $P=-1$ and those for which $P=1$. The latter are bosons and the former are fermions.[^7]

The above argument is too handwavey, so we would like to make it more concrete. The way to define what we mean by "exchange/ability/". To start, the suggestively italicized _ability_ part of exchangeability hints at the fact that the _possible_ ways a particle _is able to be_ exchanged is of central importance. One natural way of defining this is by looking at all the possible paths the particle can take. We would need to look at the _configuration space_ of the particles: the possible configurations of them and connections between these configurations.[^8] Now we need to supplant this with a notion of what it means for two paths to be _the same_, or, equivalently, what it means for two paths to be different. This idea of path-similarity depends on which factors we judge relevant when considering manipulating quantum particles, which we need to choose if we wish to obtain the most general description possible. Like most of physics, we would not want our description to depend on some sort of absolute position or orientation in space, so our description better ignore those. Beyond that, however, identifying the relevant factors of the space becomes more tricky. The two most promising candidates are a _geometric_ or _topological_ notion of path similarity. As it turns out, the latter is used in the most commonly accepted explanation of anyons, the main reason being the mathematical and conceptual simplicity it brings.

The main notion of similarity used to explain anyons, namely the topological notion of _homotopy equivalence_, roughly means that two paths are the same if they can be continuously deformed into one another. This differs wildly from _geometric_ path equivalence: there paths are only "the same" if they traverse the same path in the same space, they need to be `isomorphic`. Consider the difference between a mountain ridge versus a nice meadow. Geometrically, the two are very different, and if we were to care about how exhausting a hike over that distance would be we would certainly not neglect to take those differences into consideration. On the other hand, if we were an amateur nautical cartographer interested in plotting out all bodies of water in the area, we would consider both spaces identically topologically: neither of them has any lakes. It is clear why a topological approach to particle paths would be attractive, as it massively simplifies the set of possibilities down to the bare essentials. It is clear that sometimes we do need to consider the relevant geometry however: our hiker will no doubt complain if their map-making friend confuses meadows for mountains, or vice versa depending on their constitution.

Returning to anyons, we see that the approach taken for the _explanation_ turns out to be topological, while when actually calculating the phase we need to take into account the _geometry_. Here we will first discuss the topological argument, after which we will consider the prequisites for and the geometrical argument itself in Section 3 and 4.

By focussing on the homotopy notion of equivalent paths, we release ourselves from the burden of having to examine each individual path and instead are able to focus on features of the _space_. Specifically, since we only need whether two paths are continuously deformed into one another, we just need to look at whether the space allows for such trickyness. This feature of a space is called its **connectedness**. A space is called **simply connected** iff all _loops_ can be deformed into a point, like in figure ref:fig:connectedness. For our purposes, since we are looking at the position of a particle in spacetime, we can consider a space to be simply connected if it has no holes. Here a hole is a hole that "pierces" the space: the handle in the "space" of a coffeecup and the hole in the "space" of a donut are prime examples, while the inside of a bottle or a bubble in a glass of coke do not count as "holes" for the sake of connectedness. On the contrary, spaces with such holes are called _multiply-connected_, or sometimes more simply _non-simply-connected_ spaces.

This concept of connectedness allows us to understand the main assumption behind the handwavey argument above: we return to the same position after rotating 2 if the space is simply connected, because "being the same" means "being the same path" and "being the same path" means "being able to continuously deform them to each other" and "doing nothing" is the "point path" and you are only able to shrink all paths to a point in a simply connected space. This, of course, raises the question: is the configuration space of two identical particles always simply connected, i.e., why do should we return to the same system after rotating $2\pi$? As we will see, it is simply connected in $\mathbb{R}^3$, but _not_ in $\mathbb{R}^2$. This is why people say that anyons can only exist in 2D. As we will also see, however, is that this is not strictly true, as we can conceive of somewhat plausible multiply-connected 3D spaces.

[^7]: Note that this does not directly follow: it could also be the case that particles just sometimes have -1 and other times +1. Empirically, however, we find no such distinction, only dependent on particle type.

[^8]: The other framework for considering such exchange is in terms of exchanging all the relevant quantum numbers, effectively mathematically swapping the particles. We shall see that this does not work for defining anyons.

### Phase

Much of the upcoming section will be centered around calculating the _phase_ of a quantum system, and it will be useful to briefly go over what we mean by phase and its relation to anyons. Briefly stated, the phase factor is a complex number which does not change the physical information if applied globally, that is when multiplying every wavefunction under consideration with it. The $\pm1$ applied by our operator $P$ is such a phase.
Phase arises because the empirical outcome of measuring a quantum state involves calculating the modulo-squared of the wavefunction. There are simply (at least) two wavefunctions which arrive at the same outcome if you square them with their complex conjugate: - that wavefunction and plus that wavefunction. They are both perfectly fine mathematical representations of the same state, just like the fact that the square root of 9 can be both -3 and 3. When asked: what is the length of the side of a square field of 9 square meters, the answer is indeterminate: it can be either 3 or -3. Rather than saying it can only be positive, we can be a bit more general and say that the "phase factor" in front of the three is unphysical: it simply does not matter for calculating the surface area of the field what  it is. We have, of course, some empirical preference for using positive lengths in stead of negative ones, but we do not such physical intuitions for wave functions, as they live in Hilbert Space and we unfortunately only have 4D spacetime to our disposal. Since wavefunctions live in _complex_ Hilbert space, the most general factor that would get $||^2$ away is not $\pm 1$, but $e^{i\theta}$, as that simply _is_ the square root of $1$ in $\mathbb{C}$. Thus any wavefunction will show empirical differences when multiplied with $e^{i\theta}\quad\forall\theta\in \mathbb{R}$

It is of course not immediately clear what this has to do with paths in configuration space or anyons for that fact. The answer is that, while systems could theoretically obtain any phase, they do not in general do so. We know from examining the time-dependent Schrodinger equation that it can be reduced to the time-_independent_ schrodinger equation times a phase factor, which depends on time and the energy of the system. However, while we said that phase does not matter physically, this is only the case for the system as a whole: if two systems have different phase they interfere. It's analogous measuring any other kind of wave: you will have to pick a starting point in order to describe the offset of a particular wave. These phases don't matter until you measure two waves interfering, which leads to inteference. For particles this leads to destructive interference for fermions: if the exact same wave would `xxxxxxxxxx` then there is probability zero of it being there. This is the Pauli-exclusion principle.

Thus while phases do not appear to matter _prima faciae_, they are the reason matter is able to exist in the first place! Without the Pauli Exclusion Principle it would not be possible for matter to clump together, as everything would simply phase through each other (barring electromagnetic interactions).

## The configuration space explanation for anyons

The topological explanation gestured at above consists of roughly the following steps:

1) Construct the _configuration space_ of the system, that is, all possible positions our particle pair could be in.
2) Find all possible homotopy equivalent paths, and, by extension, the _fundamental group_ of the space.
3) Derive the 1D-representation of that group, that is, a scalar representing that group. This is the phase-factor.

We will go through these steps in detail for the case of anyons and other particles. After showing that anyons appear to only be possible in 2D, we construct a toy 3D-configuration space in which anyons are also possible.

### The 3D case

#### Constructing the configuration space

Our first task is to construct the configuration space for the exchange of $N$ identical particles in $3D$, after which we will examine its topological properties. The most general configuration space we can construct is one for $N$ particles living in $d$ dimensions, which would be

$$
\begin{equation}
    \mathbb{R}^d_1 \times \mathbb{R}^d_2 ... \times \mathbb{R}^d_N
    \label{eq:Ndconfig}
\end{equation} \qquad (1)
$$

We shall for now focus on just two particles in $\mathbb{R}^3$, which would be the configuration space occupied by two $3$-dimensional vectors $(r_1, r_2)$ representing two particles$\mathbb{R}^3\times \mathbb{R}^3$
As we are dealing with identical particles, however, we need to add some extra structure, which results in our configuration space being much smaller than the above.

To simplify our notation and avoid having to conceptualize $9$-dimensional space, we can define our configuration space in terms of the center of mass of the particles $\mathbf{R}=\frac{(\mathbf{r_1+r_2})}{2}$ and their difference vector $\mathbf{r}=\mathbf{r_1-r_2}$. Clearly the configuration space of $(\mathbf{R}, \mathbf{r})$ is still $\mathbb{R}^3\times \mathbb{R}^3$. However, now we can pull a trick. We only care about exchanging the particles, right? It seems reasonable, therefore, that the position of the system as a whole does not play in a role in determining all possible positions of the particle, e.g. it should not matter (we assume, quite reasonably) whether we exchange two fermions in our lab on Earth or on Venus. For our purposes, then, we can safely ignore one of the two \$$\mathbb{R}$<sup>3</sup>\$s and simply focus on the relative distance and orientation of the two particles with each other.[^9] This simplifies the problem of finding the configuration space significantly.

Let us return to the constraints. The first constraint is the indistinguishability of the particles. Since it is impossible to distinguish the situation $(r_1,r_2)$ from $(r_2,r_1)$, we cannot take these two configurations to be separate points in configuration space and must remove them. We can represent this by "dividing out" the permutation group $S_2$ from our current configuration space,[^10] yielding$\frac{\mathbb{R}^3 }{S_2}$

The second and final constraint is accounting for particles not being able to intersect with each other. The argument for _why_ we ought to, however, is rarely made precise. The general tendency, as by

[^9]: Another way of thinking about this is to consider one particle to be fixed and the other moving around it.

[^10]: This makes it somewhat difficult to visually relate the "one particle standing still" picture to what the configuration space actually represents. Roughly, you can imagine it as the "moving" particle returning back to its original position after a rotation of $\pi$ radians.

# The Quantum Hall Effect

So, anyons are claimed to be observed in 2D only.
However, some claim that anyons are observed \[@Bartolomei2020]  in actual systems. Does this mean that those systems are _actually_ two dimensional? This would go against much of our general intuition about systems.

- Physisists claim that these systems are _approximatley_ or _effectively_ 2D (`sources`).
- Following \[@Norton2012], we know how to interpret this: we can demote an idealization to an approximation if we are able to show that there is a smooth limit.
- This is exactly the problem, according to \[@Shech2019]: the topological explanation of anyons requires an _exact_ 2D system (or a rather ad-hoc 2D system as we saw).
- Therefore we cannot call this approximately 2D.
- According to \[@Shech2019], this is a problem for those with nominalist inclinations[^1], as the instantiation of abstract mathematical structures in the real world would be an issue.

  - Such an argument can only be made, however, through the use of the EIA which was discussed in the previous (or next?) chapter.
- Therefore, it would do such people well to examine the physical effect thoroughly for any signs of this.

Luckily, hope is on the horizon: it turns out that the computations of the phase of the alledged anyons in the FQHE uses a geometrical notion rather than a topological notion of phase.

- Unluckily, this geometrical notion also relies on a two dimensional idealization.
- However, this idealization _could_ conceivably be demoted to an approximation.

In this chapter, we will examine the inner working of the Quantum Hall Effect. This is needed in order to understand the following

1) Why do people say that these particles are anyons
2) What idealizations are made in the explanation of the quantum hall effect separate from the topological one.
3) ...

Readers less interested in the details can skip to the last subsection of this section `link` and the next section `link`.

The Quantum Hall Effect is the quantum version of the classical hall effect, a rather straightforward consequence of moving charged particles in a magnetic field. It was discovered all the way back in `XXXX` by Edwin Hall, who claimed it a novelty which would never have any use-case. Today Hall-Effect sensors are widely used to pick up magnetic fields and rotations of conducting materials. More esoteric applications are as potential long-term space-travel propellants in so-called Hall-Effect thrusters, which are a specific form of ion propolsion, which can generate a low thrust for a very long amount of time.

The basics of the effect are rather simple

- Strip which has current flowing through it.
- Magnetic field perpendicular to that strip
- Induces Lorentz force which pushes particles to one side, increasing their concentration and creating a potential difference, inducing a voltage changing the resistivity.
- This resistivity linearly depends on the voltage, which linearly depends on the concentration difference which linearly depends on the strength of the magnetic field, thus yielding a linear dependence of the resistivity to the strenght of the perpendicular magnetic field.
- Looks like figure ref:fig:che

However, as most classical effects, they only hold in a certain regime. When we clean up the materials, lower the temperature dramatically (\<2K) and increase the magnetic field strength considerably, we observe the _Quantum Hall Effect_ (QHE): rather than a linear dependence on the magnetic field strength, the resistivity shows these strange plateaux at rather consistent values, as in ref:fig:qhe. The spacing between these plateaux does not seem to differ between different materials, which is even more curious.

So: why? Why do we see these plateaux, and why at these levels? The short answer (partially) is: the impurities in the sample lift the degeneracy of the eigenstates of the Quantum Hall system, called Landau levels, and _localizes_ some of those states, rather than the states extending from one edge of the sample to the other (akin to the wavefunctions of a particle in a box). These localized states do not conduct current (as do not span the system, and resistivity is measured from end to end), thus leading to the plateaux in the resistivity: we change plateaux when all the localized states are filled and we move to different extended states. The specific values of these levels depend on weird physics at the boundaries of the system called _edge-modes_, but in short the levels correspond to the number of filled Landau levels: at higher magnetic field strengths the levels can accommodate more states, thus the lower the magnetic field strength the larger the number of available levels, leading to a smooth-looking linear dependence in the classical regime.

There are quite some caveats to the above story, but that is the gist of why the effect happens for _integer levels_. The less interested reader can skip over the following section describing the corresponding _Integer Quantum Hall Effect_ (IQHE) and head to the description of its fractional cousin, where the same does not hold. Specifically, the IQHE requires one massive idealization: electron interaction is neglected completely. As we shall see, this idealization cannot hold in the FQHE.

[^1]: If the reader was not aware of this yet, the author does hold such inclinations.

## The Integer Quantum Hall Effect

In order to do as little physics as is possibly required, I will skip most of the justification for the quantum formalism of the QHE (quantizing the classical Hamiltonian, finding the commutators) and many of the intermediate steps to arrive at the relevant results. I point the interested reader to \[@Tong2016]\[\[]] for a quite accessible and to \[@Arovas2020] for a more thorough pedagogical discussion of these issues, and to \[@Stone1992; @Prange1987; @Doucot2005] for rather complete, less pedagogical sources.

As mentioned previously, the Integer Quantum Hall Effect (IQHE) is the observation of plateaux in the Hall resistivity $\rho_{xy}$ at regular intervals. These intervals happen to be integer multiples of the _quantum of resistance_  $R_q=\frac{2\pi\hbar}{e^2}$. `check whether this is so`

- This is rather curious, why so precise?
- In fact, so precise that these experiments are used to determine the quantum of resistance.
- Why are they there, and why at those levels?

As physicists, the first thought as to the origin of these plateaux probably goes to the energy eigenstates of the system, which turns out to be correct! The plateaux correspond to the general energy eigenstates of a system of charged particles moving in a perpendicular magnetic field, so called Landau levels.

- It will be difficult to properly understand the QHE without first briefly going over landau levels.

`Assumptions`

### Landau Levels

Here we already start to sneak in our idealizations: we will treat this system as if it is two dimensional. `However, this system can be easily extended to 3D, see XXXX`

The simplest Hamiltonian for a system of particles moving in a magnetic field is

$$
\begin{equation}
    H=\frac{1}{2} m(\hat{\mathbf{p}} +e \hat{\mathbf{A}} )^2
    \label{eq:landauham}
\end{equation} \qquad (2)
$$

The  magnetic field is perpendicular to the $x,y$-plane, so we define the vector potential $\hat{\mathbf{A}}$ using our knowledge that the magnetic field is perpendicular to the plane $\nabla\times\hat{\mathbf{A}}=B \hat{z}$, to be

$$
\begin{equation}
    \hat{\mathbf{A}}=\begin{pmatrix}
0\\
xB\\
0
\end{pmatrix}
    \label{eq:landaugauge}
\end{equation} \qquad (3)
$$

`This will be appendix`
The easiest way to find the energy eigenstates is the way all Hamiltonians get solved: treat is as the harmonic oscillator. As the Hamiltonian of the "normal" harmonic oscillator is

..

These allow us to define raising and lowering operators`At this point we introduce new variables. These are raising and lowering operators, entirely analogous to those that we use in the harmonic oscillator. They are defined by`$a= \frac{1}{\sqrt{2e\hbar B}} (\pi_x - i\pi_y) \quad a^\dagger = 1\frac{1}{\sqrt{2e\hbar B}} (\pi_x + i\pi_y)$

The commutation relations for $\pi$ then tell us that $a$ and $a^\dagger$ obey$$
[a, a^\dagger] = 1
$$

$H= \frac{1}{2}m \pi^2   = \omega_B \left( a^\dagger a + \frac{1}{2}  \right)$
We find that the energy eigenlevels are$\ket{n}=\omega_B\left(n+\frac{1}{2}\right)$

### Calculating the degeneracy

We started by saying that the plateaux in the IQHE correspond to the various filled Landau levels of the simple particle in a magnetic field system. We still need to prove this, namely by deriving the conductivity for the Hall states. This can get rather messy, so I will show put the derivation for a single particle here, and the more general derivation of the so called _Kubo formula_ in the Appendix.

`sloppy`

To find the resistivity, we use Ohm's law, which relates the energy of a particle to the current density (current over area)

$$
\begin{equation}
    \mathbf{E}=\sigma \mathbf{J}
\end{equation} \qquad (4)
$$

Our mechanical momentum is$\hat{\mathbf{\pi}}=\hat{\mathbf{p}}+e \hat{\mathbf{A}} = m \hat{\mathbf{\dot{x}}}$
Classically, the current (for a single particle) is simply $\mathbf{I}=-e\mathbf{\dot{x}}$, but isnce we are working quantum mechanically we take the expectation value

$I=-e/m \sum_filled_states \bra{\psi}-i\hbar\nabla+e \hat{\mathbf{A}}\ket{\psi}$

We are working in Landau gauge.

...

We end up with

### Edge modes

In order to provide a more thorough calculation (i.e. not just considering a single electron) we take advantage of a the fact that the system is bounded. I will not reproduce this here.

### Robutsness

The explanation above shows us why there are plateaux at the levels we see, and even gives us a hint as to why those states would be rather stable, but it has not yet told us _why_ these plateaux persist over a range of values yet, just that something is going on at those values. We have only shown that at complete filled Landau levels ($\nu\in \mathbb{N}$) the longitudinal resistivity $\rho_{xx}=0$ and that the transversal resistivity $\rho_{xy}$ is an integer multiple of the quantum of resistance. However, if we were to move even slightly away from the completely filled Landau state where $B=\frac{ne}{2\pi\hbar}\frac{1}{\nu}$, all our previous arguments hold no water and there is no reason to expect anything already covered to hold.

This is obviously a problem, as an effect which only shows up at a specific real number would never be experimentally observable. We will need do some dirty work in order for `this` to make sense. In fact, the solution not only requires some dirty work: the solution _is_ dirtiness.

Experimental samples are inherently dirty (here meaning: containing other elements than the intended sample[^5]), and these impurities require us to re-examine our previous claims somewhat[^6]. These impurities lead to two vital insights which will allow us to solve our puzzle:

1) They (unsurprisingly) break the degeneracy of the Landau levels, resulting in more swept out states as in ref:fig:disorder
2) They (more surprisingly) turn many _extended_ quantum states into _localized_ ones.

![](./media/broadlandau.png "Figure 1: Density of states in the IQHE with and without disorder")

![](./media/breakdegen.png "Figure 2: Extended to localized states")

This might sound all well and good, but certainly there is a limit to the amount of disorder we are allowed to introduce into our system? Surely the spokes of my bicycle should not be able to serve as Quantum Hall systems.

Correct you are: in general we demand that a) the strength of the disorder (which we model as a random potential) ought to be small relative to the Landau level splitting and b) the disorder does not dramatically vary on small scales, such that for a particle influenced by it the potential can locally be seen as constant.
We can express these as

$$
\begin{equation}
    V_{disorder}\ll\hbar\omega_B
\end{equation} \qquad (5)
$$

and

$$

|  V | \ll$\frac{\hbar \omega_B}{l_B}$ |
| -- | ------------------------------ |


$$

where $l_B$ is the magnetic length, `roughly the length scale at which these effects are relevant`

`Now consider what this means in a random potential with various peaks and troughs. We’ve drawn some contour lines of such a potential in the left-hand figure, with + denoting the local maxima of the potential and − denoting the local minima. The particles move anti-clockwise around the maxima and clockwise around the minima. In both cases, the particles are trapped close to the extrema. They can’t move throughout the sample. In fact, equipotentials which stretch from one side of a sample to another are relatively rare. One place that they’re guaranteed to exist is on the edge of the sample.`

`The upshot of this is that the states at the far edge of a band — either of high or low energy — are localised. Only the states close to the centre of the band will be extended. This means that the density of states looks schematically something like the right-hand figure`.

`Conductivity Revisited For conductivity, the distinction between localised and extended states is an important one. /Only the extended states can transport charge from one side of the sample to the other. So only these states can contribute to the conductivity./ Let’s now see what kind of behaviour we expect for the conductivity. Suppose that we’ve filled all the extended states in a given Landau level and consider what happens as we decrease B with fixed n. Each Landau level can accommodate fewer electrons.`

`But, rather than jumping up to the next Landau level, we now begin to populate the localised states. Since these states can’t contribute to the current, the conductivity doesn’t change. This leads to exactly the kind of plateaux that are observed, with constant conductivities over a range of magnetic field. So the presence of disorder explains the presence of plateaux. But now we have to revisit our original argument of why the resistivities take the specific quantised values (2.3). These were computed assuming that all states in the Landau level contribute to the current. Now we know that many of these states are localised by impurities and don’t transport charge. Surely we expect the value of the resistivity to be different. Right? Well, no. Remarkably, current carried by the extended states increases to compensate for the lack of current transported by localised states. This ensures that the resistivity remains quantised as (2.3) despite the presence of disorder`.

I will leave the more detailed explanation for why the extended states compensate for the localized states for the interested reader, see \[@Tong2016]

That is it for the IQHE, as we derived the two things we needed from it: we gained a general understanding of why the plateaux have their values (they are the energy eigenvalues of the Landau levels) and, more importantly, we roughly understand why these plateaux are robust.
Unfortunately, this is not the end of the story, we did not even mention anything topological yet! For that we finally turn to the Fractional Quantum Hall Effect.

[^5]: Improved performance of impure 2D materials is an active area of research in material science, see \[@Wang2020] for a summary of how impurities enhance the conductivity of graphene.

[^6]: The non-dirty sample just discussed is a great example of taking an idealization too seriously: we cannot explain the phenomena in the idealized setting, and have to retrofit extra physics on top of the idealization in order to get a satisfying explanation, only for us to then show in the limit of no impurities we regain our initial idealization. If this limit would not have been smooth (it fortunately is), we would have wasted all this time!

## The Fractional Quantum Hall Effect

Following the naming convention of the IQHE, the Fractional Quantum Hall Effect (FQHE) refers to the observation of plateaux at _fractional_ values of the quantum of resistance in the Hall resistivity $\rho_{xy}$. Sadly, very few of the arguments mentioned above will be able to explain these plateaux, as we have only shown that they appear at fully filled Landau levels. However, our intuition about the robustness will still hold.

The goal of this expos\\'e is twofold. First we want to gain a general understanding of how the FQHE is thought about in general: what assumptions go into calculating the relevant parameters, which idealizations are noteworthy, etc. The other main goal is the 'derivation' of the Laughlin wavefunction, the wavefunction used to describe the FQH system, and its excitations. At the end we will arrive at the problem of calculating the exchange statistics of these excitations, which turn out to be _anyons_, but not actually compute them yet: this will be done in section ref:sec:GeometricPhase.

The key difference between the description of the Fractional as opposed to the Integer Quantum Hall effect is the inclusion of electron interactions in the former, which becomes impossible to ignore at the energy scales above $\nu=1$, which is where most of the FQHE physics is done. As a result the reasoning cannot be as rigorous as before. In the IQHE we could pretend that all the states occupied the same Landau level, which allowed us to calculate the wavefunctions and energy levels, leading to the derivation of the Hall resistivity and confirm our suspicion that the plateaux correspond to fully filled Landau levels. Only after doing that did we let go of that idealization and allow the degeneracy to be lifted in order to argue that the plateaux were robust.

This order of operation is no longer possible in the FQHE, as the electron interactions lift the degeneracy of the Landau levels from the start, forcing us to compute the wavefunctions in a different way. A first approach would be to use perturbation theory: model the electron interaction as a small perturbation to ref:eq:landauham and then gradually compute a better and better approximation to the actual wavefunction. While this is fine for simple two-electron systems, the number of electrons in a QH system is closer to $10^{23}$. That is a rather large matrix to diagonalize, not even close to possible to do numerically. Therefore, we need to pull some tricks.

The trick is: do not compute the wave function, just write one down. That is exactly what \[@Laughlin1983] did, yielding what we now call the **Laughlin wavefunction**

[[The Laughlin Wavefunction]]

Laughlin of course did not just simply write down a bunch of wavefunction and pick the one he liked best, it is motivated by some observations from the system and from some general conditions we have to place on any wavefunction. Specifically, in a previous paper \[@Laughlin1983a] he derived the wavefunctions for three particles in the FQHE. Recapping this in the case of two electrons is worthwhile.

We have a system of two electrons with a potential $V(|r_1-r_2|)$.

- To solve such systems, it's easiest to work with angular momentum.
- If we want to work with angular momentum, the gauge we picked before (Landau Gauge) is not very useful, as it does not include any kind of rotation

  - Instead we pick _symmetric gauge_, which is $\hat{\mathbf{A}}=-\frac{1}{2}\hat{\mathbf{r}}\times \mathbf{B}= -yB/2 \hat{\mathbf{x}} + xB/2 \hat{\mathbf{y}}$
- Skipping multiple steps ahead, we see that the wavefunctions look like

Unfortunately this does not uniquely or straightforwardly generalize to N particles, so we have to pull a few more tricks.

1) We do try to generalize, and say that a wavefunction for N particles will look something like $f(z)e^{something}$
2) We _insist_ that the wavefunction be in the Lowest Landau Level (LLL) it can possibly be: there are no other Landau levels it can fall back on. This is rather strong. This leads to the claim that $f(z)$ _must_ be analytic. `how`
3) Since the state will have to describe fermions, the wave function must be anti-symmetric under exchange of the particles, which requires $f(z)$ to be odd.
4) Finally, since we need to conserve angular momentum, we require that `f(z) be a homogeneous polynomial of degree M, where M is the total angular momentum.`

All these constraints add up to the fact that $f(z)=\prod_{j<k}(z_j-z_k)^m$, with $m$ odd.**This is what people mean when they say that the LWF falls into the same universality class as the actual wavefunction, as any wavefunction needs to account for this.[^3]**

Well, neat, you might say, but this still just describes fermions, I thought we were going to be talking about anyons! Right you are, things only really get exciting once we start talking about _excitations_ of this ground state.

- The excitations of the FQH state (technically of the state described by the Laughlin wavefunction, which are not exactly alike)

[^3]: The LWF might appear to just be an easy to compute with exemplar of this universality class, but it actually has some other nice features which set it apart from its siblings, see `other nice feature of LWF`

# Geometric Phase

# Unresolved Issues

## What is the importance of the 2D idealization for the FQHE

The quantum hall effect has also been studied in three dimensions, see \[@Torres2020; @Tang2019; @Pavlosiuk2017].

Apparently it is not as straightforward as I thought, people have constructed the 3D fractional quantum hall effect, but it's rather difficult.

The difference-maker for whether an electron gas is 2D seems to be it's Fermi-surface topology.[[3D Quantum Hall Effect]]

# Citations I still need to use

[@Shech2015b]

[@Wilczek1982]

[@Rao2001]

[@Knapp2016]

