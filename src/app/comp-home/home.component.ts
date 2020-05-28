import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function sayHello(person: string): string {
  return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

/*Create an interface called EmployeeOptions (PersonOptions if you didn't rename to Employee) where the name values are required but the other parameters are optional. Create a method in the class that takes an option parameter and returns an Employee (Person) based on the options given. */
interface EmployeeOption{
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber: string;
  city?: string;
  state?: string;
  zipcode?: number;
  occupation: string;
  payRate?: number
  
}
/*class called Person in the ﬁle below the getElementById() method . Give it the properties of ﬁrst name, last name, age, phone number, state, zip code, and occupation. Create a constructor to initialize these properties. Also create several method to return combinations of interest, such as Full name, Name and Phone Number, Location, etc. */

class person implements EmployeeOption{
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  city: string;
  state: string;
  zipcode: number;
  occupation: string;
  payRate: number;
  certifications: string[] = [];

  constructor(firstName: string, lastName: string, age: number, phoneNumber: string, city: string, state: string, zipcode: number, occupation: string, payRate: number){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.phoneNumber = phoneNumber;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode;
      this.occupation = occupation;
      this.payRate = payRate;
  }

  fullName(): string{
      return this.firstName + " " + this.lastName;
  }
  nameNumber(): string{
      return this.fullName + " " + this.phoneNumber;
  }
  jobLocation(): string{
      return this.occupation + " in " + this.state;
  }
  jobTitle(): string{
      return this.firstName + " is a " + this.occupation;
  }
  calcWeeklyCheck(workWeek: number = 40): number{
      return this.payRate * workWeek;
  }
  file(): string{
      return this.fullName + "\n Age: " + this.age + "\n Contact Number: " + this.phoneNumber + "\n Location: " + this.city + ", " + this.state + " " + this.zipcode;
  }
  appendCert(...certifications: string[]){
      this.certifications.push(...certifications);
      return "List of credentials: " + this.certifications;
  }

  let person1 = new person("Pernell", "Grant", 29, "704-704-7047", "huntersville", "NC", 28078, "web dev", 35000);

  var person2 = new person("James", "Smith", 33, "704-704-7046", "charlotte", "NC", 28269, "Hacker", 15);

  var person3 = new person("Samantha", "McRandom", 136, "704-704-7045", "matthews", "NC", 28105, "ghost", 0);

  document.getElementById("Grant").innerHTML = person1.file();
  document.getElementById("Smith").innerHTML = person2.file(); 
  document.getElementById("McRandom").innerHTML = person3.file();
  document.getElementById("creds").innerHTML = person1.appendCert("BA", "MA");

  
/*class called Person in the ﬁle below the getElementById() method . Give it the properties of ﬁrst name, last name, age, phone number, state, zip code, and occupation. Create a constructor to initialize these properties. Also create several method to return combinations of interest, such as Full name, Name and Phone Number, Location, etc. */

