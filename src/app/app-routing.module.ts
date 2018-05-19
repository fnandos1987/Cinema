import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent as CategoriasComponent } from './categorias/crud/crud.component';
import { CrudComponent as FilmesComponent } from './filmes/crud/crud.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  },
  { path: '**', component: PrincipalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
