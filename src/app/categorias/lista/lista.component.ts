import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private categoriasService: CategoriasService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.items = this.categoriasService.list().snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }

  excluir(id) {
    this.categoriasService.remove(id);
  }

  alterar(id) {
    this.router.navigate(['edita', id], { relativeTo: this.route });

  }

  novo() {
    this.router.navigate(['edita', 'novo'], { relativeTo: this.route });

  }

}
