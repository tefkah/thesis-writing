---
title: Adiabatic theorem
tags:
  - definition
  - geometric_phase
  - anyons
  - phase
id: 562ce63a-63cb-4d03-a1d9-43bcf3001d77
mtime: 20210706172502
ctime: 20210706155520
---

# Adiabatic theorem

# Statement

Given a Hamiltonian with a discrete spectrum, the **adiabatic theorem** states that if the parameters of the Hamiltonian are varied slowly enough and the system is in a particular eigenstate, the system will end up in a new eigenstate equal to the old one times some phase factor, which can be decoupled into the [[Dynamical Phase Factor]] $e^{iEt/\hbar}$and the [[Geometric Phase]] factor $e^{i\gamma}$ .

# Derivation

We start with the [[Schrödinger Equation|Time-independent Schrödinger equation]]

$$
H(t)|n(t)> = E_n(t)|n(t)>
$$

and the fact that any wavefunction can be written as a linear combination of its eigenstates

$$
|\psi(t)>=\sum_n c_n(t)|n(t)>
$$

We then insert both of these into the [[Time-dependent Schrödinger equation]], but instead of depending on time we let it depend on

$$
i\hbar \left|\dot{\psi}(t)\right\rangle = H(t)\left|\psi(t)\right\rangle
$$

Inserting ref:eq:adiabaticwf into ref:eq:adiabatictdse using ref:eq:adiabatictise, we get...

$i\hbar \left(\frac{\partial}{\partial t} \sum_n c_n(t)\left|n(t)\right\rangle \right)=E_n(t) \left|n(t)\right\rangle$

- [ ] Finish TeXing this
