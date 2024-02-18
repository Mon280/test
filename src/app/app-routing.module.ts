import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FichaTecnicaComponent } from './home/ficha-tecnica/ficha-tecnica.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ficha-tecnica/:id', component: FichaTecnicaComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
