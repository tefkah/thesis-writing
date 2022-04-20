---
title: The configuration space explanation chapter
tags:
  - FQHE
  - anyons
  - chapter
startup: latexpreview
latex_header: \usepackage{braket}
caption: 2D exchange
attr_latex: scale=0.75
label: fig:2dexchange
id: 3cb8cc7b-70c4-4613-9f5e-3d73f9c6d476
mtime: 20210701200758
ctime: 20210402123014
---

# The configuration space explanation of anyons

In this section I will give a brief expose of the purported explanation of the possibility/emergence of anyons via the "configuration space framework", mostly based on [@Shech2019], [@Shech2015b], [@Rao2001] and [@Tong2016].

## The quantum statistics of a particle are the phase factor it obtains under exchange

The quantum statistics of a particle is the "factor" the system picks up under exchange of two identical particles. In 3 dimensions there appear to be only two kinds of quantum statistics possible: Bose-Einstein and Fermi-Dirac, giving rise to bosons and fermions respectively. A particle with fractional statistics, then, has any statistics which differ from bosons and fermions, giving rise to particles which can take on _any_ phase factor, and therefore aptly named "anyons".

A particle's quantum statistics are also intimately tied to its spin, but we can ignore that for now.

## There are two ways of thinking about fractional statistics: operator and configuration space

How do we know that only anyons and bosons are allowed in 3 dimensions?
We have two frameworks for deriving the allowed (or possible) quantum statistics of a particle, the operator framework and the configuration space framework. However, while they are equivalent in 3D ([@Landsman2016b]), they offer different predictions in 2D.

As mentioned, previously, quantum statistics concern the phase factor a system of identical particles picks up when exchanged, and this exchange can be modeled in two ways using the above framework.

Using the operator framework, we model this exchange of particles by swapping out all of their quantum numbers, turning one particle into the other so to say, which clearly involves the precise workings of the operators, while for the configuration space approach we _physically_ swap out said particles, a procedure which heavily depends on the characteristics of said particles configuration space.

## Naive exchange

In order to prepare ourselves for the more in depth analysis to follow, it is worth looking at the handwavey approach to solving particle exchange first (this technically works with distinguishable particles but it works as a first approximation):

We start out with a wavefunction $\Psi$ of our system of two particles $\psi_1$ and $\psi_2$$\Psi_0=\psi_1\psi_2$

If we exchange the particles, we expect them to pick up a certain [[Phase Transitions (Meta)]]

$\Psi_\pi=e^{i\theta\pi}\psi_2\psi_1$

Exchanging them again, we have arrive at the same position as before, and, with the particles being indistinguishable, we expect the system to be identical to the one we started with

$\Psi_{2\pi}=e^{i2\pi\theta}\Psi_0$

Therefore, $e^{i2\pi\theta}=1 \rightarrow e^{i\pi\theta}=\pm 1$, which leads to $\theta=0 \lor \theta=1$.

We have therefore "shown" that there are only to types of particles possible, bosons ($\theta=0$) and fermions ($\theta=1$). In relativistic quantum mechanics we can prove that this leads to bosons having integer and fermions having half integer spin, but for now we can be content with assuming this.

## The operator framework (I am really quite certain that this is not "the operator framework" )

What we saw above is a very crude version of the operator framework approach, we will go over in more detail now. This starts from the assumption that spin labels different kinds of particles, and then 'shows' that only integer and half integer spin particles can exist.

(Just taken from [@Rao2001] for clarity, not sure how to incorporate this yet)

The three spatial components of spin obey the following commutation relation

$$
[S_i,S_j]=i\varepsilon_{ijk}S_K
$$

If we take the state $\ket{s,m}$  and have the spin operators act like

$$
S^2\ket{s,m}=s(s+1)\ket{s,m}
$$

and

$$
S_3\ket{s,m}=m\ket{s,m}
$$

then we can define the action of a spin raising operator $S^+$ as

$$
S^+\ket{s,m}=[s(s+1)-m(m+1)]^{1/2}\ket{s,m+1}=\ket{s,m'}
$$

If we require $\sqrt{|\ket{s,m'}|^2}>0$, we get

$$
s(s+1)-m(m+1)\geq0 \quad \forall m
$$

Thus

$$
m\leq s \quad \forall m
$$

It is clear then, that for some $n \in \mathbb{N}$, $m'=m+n>s$, unless $m'=s$, so

$$
s-m= n\in \mathbb{N}
$$

Similarly from $S^-$ we can arrive at

$$
m+s=n\in \mathbb{N}
$$

Combining $\eqref{eq:int}$ and $\eqref{eq:mpluss}$,  we get

$$
m+s+s-m=2s=n \in \mathbb{N} \rightarrow s=\frac{n}{2}
$$

Since $n \in \mathbb{N}$, $s$ can only be integer or halfinteger.

So, just using the spin commutation relations we have shown that in 3+1D there can only be two kinds of spin particles, which we know to identify as bosons and fermions.

### I am not really sure that this has anything to do with the operator framework, we are simply using operators so I just assumed, but that is not really a good argumeng

### TODO Spin statistics relation

## Configuration space framework

The above outline works for 3D, but not really for 2 dimensions, as we only have one spin direction (the one perpendicular to the plane) and therefore there are no commutations relations to specify. We could interpret this as the spin having no constraint and thus being able to take on any value, but this does not feel like a proper argument nor does it guarantee anything about the phase.

Luckily, the configuration space framework is here to alleviate all our worries. The approach is rather straightforward but powerful nonetheless, as follows

1) Construct the configuration space of the system of exchanging indistinguishable particles
2) Find the fundamental group of that configuration space
3) The 1D representation of that group is the phase factor of the exchange

It almost seems too easy.

Let's construct the configuration space for exchange of $2$ identical particles in $d$ dimensions (this can be done for $N$ particles as well but the notation is much simpler this way).

Without any constraints on the ways the particles behaved, the configuration space of would be the vector space of the two $d$-dimensional position vectors $(r_1,r_2)$, which would be$\mathbb{R}^d \times \mathbb{R}^d$

However, as the particles are indistinguishable, $(r_1,r_2)= (r_2,r_1)$ (here we are strictly talking about there _configuration_ space, not the _phase_ or state space of the system, i.e. only the actual positions of the particles are under consideration.) This results in us dividing out the permutation group $S_N$, and since for us $N=2$, we divide out $S_2=Z_2$, effectively cutting the configuration space in twain.

We need to impose another constraint, namely to excise the diagonal points $r_1=r_2$. (As far as I have seen this is argued for rather weakly, with [@Rao2001] saying it is because we want to keep track of exchanges, and if they are identical we obviously are not able to do so, and [@Shech2019\,Shech2015b] arguing that we need to excise these points as otherwise we cannot have fermions. Both of these arguments include some mumbling about how this does not really affect bosons since their phase is 1 anyway, but I find this rather weak justification, and to me it sounds kind of ad hoc.  )

Let us call the set of diagonal points $\Delta$. To further simplify our space a bit, instead of keeping track of both of our particles, we can keep track of their center of mass (CM) $\mathbf{R}=\frac{(\mathbf{r_1}-\mathbf{r_2})}{2}$ and the distance between them $\mathbf{r}=(\mathbf{r_1}-\mathbf{r_2})$.

Then, for our configuration space looks like

$$
Q= \mathbb{R}^d \times \frac{\mathbb{R}^d  - \Delta }{Z_2}
$$

<!-- =just blantantly copied= -->

In order to study the phase picked up by the WF of a particle as it moves around the other we need to _classify all possible **closed** paths_ in the configuration space. To make our lives even easier, since we are only interested in the phase of the particles we can "discard" the position of the CM, as this simply shifts their combined position in space which we assume does not change the phase the two particles add acquire. Thus, we can only look at the paths in

$$
S=\frac{\mathbb{R}^d -\Delta}{Z_2}
$$

Before showing what the fundamental group of this space is, we can get a more intuitive notion of possible paths a particle can take by keeping $|r|$ fixed so that $S$ describes the surface of a $d$-dimensional sphere. We can easily see this by....

### 3D

Let's stay at $3$ dimensions for now. The paths $S$ are then all the possible paths along a half-sphere (because of the division by $Z_2$) of radius $|r|\neq 0$ (because of the excision of $\Delta$, which for $\mathbf{r}=\mathbf{r}_1 -\mathbf{r}_2$ is $0$ by definition).

![](./media/3dexchange.png)

`Copying again`

An exchange of particles will then look like moving the tip of $\mathbf{r}$ from one side of the sphere to the other (path B). A double exchange will then be "looping it around" the sphere (path C).

What is very important is that path C can be **continually shrunk to a point (imagine a string wrapped around the equator of a sphere getting moved up and pulled tighter and tighter), while path B cannot (as its endpoints are fixed)**. `This means that while path B can induce a nontrivial phase difference, path C cannot and thus the WF should be the same for a double exchange`.

Now we have provided a clearer justification for the handwavey argument given in Section X: one exchange provides a phase factor, say $\alpha$, and two exchanges brings us back to the origin, so

$$
\alpha^2=+1 \rightarrow \alpha = \pm 1
$$

Thus, in 3 dimensions only Fermi-Dirac and Bose-Einstein statistics are possible.

### 2D

Let us move to the actual goal, 2 dimensions. Same as before, if we fix $|r|$ we get a 2D sphere (a circle) with it's endpoints identified.

![](./media/2dexchange.png)

We make the same argument as before: since in path B the endpoints are fixed, it clearly cannot be contracted to a point, therefore taking on a nontrivial phase.

However, path C also cannot be contracted to a single point, as it is fixed on the circle. One may object that the circle presentation here is just an artifact of laziness, which is entirely correct. However, the point $r=(0,0)$ is still excised, so the "string" cannot collapse to single point in principle.

Therefore, while the particle picks up a phase $\alpha$ during one exchange, it picks up a phase $\alpha^2$ in a double exchange, which is also nontrivial i.e. $\neq 1$. It is thus apparent that $\alpha$ can be any real value, as we do not have any constraint on it. We only know that $\alpha$ has no effect on $|\Psi|^2$ and therefore can be written as

$$
\alpha = e^{i\theta}
$$

### Connection to the Braid group

The above explanation might be satisfactory to some, but a crucial piece of information is still missing: why does the fact that a particle cannot contract to a single point, i.e. whether or not the space is [[Simply connected]], affect the phase of the system in any way? The answer lies in a theorem????

Quantum statistics of a particle are the 1D representation of the [[First homotopy group pi1]]/[[fundamental group]] of the configuration space.

<!-- (Why are the QS that? Is this a theorem? If so, when does it apply?) -->



### The relation between phase and connectedness of a space

For $d=2$ the fundamental group is the Braid group.

The 1D rep of the braid group is $e^{i\theta} \quad \theta\in[0,2\pi]$

<!-- [[id:9a102d0f-bbd5-421d-af39-854eb34cb8a3][Critique of the configuration space explanation]]
 -->
