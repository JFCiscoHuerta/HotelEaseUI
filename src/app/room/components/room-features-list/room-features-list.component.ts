import { Component } from '@angular/core';
import { RoomFeature } from '../../models/room-feature.model';
import { RoomFeatureService } from '../../services/room-feature.service';

@Component({
  selector: 'app-room-features-list',
  templateUrl: './room-features-list.component.html',
  styleUrls: ['./room-features-list.component.css']
})
export class RoomFeaturesListComponent {

  roomFeatures: RoomFeature[] = [];

  constructor(private service: RoomFeatureService) {}

  ngOnInit() {
    this.loadRoomFeatures();
  }

  loadRoomFeatures() {
    this.service.getRoomFeatures().subscribe( (data) => {
      this.roomFeatures = data
    });
  }

}
