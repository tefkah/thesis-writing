---
title: On computing the geometric phase in the FQHE
tags:
  - geometric_phase
  - fqhe
  - subchapter
id: 4b5c6424-14de-4ac9-92ad-98c4881a1879
mtime: 20210701200718
ctime: 20210520180604
---

# On Computing the Geometric Phase in the FQHE

# Berry phase

The Berry phase is the general description of a rather curious quantum specific phenomenon, the _geometric phase_. This phase is obtained when a state is transported along parameter space from its starting position and back again, completing a loop.

# The importance of the adiabatic theorem

The adiabatic theorem seems to be important for the computation of the Berry phase, serving a similar role as "parallel" in [[Parallel transport]]: by keeping the system in the same phase, we can reasonably talk about its phase difference and discard the phase evolution. But, this only happens in the limit of the state being transformed infinitely slowly.

`Luckily, this limit is smoothly approached, just as it is for parallel transport: if we don't keep the vector /precisely/ parallel but only approximatley, we still get some angle difference despite us not being perfect.`

# Berry phase calculation in 2D

Here we calculate the Berry phase over the Berry Connection

...`ADD EXPLANATION THAT SHOWS THIS`

We see that we still get a discontinuous jump at $k=2\pi$ when the loop comes back around, which does not seem like an improvement from our topological example, the only thing we have changed is instead of talking about topology we talk about geometry.

However, this is in fact quite the improvement, because geometry can be somewhat more easily be changed than topology (cutting a hole in a space is more difficult than making it a bit smoother). We will look at an example

# The Cone Example and Holonomy

The initial way of calculating the Berry phase shows that we still get a discontinuous jump, which is bad. Here we will see that sometimes this can be removed, by looking at the parallel transport of a vector around a cone.

Parallel transport is a bit strange. On a flat Euclidean plane, nothing happens.
A cone is like a flat Euclidean plane glued together in a weird way, like this

![](conefold.png)

Where side $s$ is glued to side $?$ in order to yield a smooth surface, with the exception of the problematic point $S$.

We can then calculate our parallel transport by simply "doing" the parallel transport on the surface of the "flat" cone.

The vector is transport from the one side to the other, eventually reaching the edge $s$, from where it is suddenly teleported to $s$, ending up with a much different angle.

![](transport.jpeg)https://www.physicsforums.com/threads/parallel-transport-and-cone.1000209/

This angle difference is directly related to the angle of the cone. We see that the sharper the cone, the bigger the failure of parallel transport (holonomy) will be.

The strange thing is, of course, that this angle difference appears rather suddenly only after we completed >1 round. However, were we to move an 'actual' vector on a cone, we'd expect this to happen slowly, right? We want to get rid of the "discontinuous jump".

This question proves rather difficult to answer, for two reasons.

1) The holonomic angle is only defined when the vector returns to its original position, we don't expect thing to be the same when we simply stop the transport somewhere in the middle.
2) Actual cones are not this pointy.

http://applet-magic.com/paralleltransport.htm

In actuality, when you deform the cone in the figure above, the angle _does_ change continuously along the path of the cone wrt beginning angle, but that's very often the case and does not count.

Instead of having the continuous parameter be the angle of the cone, a better one would be the "path", since we are interested in paths after all. Here we see that if we take any path that does not cross the "seam", the angle remains 0. But the seam is kind of arbitrary, so that is not really fair.
We do know, however, that if the path encircles the tip of the cone it definitely passes the seam. So now we have our discontinuity: all paths that do not cross the tip do not gain a holomorphic angle (because those paths are the same as paths in Euclidean spacetime), while as soon as the path encompasses the origin it has to cross the seam and thus gains an angle $\phi$.

Since this failure of parallel transport is a geometric property, we say that all the geometric information of the cone is centered in one point, because inclusion of that point in the path makes or breaks the angle.

## Less pointy cone

As we see, the thing we then need to change in order to get a more smooth cone holonomy is the tip. At the moment we have only one point which is problematic. This can be seen as our idealization: an infinitely sharp cone instead of a blunt one.

When we blunt the cone, we suddenly see that the path can be continuously deformed to include the "seam". However, what we have gained in smoothness we have lost in mathematical simplicity: we no longer can easily relate the cone to the Euclidean plane. In order to describe the blunt cone, we need to describe it's _connection_ and do some differential geometry.

...

Now we see that the cone is good.

# Relating this back to anyons

The case with anyons is similar: we calculate the geometric phase using the fact that the space has one anomolous point, namely the spot where the other particle is. How do we go about making this less problematic?

[@Ong2006] gives an explanation of things.

`COPY PASTE TONGS EXPLANATION IN THE PREVIOUS CHAPTER LIKE SHAHIN SUGGESTED`
