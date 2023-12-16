import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaTarefas } from '../Models/lista-tarefas';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  baseUrl: string = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  public ObterListaTarefas(usuarioId: number): Observable<ListaTarefas[]> {
    const requestOptions = this.ObterRequestOptions(usuarioId);
    return this.httpService.get<ListaTarefas[]>(`${this.baseUrl}ListaTarefas`, requestOptions)
      .pipe(
        tap(_ => console.log('Successfully fetched ListaTarefas')),
       // catchError(this.handleError<ListaTarefas[]>('ObterListaTarefas', []))
      );
  }
    public CriarTarefa(body: any, usuarioId: number): Observable<void>{
      const requestOptions = this.ObterRequestOptions(usuarioId);
      return this.httpService.post<void>(`${this.baseUrl}ListaTarefas`, body ,requestOptions)
      .pipe(
        tap(_ => console.log('Successfully fetched ListaTarefas')),
       // catchError(this.handleError<ListaTarefas[]>('ObterListaTarefas', []))
      );
    }
     private ObterRequestOptions(usuarioId: number) {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('UsuarioId', usuarioId.toString());

    const requestOptions = {
      headers: httpHeaders,
    };

    return requestOptions;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
