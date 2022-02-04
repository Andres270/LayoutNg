import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { ProductosComponent } from './productos/productos.component';
import { MarcaComponent } from './marca/marca.component';
import { NosotrosComponent} from './nosotros/nosotros.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { 
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'marcas',
    component: MarcaComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
