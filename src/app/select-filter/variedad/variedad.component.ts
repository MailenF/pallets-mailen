import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectedVariedad } from '../../state/selectors/pallets.selector';
import { getVariedad } from '../../state/actions/pallets.action';

@Component({
  selector: 'app-variedad',
  templateUrl: './variedad.component.html',
  styleUrls: ['./variedad.component.css'],
})
export class VariedadComponent implements OnInit {
  variedades$: Observable<string[]> = new Observable();
  variedadFormControl = new FormControl();

  constructor(private store: Store<AppState>) {
    this.variedadFormControl.valueChanges.subscribe((value: string) => {
      return this.store.dispatch(getVariedad({ variedades: value }));
    });
  }

  ngOnInit(): void {
    this.variedades$ = this.store.select(selectedVariedad);
  }
}
