import { Component } from '@angular/core';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent {

  rooms: Room[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private service: RoomService){}

  ngOnInit() {
    this.loadRooms()
  }

  loadRooms() {
    this.service.getRooms().subscribe((data)=> {
      this.rooms = data._embedded.roomList;
    })
  }

  nextPage() {
    this.currentPage ++;
    this.loadRooms();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage --;
    }
    this.loadRooms();
  }

}
