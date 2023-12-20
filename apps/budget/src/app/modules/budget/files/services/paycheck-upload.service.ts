import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaycheckUploadService {

  constructor(private http: HttpClient) { }

  upload(files: File[]) {
console.log("upload service")
    return this.http.post<string>("", files);
  } 
}
