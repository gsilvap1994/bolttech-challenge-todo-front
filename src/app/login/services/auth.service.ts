import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageLayerService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = `${environment.apiUrl}/users`
  constructor(private http: HttpClient, private storage: StorageLayerService) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password });
  }

  public createUser(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/create`, user);
  }

  public getUserInfo(): any {
    return this.storage.get('user');
  }

  public getToken(): any {
    return this.storage.get('token');
  }

  public logOut(): void {
    this.storage.clear();
  }

  public isAuthenticated: boolean = !!this.storage.get('token');
}
