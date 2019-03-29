import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApikpokemonService {

  constructor(private http:HttpClient) {

  }

  getPokemons() {
    return this.http.get('http://localhost:3000/api/pokemon');
  }

}
