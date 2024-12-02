import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent{
  room!: Room;
  id!: number;

  constructor(
    private service: RoomService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.loadRoomDetails();
  }

  loadRoomDetails() {
    if(this.id) {
      this.service.getRoomDetails(this.id).subscribe((data) => {
        this.room = data;
      }, (error) => {
        console.error("Error ocurred when loading room details", error);
      });
    } else {
      console.error("ID not found");
    }
  }

}
