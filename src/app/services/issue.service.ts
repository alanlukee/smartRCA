import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private baseUrl = 'http://localhost:8080/issues';

  constructor(private http: HttpClient) {}

  searchIssues(filters: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/search`, filters);
  }
}