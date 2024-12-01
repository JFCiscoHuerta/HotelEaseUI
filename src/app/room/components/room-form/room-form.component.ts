import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { RoomRegisterDTO } from '../../models/room.model';
import { RoomState } from '../../models/room-state.enum';
import { RoomType } from '../../models/room-type.enum';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent {

  room: RoomRegisterDTO = {
    roomNumber: 0,
    priceByNight: 0,
    roomState: "",
    roomType: "",
    roomImages: [],
    roomFeatureIds: []
  }

  roomStates = Object.values(RoomState);
  roomTypes = Object.values(RoomType);

  constructor(private service: RoomService) {}

  saveRoom(): void {
    this.service.saveRoom(this.room).subscribe({
      next: (savedRoom) => {
        alert('Room saved successfully');
      },
      error: (error) => {
        console.error(error)
        alert('Failed to save the room. Please try again.')
      }
    })
  }
}
