import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  formTeste: FormGroup;

  constructor(private fb:FormBuilder) {
    this.formTeste = this.fb.group({
      nome: ['', Validators.required],
      observacao: ['']
    })
  }

  ngOnInit(): void {

  }

  salvar() {
    if (!this.formTeste.valid) {
      this.formTeste.markAllAsTouched();
      return;
    }

      const nome = this.formTeste.value.nome;
      const observacao = this.formTeste.value.observacao;
      console.log(nome);
  }

}
