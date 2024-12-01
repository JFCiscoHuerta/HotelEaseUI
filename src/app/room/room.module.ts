import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ]
})
export class RoomModule { }
