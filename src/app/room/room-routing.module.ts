import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { RoomFeaturesListComponent } from './components/room-features-list/room-features-list.component';
import { RoomFeaturesFormComponent } from './components/room-features-form/room-features-form.component';

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
    path: 'features',
    component: RoomFeaturesListComponent
  },
  {
    path: 'features/create',
    component: RoomFeaturesFormComponent
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
