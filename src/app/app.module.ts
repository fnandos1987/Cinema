import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriasModule } from './categorias/categorias.module';
import { FilmesModule } from './filmes/filmes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

const config = {
  apiKey: 'AIzaSyC5SUwZik-O3myek9dRnvxJos3KahwWN88',
  authDomain: 'fernando-aula.firebaseapp.com',
  databaseURL: 'https://fernando-aula.firebaseio.com',
  projectId: 'fernando-aula',
  storageBucket: 'fernando-aula.appspot.com',
  messagingSenderId: '448147158792'
};

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    CategoriasModule,
    FilmesModule,
    AppRoutingModule,

    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
