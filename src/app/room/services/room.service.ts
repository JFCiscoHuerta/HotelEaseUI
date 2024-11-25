import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = `${environment.apiBaseUrl}/rooms`;

  constructor(private client: HttpClient) { }

  getRooms(): Observable<any> {      
    return this.client.get<any>(this.apiUrl)
  }
}
