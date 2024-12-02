import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { RoomRegisterDTO } from '../../models/room.model';
import { RoomState } from '../../models/room-state.enum';
import { RoomType } from '../../models/room-type.enum';
import { RoomFeatureService } from '../../services/room-feature.service';
import { RoomFeature } from '../../models/room-feature.model';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent {

  constructor(private roomService: RoomService, private roomFeatureService: RoomFeatureService) {}

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
  roomFeatures: RoomFeature[] = [];

  ngOnInit() {
    this.roomFeatureService.getRoomFeatures().subscribe( (data) => {
      this.roomFeatures = data
    });
  }

  saveRoom(): void {
    this.roomService.saveRoom(this.room).subscribe({
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
