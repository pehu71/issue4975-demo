import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locale = 'cs';
  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private localeService: BsLocaleService) {
    this.localeService.use(this.locale);
    this.filterForm = this.fb.group({
      dateFrom: new Date(),
      dateTo: null
    });
  }

}
