import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoomFeaturesListComponent } from './components/room-features-list/room-features-list.component';
import { RoomFeaturesFormComponent } from './components/room-features-form/room-features-form.component';

@NgModule({
  declarations: [
    RoomListComponent,
    RoomDetailsComponent,
    RoomFormComponent,
    RoomFeaturesListComponent,
    RoomFeaturesFormComponent
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
