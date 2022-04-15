---
title: Determinant
tags:
  - definition
  - vectors
  - linear_algebra
  - mathematics
id: 4c40816b-3a86-471c-b225-ac7b6f988833
mtime: 20210701200725
ctime: 20210511133056
---

# Determinant

The determinant of a matrix $A$ is a scalar value of a function of the elements of the matrix.

## 2x2

For a $2x2$ matrix $A= \Big(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\Big)$, the determinant is

$$
\det \begin{pmatrix}a&b\\c&d\end{pmatrix}=\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc
$$

## 3x3

For a $3x3$ matrix things are a little more complicated, then it's

$$
\det\begin{pmatrix}a & b & c\\d&e&f\\g&h&i\end{pmatrix}= a\begin{vmatrix}e&f\\h&i\end{vmatrix} -b\begin{vmatrix}d&f\\g&i\end{vmatrix} + c\begin{vmatrix}d&e\\g&h\end{vmatrix}\\
= aei+bfg-cdh-veg-bdi-afh
$$

## General

annoying

# Properties

The determinant says a lot about the "structure" of the matrix, and is used in computing its [[Eigenvalues]]
