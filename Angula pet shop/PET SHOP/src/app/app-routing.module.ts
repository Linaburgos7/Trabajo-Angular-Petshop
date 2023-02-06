import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"Productos", component:ProductosComponent},
  {path: '404', component:NotFoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
