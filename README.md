Hello!

This README file contains instructions for video "Explanation: Revisiting the checkOut() and returnBook() Methods", S3V1.

Your instructions are as follows:

1) Inside the Patron class, add two methods: `checkOut()` and `returnBook()`

- The `checkOut()` method should receive one parameter, a Book object. 
- It should update the `currentBook` property to the Book object that's passed in.
- It should update that Book object's `out` property to `true`. 
- It should update that Book object's `patron` property to the Patron object itself
- It should calculate the due date (14 days in the future) and then set the Book object's `dueDate` property to that due date.


- The `returnBook()` method should receive one parameter, a Book object.
- It should update the `currentBook` property to `null`
- It should update that Book object's `out` property to `false`
- It should update that Book object's `patron` property to `null`
- It should update that Book object's `dueDate` property to `null`