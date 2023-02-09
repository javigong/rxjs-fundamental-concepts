import { Observable } from "rxjs";

// Create an observable
const observable = new Observable((subscriber) => {
  // subscriber.next("Hello world");
  // subscriber.error('Error!')
  // subscriber.next("test");

  // subscriber.complete();
  // subscriber.next("next");

  // Pushing Asynchronous Values
  const id = setInterval(() => {
    subscriber.next("test");
    console.log("leak");
  }, 1000);


  // Clean up memory
  return () => {
    clearInterval(id);
  };
});

console.log("before");

// Subscribe an observer (object) with the property next
const subscription = observable.subscribe({
  // property next handles data pushed from the observable
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("complete called!");
  },
  error: (err) => {
    console.error(err);
  },
});

setTimeout(() => {
  subscription.unsubscribe();
}, 4000);

console.log("after");
