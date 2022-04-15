---
title: sorites paradox
tags:
  - thesis
  - vagueness
  - definition
id: 207301aa-718d-417a-b3c0-103264d7a88f
mtime: 20210701195453
ctime: 20210309112947
---

# Sorites Paradox

The Sorites, Greek for "heap", paradox is a paradox showing the problem of delineating [[Vagueness|vague]] terms.

It goes as follows:

We agree that 100,000 grains of rice located in approximately the same area would constitute "heap" of rice. Similarly, 99,999 grains of rice would also be a heap.
On the other hand, two grains of rice next to each other would not be called a heap.
Similarly, three grains of rice are also not a heap.
Thus, there seems to be some "boundary" where the collection of rice grains goes from being a heap to being not-a-heap, and vice versa. However, one grain of rice also seems like it cannot be the decider of heapness.

If we try to formalize these intuitions we arrive at paradox.

> [!Inductive Sorites]
> 1. One grain of rice does not make a heap.
> 2. If N grains of rice do not make a heap, N+1 grains of rice also do not make a heap.
> ---
> $\therefore$ There does not exist a number N grains of rice that make a heap.

The conclusion is obviously unacceptable.
On the other hand, if we *do* assume there is a line, then we arrive at the following.

> [!Line-drawing Sorites]
> 1. 100,000 grains of rise make a heap
> 2. It is not the case that for all N grains N make a heap
> ---
> $\therefore$ There is a point at which N grains of rice make a heap and N-1 grains of rice do not.
> 

This conclusion also doesn't seem right.