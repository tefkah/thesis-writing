I want to liken [[Sorites Paradox]] to [[Infinite Idealizations]], but there’s a problem:

Sorites paradoxes have a clear point in “the middle” where the “vagueness” “is”, e.g. while a 1m person is short and a 2m person is tall, and we cannot really say where this transition point is, it seems to be around 1.80m

In contrast, infinite idealizations are a problem *because* they occur at a point/configuration that isn’t attainable, e.g. at $\infty$ or $0$.

This leads to the problem

>[!note]
>
>Infinite idealizations are a bit like Sorites, but they do not have a “crossing over” point like the Sorites paradox has. Without it, there isn’t really a paradox at all.


# Trying to phrase the paradox

Let’s try to construct a Sorites argument for phase transitions.
## Induction [1]

1. 1 molecule of water does not display phase transition behavior
2. If N molecules of water do not display phase transition behavior, N+1 molecules of water also do not display phase transition behavior.
  C. There does not exist a finite number N molecules of water that displays phase transition behavior. $\forall N\in\mathbb{N} \quad \neg PT(N)$

PROBLEM! C is True! So a) we have no motivation to negate 2 and construct the line-drawing case, and b) even if we were to construct it, it would not contradict C.

Let’s try
## Line-drawing [2]
1. 1 molecule of water does not display phase transition behavior
2. It is not the case that for all N molecules of water N does not display phase transition behavior ← not true!
  C. There is a point at which N molecules of water do not display phase transition behavior, but N + 1 molecules of water do.


Here’s the problem: 2 is true, therefore the line-drawing argument is unsound.


# HMMMM

Something is off. While 1.C is technically true thermodynamically, in “reality” it’s false: we *do* see thermodynamic phase transitions in systems of finite size, because everything is of finite size/density (except maybe singularities in black holes).

How do we square this??? What are our claims actually about?

# Ballspace & Infinite idealizations

![A picture of a sphere portruding out of a box. The diameter of the sphere is larger than the height of the box, so the north and south poles are portruding from the top and bottom of the box, while the middle is fully enclodes by it.](media/ballspace.png)

I think ballspace is a better candidate for likening an infinite idealization to Sorites paradoxes, as it (arguably) displays the same phenomena as the inf id, but has the transition point exist not on the far end of the variation axis. [[Sorites paradox requires the predicate to have multiple false points and multiple true points along the axis of variation]]

  
This is *also* not true in the ballspace example, let’s construct it:

>[!Ballspace Induction]
>
> 1. At thickness 1km the space is simply connected
 2. If a system of thickness N does not display the thing, then the system of thickness N-1nm also does not display the thing
>
> C. There does not exist a thickness N that is multiply connected

 
## So all hope is lost?

Not completely: there is still this “vague” region in the FQHE/ballspace example because QM! Maybe this is my saving grace.




