import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RoomListComponent,
    RoomDetailsComponent,
    RoomFormComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
  ]
})
export class RoomModule { }
