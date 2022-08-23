interface Person {
  name: string;
  age: number;
  greet: (pharse: string) => string;
}

let user1: Person;

user1 = {
  name: "Naruto",
  age: 26,
  greet(pharse) {
    return `${this.name} ${this.age} ${pharse}`;
  },
};

console.log(user1.greet("Hai"));

// interface with class

interface Ninja {
  name: string;
  age: number;
  skill: string[];
  readonly hometown: string;
  addSkill: (...skill: string[]) => void;
  describe: () => string;
}

class Naruto implements Ninja {
  skill: string[] = [];

  hometown = "Konoha";

  constructor(public name: string, public age: number) {}

  addSkill(...skill: string[]) {
    this.skill.push(...skill);
  }

  describe() {
    return `${this.name} ${this.age} ${this.skill.join(", ")} ${this.hometown}`;
  }
}

const naruto: Ninja = new Naruto("Naruto Uzumaki", 26);

naruto.addSkill("Rasanggan", "Kagebunsin", "Kyubi");

console.log(naruto.describe());

// inheritance in interface

interface BaseSkill {
  readonly skill: string[];
}

interface Sasuke extends BaseSkill {}

const sasuke: Sasuke = {
  skill: ["Cidori", "Genjutsu"],
};

console.log(sasuke);

// interface as function types

interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;

// optional params and properties
interface OptionalProperties {
  readonly name: string;
  wife?: string; // optional
}

const optionalProps = {
  name: "Naruto",
}; // no error event with no initial wife
