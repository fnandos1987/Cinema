#!/bin/bash
ng g module categorias --routing
ng g module filmes --routing
ng generate component categorias/crud
ng generate component filmes/crud

ng generate service categorias/categorias
ng generate component categorias/edita
ng generate component categorias/lista

ng generate service filmes/filmes
ng generate component filmes/lista
ng generate component filmes/edita
