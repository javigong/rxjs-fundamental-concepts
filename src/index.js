import { fromEvent, interval, Observable, timer } from "rxjs";

// Create an observable operator from scratch
// const observable = new Observable(
//   (observer) => {
//     observer.next('Hello');
//     observer.next('World');
//     observer.complete();
//   }
// );

// Subscribe an observer to the observable operator
// const subscription = observable.subscribe(
//   (value) => console.log(value),
//   (error) => console.log(error),
//   () => console.log('Completed')
// );

// Create an observable operator interval with 1 second interval
// const observable = interval(1000);

// Create an observable operator timer with 5 seconds delay and 2 seconds interval
// const observable = timer(5000, 2000);

// Create an observable operator fromEvent with document click event
const observable = fromEvent(
  document, 'click'
)

// Subscribe an observer to the observable operator
const subscription = observable.subscribe(
  console.log
);