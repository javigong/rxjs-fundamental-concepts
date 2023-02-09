import { Observable } from "rxjs";

// Create an observable
const observable = new Observable((subscriber) => {
  subscriber.next("Hello world");
  subscriber.error('Error!')
  subscriber.next("test");

  subscriber.complete();
  subscriber.next("next");
});

// Subscribe an observer (object) with the property next
observable.subscribe({
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
