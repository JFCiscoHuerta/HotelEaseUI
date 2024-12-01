import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Room, RoomRegisterDTO } from '../models/room.model';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = `${environment.apiBaseUrl}/rooms`;

  constructor(private client: HttpClient) { }

  /**
   * Fetches the list of rooms.
   * @returns An observable of the array of Room objects.
   */
  getRooms(): Observable<any> {      
    return this.client.get<any>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }
  /**
   * Fetches the details of a single room by ID.
   * @param id The ID of the room.
   * @returns An observable of the Room object.
   */
  getRoomDetails(id: number): Observable<any> {
    return this.client.get<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Sends a POST request to save a new room.
   * @param roomRegisterDTO The Room object to be saved.
   * @returns An observable of the saved Room object.
   */
  saveRoom(roomRegisterDTO: RoomRegisterDTO): Observable<Room> {
    return this.client.post<Room>(`${this.apiUrl}/create`, roomRegisterDTO)
      .pipe(catchError(this.handleError));
  }

  /**
   * Sends a PUT request to update a room by its id.
   * @param roomRegisterDTO The Room object to be updated .
   * @param id The id from the Room to be updated.
   * @returns An observable of the updated Room object.
   */
  updateRoom(roomRegisterDTO: RoomRegisterDTO, id: number): Observable<Room> {
    return this.client.put<Room>(`${this.apiUrl}/update/${id}`, roomRegisterDTO)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`Error fetching data: ${error.message}`);
    return throwError( () => new Error('Unable to fetch data. Please try again later.') )
  }
}
