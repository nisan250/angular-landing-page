import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  public form = this.fb.group({
    fullName: ['', [Validators.required]],
    email: [''],
    country: [''],
    bio: [''],
    bioDescription: [''],
    links: [''],
    withPro: [],
    proName: [''],
  });

  @Input() isSubmitted: boolean;
  @Output() isSubmittedChange = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  // closeForm(): void {
  //   this.isFormSubmitted = false;
  //   this.router.navigate(['/home']);
  // }

  isValidInput(fieldName): boolean {
    const control = this.form.get(fieldName);
    return control.invalid && (control.dirty || control.touched);
  }

  onFormSubmit($event: any): void {
    console.warn(this.form.value);
    localStorage.setItem('form-data', JSON.stringify(this.form.value));

    this.isSubmitted = true;
    this.isSubmittedChange.emit(this.isSubmitted);
  }
}
