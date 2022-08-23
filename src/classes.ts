// Code goes here!

class Departement {
  private employees: string[];

  // shorthand properties
  constructor(private readonly id: number, public name: string) {
    this.employees = [];
  }

  // method
  describe(this: Departement) {
    console.log(`"Departmenet id ${this.id} " ${this.name}`);
  }

  adEmployee(newEmployee: string) {
    this.employees.push(newEmployee);
  }

  printEmplyees() {
    console.log(this.employees);
  }
}

// inheritance
class ITDepartement extends Departement {
  constructor(id: number, public admins: string[]) {
    super(id, "IT Departement");
  }
}

class AccountingDepartement extends Departement {
  constructor(public reports: string[]) {
    super(1, "Acounting");
  }
}

const account = new Departement(1, "Accounting");

account.describe();

account.adEmployee("Hamdan");
account.adEmployee("Hanafi");

account.printEmplyees();

const it = new ITDepartement(1, ["Naruto", "Uzumaki"]);
const accounting = new AccountingDepartement(["Sasuke", "Uciha"]);

// protected visbility (modifier)
class ProtectedProperties {
  constructor(protected data: string[]) {}
}

class ProtectedPropertieChild extends ProtectedProperties {
  constructor() {
    super(["Naruto", "Sasuke", "Sakura"]);
  }

  addData(newData: string) {
    this.data.push(newData);
  }
}

// getter and setter

class GetterSetterProps {
  private myName: string = "";

  constructor() {}

  set name(name: string) {
    this.myName = name;
  }

  get name() {
    return this.myName;
  }
}

const getterSetters = new GetterSetterProps();

getterSetters.name = "Naruto Uzukami";

console.log(getterSetters.name);

// static method

class StaticMethod {
  static getInstance() {
    return new this();
  }

  getStatus() {
    return "Its Works";
  }
}

const staticObject = StaticMethod.getInstance();

staticObject.getStatus();

// abstrac class

abstract class AbstractParent {
  constructor() {}

  abstract getName(name: string): string;
}

class AbstractChild extends AbstractParent {
  // is required for define method getName
  getName(name: string): string {
    return name;
  }
}

// singleton pattern
class SingletonClass {
  private static instance: SingletonClass;

  private constructor(private data: string[]) {}

  static getInstance(): SingletonClass {
    if (!this.instance) {
      this.instance = new this(["Naruto", "Uzumaki"]);
    }

    return this.instance;
  }

  getData() {
    return this.data;
  }
}

const singleton = SingletonClass.getInstance();

singleton.getData();

// interfaces
