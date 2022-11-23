import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.container.html',
  styleUrls: ['./create-order.container.scss']
})
export class CreateOrderContainer {
  orderForm: FormGroup;
  result;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    this.orderForm = this.formBuilder.group({
      //Add form elements
    });
  }

  addMachine() {
    //Implement
  }

  submit() {
    //Implement ( assign form value to 'result' class variable)
  }
}