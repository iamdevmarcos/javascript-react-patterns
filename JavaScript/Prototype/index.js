class User {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = `${this.firstName} ${this.lastName}`
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`);
  }

  delete() {
    console.log(`${this.fullName} has been removed!`)
  }
}

const user = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = new User({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user.delete === user2.delete);
