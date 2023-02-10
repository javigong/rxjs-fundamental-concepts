import { interval, reduce, scan, take } from "rxjs";

//* Create an observable from scratch
// const observable = new Observable(
//   (observer) => {
//     observer.next('Hello');
//     observer.next('World');
//     observer.complete();
//   }
// );

//* Subscribe an observer to the observable from scratch
// const subscription = observable.subscribe(
//   (value) => console.log(value),
//   (error) => console.log(error),
//   () => console.log('Completed')
// );

//* Operators are functions that take an observable as input and return a new observable as output

//* CREATION OPERATORS:
//* Create an observable from scratch or from other sources

//* Create an observable operator interval with 1 second interval
// const observable = interval(1000);

//* Create an observable operator timer with 5 seconds delay and 2 seconds interval
// const observable = timer(5000, 2000);

//* Create an observable operator fromEvent with document click event
// const observable = fromEvent(
//   document, 'click'
// )

//* Create an of operator with 5 values
// const observable = of([1, 2, 3, 4, 5]);

//* Create a from operator with a fetch request to an API endpoint and return the response as an observable
// const observable = from(
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
// );

//

//* Subscribe an observer to the observable operator
// const subscription = observable.subscribe({
//   next(value) {
//     console.log(value)
//   },
//   complete() {
//     console.log('Completed')
//   }
// }
// );

// console.log('hello')

//* Pipeable Operators:

//* Reduce operator

// const observable = of(1,2,3,4,5).pipe(
//   reduce(
//     (acc, val) => acc + val,
//     0
//   )
// )
// const subscription = observable.subscribe(x => console.log(x))
// returns:
// 15

//* Take Operator

// const observable = interval(500).pipe(
//   take(5),
//   reduce(
//   (acc, val) => acc + val,
//   0
// ));
// const subscription = observable.subscribe((x) => console.log(x));
// returns:

//* Scan Operator

const observable = interval(500).pipe(
  take(5),
  scan(
  (acc, val) => acc + val,
  0
));
const subscription = observable.subscribe((x) => console.log(x));
// returns:
// 0
// 1
// 3
// 6
// 10


