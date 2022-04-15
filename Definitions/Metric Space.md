---
title: Metric Space
tags:
  - '"functional'
  - analysis"
  - topology
  - definition
id: e997346e-b3dd-48da-8597-93acac415fa1
mtime: 20210701195253
ctime: 20210416111039
---

# Metric Space

A **metric space** $M$ is a tuple containing a set $X$ and a **metric** $d$ which measures distances. The metric is defined as

$$
d: X\times X \rightarrow [0,\infty)
$$

which has to fulfill the following criteria

1) **Positive Definiteness** $d(x,y)=0\quad\leftrightarrow\quad x=y$
   The distance between $x$ and $y$ is $0$ if and only if $x$ is equal to $y$
2) **Symmetry** $d(x,y)=d(y,x)$
3) **Triangle Inequality** $d(x,y) \leq d(x,z) + d(z,y)$
