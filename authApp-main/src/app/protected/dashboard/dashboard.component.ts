import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  private baseUrl: string = environment.baseUrl;
  ngOnInit(): void {
  }

  
  getProducts(){
    let token = JSON.parse(<string>localStorage.getItem('jwt'))
    .access_token;
    
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }
    let url = `${this.baseUrl}/products`;
    this.httpClient.get(url)
    .subscribe(resp => console.log(resp))

    
  }

}
