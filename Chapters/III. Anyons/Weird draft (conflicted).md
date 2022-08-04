# Weird draft

{/** TODO: Figure out where to put this (very incomplete) draft which talks about geometric phase 
    * Really I don't know what the hell I was doing here, looks like I typed this using speech-to-text but it's not very coherent.
    * labels: order 
    */}
 

# geometric phase

## the cone example and holonomy

parallel transport is a bit strange. on a flat euclidean plane, nothing happens.
a cone is like a flat euclidean plane glued together in a weird way, like this

![](conefold.png)

where side $s$ is glued to side $?$ in order to yield a smooth surface, with the exception of the problematic point $s$.

we can then calculate our parallel transport by simply "doing" the parallel transport on the surface of the "flat" cone.

the vector is transport from the one side to the other, eventually reaching the edge $s$, from where it is suddenly teleported to $s$, ending up with a much different angle.

![](transport.jpeg)

https://www.physicsforums.com/threads/parallel-transport-and-cone.1000209/

this angle difference is directly related to the angle of the cone. we see that the sharper the cone, the bigger the failure of parallel transport (holonomy) will be.

the strange thing is, of course, that this angle difference appears rather suddenly only after we completed >1 round. however, were we to move an 'actual' vector on a cone, we'd expect this to happen slowly, right? we want to get rid of the "discontinuous jump".

this question proves rather difficult to answer, for two reasons.

1) the holonomic angle is only defined when the vector returns to its original position, we don't expect thing to be the same when we simply stop the transport somewhere in the middle.
2) actual cones are not this pointy.


{/*http://applet-magic.com/paralleltransport.htm */}



in actuality, when you deform the cone in the figure above, the angle _does_
change continuously along the path of the cone wrt beginning angle, but that's
very often the case and does not count.

instead of having the continuous parameter be the angle of the cone, a better one would be the "path", since we are interested in paths after all. here we
see that if we take any path that does not cross the "seam", the angle
remains 0. but the seam is kind of arbitrary, so that is not really fair. we do
know, however, that if the path encircles the tip of the cone it definitely
passes the seam. so now we have our discontinuity: all paths that do not cross
the tip do not gain a holomorphic angle (because those paths are the same as
paths in euclidean spacetime), while as soon as the path encompasses the origin
it has to cross the seam and thus gains an angle $\phi$.

since this failure of parallel transport is a geometric property, we say that all the geometric information of the cone is centered in one point, because inclusion of that point in the path makes or breaks the angle.

### less pointy cone

as we see, the thing we then need to change in order to get a more smooth cone holonomy is the tip. at the moment we have only one point which is
   problematic. this can be seen as our idealization: an infinitely sharp cone
   instead of a blunt one.

when we blunt the cone, we suddenly see that the path can be continuously deformed to include the "seam". however, what we have gained in smoothness
   we have lost in mathematical simplicity: we no longer can easily relate the
   cone to the euclidean plane. in order to describe the blunt cone, we need to
   describe it's _connection_ and do some differential geometry.

...

now we see that the cone is good.

[[FQHE or anyon chapter|FQHE/anyon chapter]]