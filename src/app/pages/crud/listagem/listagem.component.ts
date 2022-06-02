import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, ReplaySubject, Subscription} from "rxjs";
import {DataSource} from "@angular/cdk/collections";
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {PessoaService} from "../../../services/pessoa.service";

export interface PeriodicElement {
  nome: string;
  email: string;
  cargo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 'Lace', email: 'email@ex.com', cargo: 'Professor'},
  {nome: 'Malxalo', email: 'email@ex.com', cargo: 'Professor'},
  {nome: 'Peufoelas', email: 'email@ex.com', cargo: 'Professor'},
  {nome: 'Pamuen', email: 'email@ex.com', cargo: 'Professor'},
  {nome: 'Aranrod', email: 'email@ex.com', cargo: 'Diretor'},
  {nome: 'Zomau', email: 'email@ex.com', cargo: 'Substituto'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-listagem',
  styleUrls: ['listagem.component.scss'],
  templateUrl: 'listagem.component.html',
})
export class ListagemComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = ['nome', 'email', 'cargo'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  sub: Subscription | undefined;

  constructor(
    private pessoaSevice: PessoaService,
    private router: Router) {
  }

  ngOnDestroy() {
    if (this.sub){
      this.sub.unsubscribe()
    }
  }

  ngOnInit() {
    this.sub = this.pessoaSevice.aoSalvar.subscribe(value => {
      if(value){
        this.dataSource.setData([value, ...this.dataToDisplay]);
      }
      console.log(value);
    })
  }

  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    // this.dataSource.setData(this.dataToDisplay);

    this.router.navigateByUrl('/crud/cadastro');
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {
  }

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
