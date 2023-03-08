/** 
Hamster
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
*/

// creating Hamster class

class Hamster {
    constructor(name) {
      this.owner = ''; 
      this.name = name; 
      this.price = 15; 
    }
  
  // methods:
  // wheelRun() - log "squeak squeak"
  // eatFood() - log "nibble nibble"
  // getPrice() - return the price
    
    wheelRun() {
      console.log("squeak squeak");
    }
    eatFood() {
      console.log("nibble nibble");
    }
    getPrice() {
      return this.price;
    }
    getName() {
      return this.name;
    }
  }
  
  const hamster1 = new Hamster('Bob');
  hamster1.wheelRun();
  hamster1.eatFood();
  console.log(`Hamster ${hamster1.getName()} costs ${hamster1.getPrice()}`);
  
  console.log('================================================')
  
  /** 
  Person
  attributes:
  
  name - set name from parameter in constructor method
  age - initially 0
  height - initially 0
  weight - initially 0
  mood - integer starting at 0 initially
  hamsters - empty array initially
  bankAccount - initially set to 0
  */
  
  // creating Person class
  
  class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamster = [];
      this.bankAccount = 0;
    }
  /** 
  methods:
  getName() - returns name
  getAge() - returns age
  getWeight() - returns weight
  greet() - logs a message with person's name
  eat() - increment weight, increment mood
  exercise() - decrement weight
  */
    
    getName() {
      return this.name;
    }
    getAge() {
      return this.age;
    }
    getWeight() {
      return this.weight;
    }
    greet() {
      console.log(`Hey ${this.name}. This is useful information for you:`);
    }
    eat() {
      this.weight++;
      this.mood++;
      // console.log(`after eat weight is up ${this.weight} and mood is up ${this.mood},`)
    }
    exercise() {
      this.weight--;
      // console.log(`after exercise weight is down ${this.weight}.`)
    }
  
    /** 
    ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)*/
      ageUp() {
      this.age++;
      this.height++;
      this.weight += 2;
      this.mood--;
      this.bankAccount += 10;
      console.log(`Birgthday has its + and - : age is up ${this.age}, weight is up ${this.weight}, mood is down to ${this.mood} but bank account is up and equals $${this.bankAccount}!`)
    }
  
    /** 
    buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice()*/
    
    buyHamster(hamster) {
      this.hamster.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
      console.log(`Hamster ${hamster.getName()} worth buying: it increases mood by ${this.mood} for just $ ${hamster.getPrice()}. Hmmm... and makes bank account equal to $${this.bankAccount} `)
    }
  }
  
  const person = new Person('Boris');
  
  console.log(person.getName())
  console.log(person.getAge())
  console.log(person.getWeight())
  person.greet();
  person.eat();
  console.log(`After eat ${person.name}'s weight is up to ${person.weight} and mood is up to ${person.mood},`)
  person.exercise();
  console.log(`After exercise ${person.name}'s weight is down to ${person.weight}.`)
  person.ageUp();
  person.buyHamster(hamster1);
  console.log('================================================')
  
  /** 
  Create a Story with your Person class
  Feel free to update or add methods to automate some of these tasks.
  */
  
  // Instantiate a new Person named Timmy
  const person2 = new Person('Timmy');
  
  // Age Timmy five years
  person2.age = 5;
  
  // At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
  for (let i = 0; i < 5; i++) {
    person2.eat();
  }
  console.log(`After eat ${person2.name}'s weight is up to ${person2.weight} and mood is up to ${person2.mood},`)
  
  // Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
  for (let i = 0; i < 5; i++) {
    person2.exercise();
  }
  console.log(`After exercise ${person2.name}'s weight is down to ${person2.weight}.`);
  
  // Age Timmy 9 years
  person2.age = 9;
  
  //Create a hamster named "Gus"
  const hamster2 = new Hamster('Gus');
  
  // Set Gus's owner to the string "Timmy"
  hamster2.owner = 'Timmy'
  
  // Have Timmy "buy" Gus
  person2.buyHamster(hamster2);
  
  // Age Timmy 15 years
  person2.age = 15;
  // Have Timmy eat twice
  for (let i = 0; i < 2; i++) {
    person2.eat();
  }
  // Have Timmy exercise twice*/
  for (let i = 0; i < 2; i++) {
    person2.exercise();
  }
  console.log('================================================')