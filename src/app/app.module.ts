import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { addCoinReducer } from './blockchain/blockchain.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';
import { authReducer } from './auth/auth.reducer';
import { uiReducer } from './shared/ui.reducer';
import { RickandmortylistComponent } from './rickandmortylist/rickandmortylist.component';
import { personajesReducer } from './rickandmortylist/rick.reducer';
import { PersonajesEffects } from './rickandmortylist/rick.effects';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent,
    AuthComponent,
    RickandmortylistComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      blockchain: addCoinReducer,
      auth: authReducer,
      ui: uiReducer,
      personajesRick: personajesReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([PersonajesEffects]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
