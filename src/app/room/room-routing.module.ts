import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomFormComponent } from './components/room-form/room-form.component';

const routes: Routes = [
  {
    path: 'create',
    component: RoomFormComponent
  },
  {
    path: 'update/:id',
    component: RoomFormComponent
  },
  {
    path: ':id',
    component: RoomDetailsComponent
  },
  {
    path: '',
    component: RoomListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
