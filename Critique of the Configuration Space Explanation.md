---
title: Critique of the configuration space explanation
tags:
  - subchapter
  - anyons
transclude: t
id: 9a102d0f-bbd5-421d-af39-854eb34cb8a3
mtime: 20210701200711
ctime: 20210606144410
---

# Critique of the configuration space explanation

# Critique

The main crux of my critique lies in the (in my eyes) unnecessary assumption that the quantum statistics of a particle can _only_ be determined by the first homotopy group of its configuration space. While this might work as a prediction, i.e. if we can figure out the configuration space and then the fundamental group, we might reasonably expect to find particles with such and such quantum statistics there.

However, I do not find this very satisfactory as an explanation, it feels much too close to a DN way of explaining things, which, as we know [[Problems with the DN model|DN cannot determine whether something is a difference maker]]. That is, the explanation works backwards: instead of ending uncontrovertably with the most controversial point, namely that the configuration space of the anyons is 2D, it arrives there kind of casually.

The order of explanation as it is usually given is like this:

1) We have observed fractional quantum statistics (alledgedly, i'm willing to grant that at this point)
2) _The quantum statistics of the particle are determined by the first homotopy group of its configuration space_
3) The 1D rep of the Braid group is fractional quantum statistics
4) The Braid group is the first homotopy group of a non-simply connected 2D configuration space
5) Therefore particles which exhibit fractional quantum statistics need to have a 2D configuration space

Now, if all of the above steps _necessarily_ are _if and only ifs_, this argument is rather water tight. However, I would dispute that this is the case here, first and foremost on the grounds that this conclusion is _primae facie_ unacceptable and a paradox, so something seems to go wrong here. We can either resolve this paradox by correcting our physics to allow for precisely 2D configuration spaces, or, what seems more agreeable to me, by not allowing the argument to reach this conclusion, as I do not believe every single on of the steps above are if and only ifs.

Specifically, I have trouble with step 2, as we appear to need some theorem in order to establish this but I have not really found such a theorem, just vague gestures to the fact that these statistics come from the worldlines being intertwined and whatnot.

The other way around the explanation looks a lot less secure

1) The configuration space describing the exchange of two identical particles contains a hole in the origin and is thus non-simply connected
2) Such a space has an infinite number of homotopy classes of equivalent (i.e. continuously deformable into each other) paths
3) The fundamental group/first homotopy group of these paths is the Braid group
4) The 1D rep of this group is $e^{i\theta}$
5) _This is the spin of the particles we are interested in_

## The problem with treating this as a DN explanation

The problem with treating this a DN explanation is that that requires that the Laws of Nature used are true and ALSO the events described as premises. However, there are not really any of the latter, as we can't take the existence of a 2D things as a premise, as that is weird.

[[EIA allows us to verify DN premises]]

## Brief critique summary

## Leng says: "Platonism is not real, because we can just say that physical space approximately instantiates mathematical structures, so we don't need that exactness"

## Shech says: "We cannot use approximate instantiation if we assume approximation means how Norton says it and if we use the EIA. Then anyons in the FQHE show that something is real but not cannot be approximately instantiated, namely 2D space".

pp 1977
"The fundamental group of approximately 2D is the same as that of 3D, namely $S_n$." "For anyons, we need fundamental group to be $B_n$, and _this can only occur in exactly 2D_."
"Yet, physical systems are not exactly 2D."
"Thus, it cannot be said that a physical system 'approximately instantiates' the braid group structure necessary for fractional statistics."

<!-- In short: YOU CANNOT HAVE **BRAID GROUP STRUCTURE* IN 3D. -->



<!-- I say: YES YOU CAN, IF YOU BELIEVE HARD ENOUGH. -->



## I say:

### That's not a great argument because the explanation we get from the anyon case/how Shech defines it is not strong enough to factor into the EIA

### Moreover: This _is_ / can be seen as a case of approximate instantiation!

I aim to show that the Shech's claim that "it cannot be said that a physical system approximately instantiates the braid group structure" is false, and we can indeed say that a physical system can approximate such things, just not in the way that Shech thinks about it. The way I see it, Shech's explanation resembles a DN explanation but backwards: we observe the explandum, from the assume that the explanans is ciorrcet, and view the explanans as a chain of laws (theorems) leading to the final claim that the configuration space of the system must be exactly 2D. One might object against this IBE style approach, but I will not challenge it here.

Instead, I will challenge one of the assumptions underlying this approach, namely that all the deductive steps taken to get from point A to B are necessary connections. I agree with Shech that 3D space cannot instantiate the Braid group directly, as his argument shows. However, there is a catch with these kinds of idealization arguments, namely that the failure of promotion is _depends on the property under consideration_. Connectedness is such binary property which lends itself especially well to such failures: either all the paths can be deformable to a point or they cannot, no ifs ands or buts. But connectedness is a rather abstract property regardless, much further removed from direct measurement than the quantities we are actually interested in: the statistics of the system. Demanding that connectedness be the make-or-break property seems a little unfair to me, as whether abstract mathematical structures can be said to be instantiated by the physical systems is the problem under question in the first place. While I would not dare go as far a to accuse Shech of begging the question, I do believe it allows me some wiggle room for finding an alternative route.

With "finding an alternative route", I mean going over the deductive structure outlined above and finding either alternative ways to characterize what is happening to actually be approximate rather than exact, or to find an alternative explanation _qua_ deductive argument starting from different premises which do not have such a problematic explanation. As an illustration, consider the well worn counter-example against the DN model of Bob (someon without a uterus) not getting pregant after taking anti-conception medication.

1) Bob takes anti-conception pills
2) If you take anti-conception pills, you will not become pregnant
3) Bob does not become pregnant.

While we know that the DN model of explanation cannot call this an incorrect explanation by itself, we do recognize this as an incorrect explanation, as Bob would not have become pregnant anyway since Bob does not have a uterus. Thus the explanation is in some way deficient, which different models of explanation have tried to solve in different ways. The exact solution does not matter to us at this point, what is important is the diagnosis of the problem and the ways this explanation could be improved. For one, we could replace 1 and 2 with different claims entirely, such as "Bob does not have a uterus" and "If you do not have a uterus you cannot become pregnant" respectively. Or, we could modify 2. slightly and use assumptions implicit in 1 to come to the same conclusion, such as "If you take anti-conception pills _or_ do not have a uterus you will not become pregnant". Since the fact that Bob does not have a uterus is implicit in 1. (else, why would it not be a correct explanation?), we can add it as another premise, completing the argument. Let us see what such an argument could look like in our case.

So, what other properties are we able to consider? To find them, it is useful to work the other way around from the usual explanatory story, starting with our target phenomenon: the observation of fractional quantum statistics. At this level we are hard pressed to find a more "approximate" characterization of the property, as this would either entail redefining what we mean with "observing the phase", which reeks of the "ad-hoc" kind of justification Shech is wary of, or finding a different explanation entirely. The latter is actually easier than it sounds, as the explanation given by Laughlin himself does not strictly rely on topological arguments, but on calculating the Berry connection of fractionally charged quasiholes encircling each other. I will evaluate whether this is a viable alternative later, but one obvious problem is that this explanation itself relies on a 2D idealization, which is the problem under consideration to begin with. This idealization might not be as problematic however. (this is later or earlier, haven't figured out where to put it)

`garbo`
Next, we have an equally unpromising candidate, which is the "mini-explanation". The fundamental group of 2D exchange under two particles is the Braid group

1) The fundamental group of the configuration space of the exchange of $N$ identical particles in 2D is $B_N$
2) The quantum statistics of a particle is the 1D rep of the fundamental group of the ...
3) The quantum statistics of 2D particles are anyonic i.e. $e^{i\theta}$

(I'm being loose with the structure here, as otherwise it would be a huge drag to write everything out, i.e. "The 1D rep of the fundamental group of the configuration space of the exchange of two identical particles is $e^{i\theta}$", "The 1D rep of the fundamental group ... are the quantum statistics", .... (secretly I don't really know how to write this out DN style as the example laws are always extremely simple conditionals, nor do I really know how to transfer this to theorems rather than laws. If this is a big problem we can discuss this, I think more likely I will have to get rid of the reference to the DN explanation or formulate this differently entirely. Regardless, this is more an example of how I wish to argue))`garbo`

...

The most promising candidate for such an intervention is centered around the fundamental group of the system, but not in the way that the argument is presented by Shech. Instead let us examine how the argument goes once more:

We see the Quantum Hall Effect manifest

## Checklist

To show it can be approximated, I need to show that there are _some_ paths which are nondeformable into one another/non collapsible to a point. In order to do that I need to let go of another idealization that is made which prevents that somehow. **I need to make plausible that some paths in 3+1D get intertwined!!**

## Options

### Particles have nonzero size

In these examples, particles are usually treated as having no extension whatsoever. This is obviously unrealistic. If particles have some extension, however small, there is some leeway in having them have paths which are not able to be contracted to a point.

### Not ALL paths

While the connectedness is described using ALL possible paths to describe the entire space, it seems possible that in some small section of the space things work differently. You can't continuously cut off the distance the path sees, except for keeping them within a spacelike distance. That's still more than enough paths tho.

### Winding can be something different?

The main thing I want to claim is that you can approximate some kind of winding without having to talk about 2d spaces, I just want to get there directly.

[[Group]]

## Junk

Startingfrom the position that the configuration space is 2D, and then all the other points deductively follow Looked at in this way I would agree with Shech: 3D cannot approximately be 2D space in the relevant sense, namely in the sense of the space being connected or not.

However, what I argue is that this is _not_ the relevant factor/definition/whatchamaycallit to consider, or at the very least not the only one. While I agree the 3D space cannot approximate 2D space if the property under consideration is connectedness as presented, I do think it is possible for some other factor down the argumentative line to be considered "approximately instantiated" in the Nortonian sense.

We just need to find a different path to "fit in" to the explanation of the possibility of anyons, i.e. either

1) 2D space is approximately instatiated in the experiment due to thinness and strong fields, giving rise to something with the same properties as 2D space
2) Holes are approximately instantiated, for instance ??
3) Connectedness is approximate, in the sense that we don't care about _all_ paths but just most paths, and we can create a lot of paths which don't work well
4) Homotopy classes are approximate, in the sense that we don't derive the homotopy classes from the connectedness of the space but from looking at different paths and seeing that they _don't_ act the same way. rather than that they _can't_ act the same way
5) Fundamental group is approximate, in the sense that we don't look at all the homotopy classes but look at what kind of behavior the elements of the group have
6) 1D rep is approximate. I don't see how this would work.
7) Equivalence between spin is approximate, in the sense that there is some other physical mechanism which causes the phase to be such which does not rely on the above, such as the Berry phase calculation.

So, which of these is the most likely canditate for approximate instantiation?
