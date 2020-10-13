import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-cancellation',
  templateUrl: './order-cancellation.component.html',
  styleUrls: ['./order-cancellation.component.css']
})
export class OrderCancellationComponent implements OnInit {

  form: FormGroup;
  price = 5000;
  items = 1;
  delivery = 50;
  total = 5200;
  tax = 150;

  reasons = new FormControl();
  reasonList: string[] = ['reason1', 'reason2', 'reason3', 'reason4'];
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      reason: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, [Validators.required])
    });
    console.log(this.form);
  }

  onSubmit(): void{
    console.log(this.form);
  }

}
