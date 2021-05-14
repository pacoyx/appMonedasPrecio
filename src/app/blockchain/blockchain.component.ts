import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loaded, loading } from '../shared/ui.actions';
import { Blockchain } from './blockchain.model';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  angForm: FormGroup;
  title = 'blockChain';
  constructor(private store: Store<AppState>,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  addCoin(name, price) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: {
        name,
        price
      } as Blockchain
    });
  }

  ngOnInit(): void {
  }

  entrar() {
    this.store.dispatch(loading());

    setTimeout(() => {
      this.store.dispatch(loaded());
    }, 5000);
    
  }

}
