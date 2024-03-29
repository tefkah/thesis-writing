---
title: If particles cannot be closer than the thickness of the strip, the
  configuration space is approximately 2D
tags:
  - FQHE
  - anyons
id: 654e4bfd-594e-48f2-b6b1-7ad252e1c05c
mtime: 20210701200750
ctime: 20210414134239
---

# An alternative configuration space

According to [@Shech2019] the consequences of the above argument are clear: "anyons can only exist in two dimensions." pageXX. Therefore, since small 3D is not approximately 2D, the 2D idealization is truly indispensible to our explanation of the emergence of anyons and we therefore ought to take it ontologically seriously.

Now that we have finally grasped the core of Shech's argument, we are at last able to push back a little. At the end of this chapter, I will have shown how to fully make sense of the emergence of anyons in the quantum Hall system without relying on the 2D idealization. Before that however, I want to make it at least somewhat plausible that this _can_ be done.

To start, as we have seen above, to derive the existence of anyons, i.e. particles whose phase under exchange $\neq 0,1$ , we do not necessarily require the configuration space to be $2D$, but merely for said configuration space to be non-[[Simply connected]]. Therefore, it seems plausible that an approximate 3D explanation could get off the ground, if only we can show that it is non-simply connected. The rest of the chapter serves as that argument.

## First steps

To gain some confidence in the idea, let us  prove that an idealized _3D_  configuration space can also be non-simply connected. The key reason why the 3D configuration space constructed previously is necessarily simply connected is due to the fact that we 'merely' have a zero-dimensional hole at the origin where the two particles would intersect, which, since we also want to describe fermions, is forbidden by the Pauli-exclusion principle.[^1]  According to our current best scientific theories, fermions (and presumably the anyons under question as well) are understood best as point-particles, and thus the intersection being a single point in configuration space seems to be justified. I claim, however, that if this condition would be relaxed, allowing for a larger "forbidden" space, then,  in conjunction with two other plausible premises, we arrive at a multiply connected 3D configuration space. If this sounds rather ad-hoc, that is because it is. The final argument will not rely on these assumptions, so for now I believe they cause little harm. although I will attempt some minor justification at the end of this section.

The main idea is the following: if the minimum distance between the particles is greater then the "height" of the configuration space (here the size of the QH system), the 3d configuration space becomes multiply connected as well, as there are no paths which will "loop over" the singularity points. Imagine a box with a billiard ball in the middle which pokes out of the top and bottom, this is a reasonable model for now for the possible configurations of the particles.

To construct this configuration space we require three conditions on top of the ones already mentioned before ($(\mathbf{r_1}, \mathbf{r_2})=(\mathbf{r_2, r_1})$ and $|r|\neq 0$)

1) $\Psi(r_i\geq b_i)=0$ where $b_i \quad i=x,y,z$ are the dimensions of the quantum Hall system. This says: the probability of finding the particle outside the quantum Hall system is $0$, which is not exactly true but for now works as a useful assumption, modeling the boundaries of the system as an infinite potential well
2) $\Psi(|r|\leq a)=0$, where $a$ is some real number representing the minimum allowed distance between the two particles
3) $b_x, b_y\geq a \geq b_z$ (or really any of the dimensions, it just needs to be )

Both of these will be argued for in more detail below, but for now I claim that _if_ $\exists a\geq \beta\in \mathbb{R} \quad \Psi(r\leq a)=0$, where  is the height of the fractional quantum Hall system and  the minimum distance allowed between the two particles, then the resulting configuration space will be non-simply connected.

To briefly sketch an intuitive picture, let us recall our $d$-dimensional configuration space and the fact that we are only really interested in the latter half of that configuration space, as the absolute position of the particles (e.g. the location of the quantum Hall system) should not really matter. So we are just looking at the paths in $S=\frac{\mathbb{R} ^3-\Delta }{Z_2}$

Now we add our conditions above. 2) creates a sphere of forbidden particle positions around the origin (where the particles are near one another), which we can model as subtracting those a sphere of radius $\alpha$, called  $\sigma$, from the configuration space. Since  encompasses the points , we can leave out . Additionally,  1) means we are excising the points outside of the QH system, which I will represent with $\beta$ , which are the points ranging from $[-\frac{b_i}{2},+\frac{b_i}{2}] \quad i=x,y,z$ .[^2] Thus creating our new configuration space for $2$ particles

$$
\tilde{Q}'= \frac{\mathbb{R}^{3} -\sigma -\beta  }{Z_2}
$$

which can be crudely represented as![](./media/ballspace.png)

### "Proof"

$\tilde{Q}'$ is clearly non-simply connected, as there are loops that can be formed around the center of the space which cannot possibly be deformed into a point. This envisioning is similar to the [[Aharonov Bohm Effect]], in which the configuration space contains an infinitely high solenoid at the origin, preventing loops from closing.

So, we succeeded in creating a rather ad-hoc multiply-connected configuration space, so what? We have neither

1) shown that the fundamental group of $\tilde{Q}'$ is $B_N$
2) justified neither condition 1), 2) or 3).

## Fundamental groups

A rigorous derivation of the fundamental group of these spaces is highly non-trivial (see for instance [@Fox1962] for the derivation of the 2D case). I will instead do the normal philospher of physics thing, namely to gesture at a proof which I belief will probably hold.

The only thing we need to show is that the $3D$ case is not different in any relevant  respect to the $2D$ one. In case of the fundamental group, the relevant respect is the number of [[Homotopy equivalent paths]], the classes of paths which cannot be continuously deformed into one another. In a non-simply connected space, a path which winds around a "hole" cannot continuously be deformed into one which does not, nor can a path which winds around said hole twice be deformed into one that only winds around it once, or winds around it twice clockwise.

Luckily for us, the  homotopy equivalent paths of  $\tilde{Q}'$ are the same as those for $\tilde{Q}$ , as all the paths that wind around the "origin-hole"  $k$ times can be continuously deformed into one another in both cases, and no other winding-sites exist. If our space would have additional holes, that could pose a problem, but for now we can rest easy.

Thus, since the number of homotopy classes is the same, the fundamental group is also identical, namely $B_N$ for $N$ particles. Therefore the $1D$ rep will remain the same, and the particles will not be limited to a phase of $0$  or $1$, and therefore anyons are possible.

## Justifying the conditions

While I will give some justification below, let us consider one line of argument: since (presumably) the configuration space just constructed allows for the existence of anyons, why do we not simply discard our previous idealization and insert this one into the EIA? Sure, it has some quirks, but the condition that particles cannot come within a certain distance of one another is hardly more problematic than assuming the particles cannot move in an entire dimension. The additional criterion of the wavefunction being zero outside the QH system similarly appears less restrictive than the 2D idealization. Can we then just assume that this is a strictly better model to use?

Unfortunately, not quite. While assumptions 1. and 2. might be brushed off in this way, accepting 3. without further justification `is not nice`. Unlike the _2D_ idealization, performing an inference to the best explanation also does not appear quite satisfactory, as the condition is so specific that unjustified acceptance makes it `too ad hoc`.

**(My idea for justifying this was to find a way to express the probability of finding the particle in the z direction and contrast that with the Coulomb force, but I wasn't able to find the former. Shech cites a $10^{-45}$  probability for it, but he doesn't justify or cite it. In the end it does not really matter as this is just a proof of concept, but would be nice to have)**


{/* The AB effect also has such a strong idealization. Underscription of idealizations. */}




# Footnotes

[^2]: It's /2 in order to have the origin be set at zero.

[^1]: Unless further argued for, this statement is technically begging the question, as the Pauli-exclusion principle is a consequence of the phases being a certain way and probably should not be assumed. There exist less ad-hoc ways of formalizing this constraint, which, however, do often rely on specific interpretations of quantum mechanics, see for instance [@Brown1999].
