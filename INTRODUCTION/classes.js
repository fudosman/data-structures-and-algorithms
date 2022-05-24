// context vs scope
// context is the object that is currently executing the code
// scope is the object that the code is executing in
const object4 = {
  a: function() {
    console.log(this);
  }
};
// object4.a();

class Person {
  constructor(name,type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm a ${this.type}`);
  }
}

console.log(new Person('John', 'teacher'));

// THE SUPER KEYWORD IS USED TO ACCESS THE PARENT CLASS WHILE INHERITING
class Wizard extends Person{
  constructor(name,type){
    super(name,type);
  }
  saySomething(){
    console.log(`${this.name} says hello`);
  }
}

const kachi = new Wizard('KACHI','wizard');
console.log(kachi.saySomething());




