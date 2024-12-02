import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { RoomFeature, RoomFeatureRegisterDTO } from '../models/room-feature.model';

@Injectable({
  providedIn: 'root'
})
export class RoomFeatureService {

  private apiUrl = `${environment.apiBaseUrl}/rooms/features`

  constructor(private client: HttpClient) { }

  getRoomFeatures(): Observable<RoomFeature[]> {
    return this.client.get<RoomFeature[]>(`${this.apiUrl}/all`)
      .pipe(catchError(this.handleError));
  }

  saveRoomFeature(roomFeatureRegisterDTO: RoomFeatureRegisterDTO): Observable<RoomFeature> {
    return this.client.post<RoomFeature>(`${this.apiUrl}/create`, roomFeatureRegisterDTO)
      .pipe(catchError(this.handleError));
  }

  updateRoomFeature(id: number, roomFeatureRegisterDTO: RoomFeatureRegisterDTO): Observable<RoomFeatureRegisterDTO> {
    return this.client.put<RoomFeatureRegisterDTO>(`${this.apiUrl}/delete/${id}`, roomFeatureRegisterDTO)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError( ()=> new Error('Unable to fetch data. Please try again.'))
  }

}