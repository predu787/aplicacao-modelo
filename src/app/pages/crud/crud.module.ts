import {NgModule} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ActivatedRouteSnapshot, RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {ListagemComponent} from "./listagem/listagem.component";
import {MatTableModule} from "@angular/material/table";
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  { path: '', redirectTo: '/crud/listagem', pathMatch: 'full' },
  {
    path: 'listagem',
    component: ListagemComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }

]
@NgModule({
  declarations: [
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,

  ],
  providers: []
})
export class CrudModule { }
