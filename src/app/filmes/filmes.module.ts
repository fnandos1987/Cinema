import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilmesRoutingModule } from './filmes-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { EditaComponent } from './edita/edita.component';

@NgModule({
  imports: [
    CommonModule,
    FilmesRoutingModule,
    FormsModule
  ],
  declarations: [CrudComponent, ListaComponent, EditaComponent]
})
export class FilmesModule { }
