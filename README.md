# RxJS Fundamental Concepts:

## Observables and Observers

- Observable is a wrapper around a data source, it can sort, filter, and coordinate data.

- Observer is an object to observe the Observables, it is responsible of receiving data after an Observable has emitted the data.

## Subscriptions

- Subscription is a connection established by an Observer with an Observable. Multiple Observers can subscribe to an Observable.

## Declarative programming with Operators

- Imperative programming focuses on the HOW whereas declarative programming focuses on the WHAT.

- Underneath declarative programming is an imperative abstraction

- Operators are Functions that help us to avoid imperative programming.

- Two types of operators: 

  - Creation Operators: Create new observables.

  - Pipeable Operators: Takes an observable as an input and output a new observable.

*Operators List: https://rxjs.dev/api

