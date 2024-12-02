import { Component } from '@angular/core';
import { RoomFeature, RoomFeatureRegisterDTO } from '../../models/room-feature.model';
import { RoomFeatureService } from '../../services/room-feature.service';

@Component({
  selector: 'app-room-features-form',
  templateUrl: './room-features-form.component.html',
  styleUrls: ['./room-features-form.component.css']
})
export class RoomFeaturesFormComponent {
  roomFeature: RoomFeatureRegisterDTO = {
    serviceName: '',
    servicePrice: 0
  }
 
  constructor(private service: RoomFeatureService) {}

  saveRoomFeature(): void {
    this.service.saveRoomFeature(this.roomFeature).subscribe({
      next: (savedRoomFeature) => {
        alert('Room feature saved successfully');
      },
      error: (error) => {
        alert('Failed to save the room feature. Please try againt.');
      }
    })

  }

}
