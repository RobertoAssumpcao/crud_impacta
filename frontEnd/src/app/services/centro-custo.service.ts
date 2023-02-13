import { CentroCusto } from './../interface/centroCusto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentroCustoService {

  private readonly API = 'https://localhost:7232/api/CentroCusto'

  constructor(private http: HttpClient) { }

  listar(): Observable<CentroCusto[]> {
    return this.http.get<CentroCusto[]>(this.API)
  }

  criar(centroCusto: CentroCusto): Observable<CentroCusto> {
    return this.http.post<CentroCusto>(this.API, centroCusto)
  }

  excluir(id: number): Observable<CentroCusto>{
    const url = `${this.API}/delete/${id}`
    return this.http.delete<CentroCusto>(url)
  }

  buscarPorId(id: number): Observable<CentroCusto> {
    const url = `${this.API}/buscarPorId/${id}`
    return this.http.get<CentroCusto>(url)
  }

}
