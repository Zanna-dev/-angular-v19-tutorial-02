import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { json } from 'node:stream/consumers';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit {
  // firstName: string = '';
  // lastName: string = '';
  userObject : User = {};

  onSubmit(userForm:NgForm) {
    // console.log(userForm);
    console.log(userForm.value);
  }

  ngOnInit(): void {
    // this.userObject = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'john@example.com',
    //   pass: '123456',
    //   isCheck: true
    // };
  }

  setValues(userForm:NgForm) {
    let obj = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      pass: '123456',
      isCheck: true
    }
    userForm.setValue(obj);
  }

  patchValues(userForm:NgForm) {
    let obj = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      // pass: '123456',
      // isCheck: true
    }
    userForm.control.patchValue(obj);
  }

  resetValues(userForm:NgForm) {
    // userForm.reset();
    userForm.resetForm();
  }
}
