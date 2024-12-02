import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rooms',
    loadChildren: () =>import('./room/room.module').then(m => m.RoomModule)
  },
  {
    path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
