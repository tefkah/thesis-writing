---
title: Categorization of idealizations
tags:
  - thesis
  - distinction
  - idealizations
id: 3c3b33a1-b8db-4be9-8acc-244cc7230172
mtime: 20210701200853
ctime: 20210119144549
---

Nicer version [[II. Idealizations|small sample on infinite vs normal idealization]]

# Good distinciton

I want to find a way to distinguish between all the ways people distinguish between idealizations, because there are too damn many.

## Idealization

Some model that's (intentionally) false in some respect

### Simple

An idealization which is achieved by setting a paramater to a certain value, such as zero.

- Frictionless plane

  They are direct and unproblematic.

### Infinite

An idealization which is made by doing some sort of limiting operation such that a parameter goes to zero or infinity It's rarely just "one" model but often some sort of sequence of models considered as a whole. Kind of confusing.

- Thermodynamic limit
- Plane with low friction -> plane with lower friction ->...-> plane with no friction

#### Direct

Idealization in which the relevant parameter is directly set to zero or infinity or whatever, rather than using the limiting operation to influence this.
These are never problematic in the way described  below.

- Plane with low friction -> plane with lower friction -> ... -> plane with no friction

#### Indirect

Infnite idealization in which some parameter is set to zero or infinity in order to set some other parameter to zero or non-zero.

- Infinite population -> zero genetic drift (problematic)
- (non-problematic example)
- ???

##### Problematic

Indirect infinite idealization where the setting of a parameter to zero leads to a problem, but the idealization is still used (kind of a moot point since the only idealizations under serious study are those which are used in scientific practice, only counterexample is Norton's weird things)

- Is the existence mismatch per se indirect?

###### Existence mismatch

Problematic indirect infinite idealization where the promotion fails because the infinite(simal) limit system does not exist, while we can imagine a property of such a system.

- Examples

  - Ever increasing spheres. We can imagine that the surface/volume ratio of an infinite sphere is 1/r, but an infinite sphere does not exist
  - FQHE: 2D electrons do not exist
  - TDL: there are no infinite molecules, nor are molecules infinitely small
  - AB effect: there are no infinite solenoids
  - Population drift: there are no infinite populations
- Problems

  - It is difficult to see what exactly "the limit system does not exist" means. Norton was relatively clear on that, but other authors have been less clear.

###### Contradiction in terms (analytic)

Here the problem arises because an infinitely small or big process/entity/model cannot exist per the definition of the thing. A sphere is defined by the equidistant points from a center, but points infinitely far away cannot meaningfully be said to be equidistant. Or points infinitely far away aren't points? Whatever.

This requires us to be quite strict with our definitions, something which physical models rarely are.

###### Contradiction somewhere else, usually physical (synthetic)

Here the problem arises not because the stipulated entity could not be imagined with a property set to zero or infinity, but because this would contradict something else. I feel like most problems discussed of actual idealizations used in physics are of this kind, as they seem to contradict something uncontrovertible.

As [@Shech2013] points out, for this to work you also need to stipulate that the idealization is real in some sense in order to force a strong contradiction. One way to do this is by using an indispensability argument.

- Examples

  - FQHE: problem is that actual electrons are not 2D
  - AB: problem is that actual solenoids are not infinite
  - TDL: problem is that actual systems do not contain infinite amounts of molecules
  - Population drift: problem is that actual populations cannot be infinite, because too many?

If feel like we can distinguish _even further_ here, namely between idealizations which set a value to infinity vs those that set a value to zero. Maybe this is a higher category, but I feel like the ones that set stuff to zero could have a chance of not being physically problematic, because we can imagine that property not being there. That would then be either above or below existence mismatch, or above problematic maybe. However this would just move the categorty of problematic lower.

But, some things can get set to zero and cause a problem, such as FQHE where 3D dimension is set to zero. So then it would be indirect->zero -> nonproblem/problem -> existence mismatch whatever

###### Discontinuous limit

Problematic indirect infinite idealization where the promotion fails because the infinite limit does make sense (in some way) but that there is a dicontinuous jump in the property that is indirectly affected

- Examples

  - Longer and longer ellipsoid becomes an infinitely long cylinder, but an infinitely long cylinder has a different surface to volume ratio than any of the ellipsoids.
  - Thermodynamic heat transfer/reversible process.
    A reversible process is an idealization of an infinitely slow process such that the system stays in equilibrium all the time. As the "heat transfer time interval" goes to zero all is well, but at 0 no heat can be transfered. Here an arbitrarily slow process works, but an infinitely slow one does not.
