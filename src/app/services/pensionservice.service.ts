import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensionService {
  private baseUrl = environment.apiUrl;
  private baseUrlPersonal = environment.personalApiUrl;

  constructor(private http: HttpClient) { }

  getAllPension(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}pension/getAll`);
  }

  savePension(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestBody = data;
    const url = `${this.baseUrl}pension/add`;
    return this.http.post<any>(url, requestBody, { headers });
  }
  getEmpDetails(id: number): Observable<any> {
    debugger
    const url = `${this.baseUrlPersonal}getCommonDetails`;
    const requestBody = { empId: id };
    return this.http.post<any>(url, requestBody);


  }

}
