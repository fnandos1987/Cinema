import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from '../filmes/lista/lista.component';
import { EditaComponent } from '../filmes/edita/edita.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CrudComponent,
    children: [
      { path: '', component: ListaComponent },
      { path: 'edita/:id', component: EditaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
