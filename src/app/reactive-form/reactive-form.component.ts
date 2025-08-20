import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';


@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.maxLength(15), Validators.email]],
      password: ['', [Validators.required]],
      isChecked: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        pincode: [''],
      }),
      skills : this.fb.array([])
    })

    this.reactiveForm.controls['isChecked'].disable();
  }

  get skills() : FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkill() : FormGroup{
    return this.fb.group({
    skill : '',
    })
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }


  deleteSkill(i : number) {
   this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  setAllValues() {
    this.reactiveForm.setValue({
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      password: 123456,
      isChecked: true,
      address: {
        city: "New York",
        street: "123 Main Street",
        pincode: 123456
      }
    })
     }


  
  setPartialValues() {
    // this.reactiveForm.patchValue({
    //   address: {
    //     city: "New York",
    //     street: "123 Main Street",
    //     pincode: 123456
    //   }
    // })
     this.reactiveForm.controls['firstName'].patchValue("John");

  }

  resetForm() {
    // this.reactiveForm.reset();
     this.reactiveForm.controls['firstName'].reset("John");
  }

}
