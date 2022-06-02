import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CargoEnum, Cargos} from "../../../models/cargoEnum";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  teste = 'asdfsdfasd';
  formCadastro: FormGroup;
  cargos = Cargos.todos();

  constructor(private fb:FormBuilder) {

    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      telefone: [''],
      email: ['', [Validators.required, Validators.email]],
      cargo: [''],
      salario: ['']
    })

    console.log(this.cargos)
  }

  ngOnInit(): void {

  }

  salvar() {
    if (!this.formCadastro.valid) {
      this.formCadastro.markAllAsTouched();
      return;
    }

    console.log(this.formCadastro.value);
  }

  getErrorMessage() {
    const formControl = this.formCadastro.get('email');
    if (!formControl){
      return;
    }
    if (formControl.hasError('required')) {
      return 'O email é obrigatório';
    }

    return formControl.hasError('email') ? 'O email não é válido' : '';
  }
}
