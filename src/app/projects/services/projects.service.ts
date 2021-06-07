import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private API_URL = `${environment.apiUrl}/projects`
  constructor(private http: HttpClient) { }

  public createProject(name: string): Observable<any> {
    return this.http.post(`${this.API_URL}/create`, name);
  }

  public getProjects(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
