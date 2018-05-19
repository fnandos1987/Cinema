import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CrudComponent } from './crud/crud.component';
import { EditaComponent } from './edita/edita.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    FormsModule
  ],
  declarations: [CrudComponent, EditaComponent, ListaComponent]
})
export class CategoriasModule { }
