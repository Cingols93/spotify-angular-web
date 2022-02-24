import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/common/global-constants';
import { LOGIN_URL, TOKEN_URL } from 'src/common/spotify';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
  host: { class: "flex-grow" }
})
export class CenterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let code = urlParams.get('code');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: "Basic " + btoa(GlobalConstants.PUBLIC_CLIENT_ID + ":" + GlobalConstants.SECRET_CLIENT_ID)
      })
    };

    const body = new HttpParams()
      .set('code', code ? code : "")
      .set('redirect_uri', GlobalConstants.REDIRECT_URI)
      .set('client_id', GlobalConstants.PUBLIC_CLIENT_ID)
      .set('client_secret', GlobalConstants.SECRET_CLIENT_ID)
      .set('grant_type', 'authorization_code');

    this.http.post(TOKEN_URL, body, httpOptions).subscribe(res => console.log(res))
  }

  login() {
    window.location.href = LOGIN_URL
  }

}