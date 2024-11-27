import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PtoductoComponent } from './components/ptoducto/ptoducto.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    PtoductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
