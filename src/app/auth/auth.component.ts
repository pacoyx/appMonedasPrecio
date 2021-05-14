import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { loaded, loading } from '../shared/ui.actions';
import { setLogin } from './auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  loading = false;
  subsLoading: Subscription;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });

    this.subsLoading = this.store.select('ui').subscribe(({ estadoui }) => {
      this.loading = estadoui;
    });

  }

  ngOnDestroy() {
    this.subsLoading.unsubscribe();
  }

  loguearme() {

    console.log('click');
    console.log(this.formLogin.value);
    this.store.dispatch(loading());

    if (this.formLogin.get('usuario').value === 'admin' && this.formLogin.get('clave').value === 'admin') {


      setTimeout(() => {
        this.store.dispatch(setLogin({ user: this.formLogin.value }));
        this.store.dispatch(loaded());
      }, 3000);

    } else {
      this.store.dispatch(loaded());
    }


  }
}
