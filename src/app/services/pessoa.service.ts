import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PessoaService{
  public aoSalvar: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
