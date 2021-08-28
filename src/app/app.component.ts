import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMaleSelected = false;
  isFemaleSelected = false;
  candidates: Array<any>;
  input: Array<any>;

  firstName = '';
  lastName = '';
  email = '';
  keys = ['id', 'firstName', 'lastName', 'email', 'gender'];

  constructor() {
    this.initializeData();
    this.candidates = this.input;
  }

  updateDataToShow() {
    this.candidates = [];
    let index = 0;
    for (let data of this.input) {
      if (data.gender == 'Male' && this.isMaleSelected) {
        this.candidates[index] = data;
      } else if (data.gender == 'Female' && this.isFemaleSelected) {
        this.candidates[index] = data;
      } else if (!this.isMaleSelected && !this.isFemaleSelected) {
        this.candidates[index] = data;
      }
      index++;
    }
  }

  addCandidate(
    firstName: string,
    lastName: string,
    email: string,
    gender: string
  ) {
    const lastCandidateId = this.input[this.input.length - 1]
      ? this.input[this.input.length - 1].id
      : 1;
    this.input[this.input.length] = {
      id: lastCandidateId + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender
    };
  }

  updateMaleSelection() {
    this.isMaleSelected = !this.isMaleSelected;
    this.updateDataToShow();
  }

  updateFemaleSelection() {
    this.isFemaleSelected = !this.isFemaleSelected;
    this.updateDataToShow();
  }

  initializeData() {
    this.input = [
      {
        id: 1,
        firstName: 'Jeanette',
        lastName: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female'
      },
      {
        id: 2,
        firstName: 'Giavani',
        lastName: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male'
      },
      {
        id: 3,
        firstName: 'Noell',
        lastName: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female'
      },
      {
        id: 4,
        firstName: 'Willard',
        lastName: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male'
      }
    ];
  }

  name = 'Angular ' + VERSION.major;
}
