// Person class definition
class Person {
  // Constructor for Person class
  constructor(name, job, age) {
    this.name = name; // Name property
    this.job = job; // Job property
    this.age = age; // Age property
  }

  // Method to simulate exercise
  exercise() {
    console.log("Running is fun! - said no one ever");
  }

  // Method to fetch job information
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

// Programmer class definition inheriting from Person
class Programmer extends Person {
  // Constructor for Programmer class
  constructor(name, job, age, languages) {
    // Call the constructor of the parent class (Person) with super()
    super(name, job, age);
    // Additional property specific to Programmer
    this.languages = languages; // Languages property
    this.busy = true; // Default value for busy property
  }

  // Method to mark task as completed
  completeTask() {
    this.busy = false;
  }

  // Method to mark accepting new task
  acceptNewTask() {
    this.busy = true;
  }

  // Method to offer new task based on busy status
  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  }

  // Method to learn a new programming language
  learnLanguage(language) {
    this.languages.push(language);
  }

  // Method to list all languages known by the programmer
  listLanguages() {
    console.log(`${this.name} knows: ${this.languages.join(", ")}`);
  }
}

// Creating instances of Person and Programmer
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

// Testing methods
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

c1.listLanguages();
c2.listLanguages();
c3.listLanguages();

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();