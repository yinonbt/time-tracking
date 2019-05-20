import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracking';

  newTaskFormGroup = this.formBuilder.group({
    formControlTitle: [null]
  });
  constructor(private formBuilder: FormBuilder) {}
}
