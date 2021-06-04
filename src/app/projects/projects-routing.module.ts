import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandleProjectsComponent } from './handle-projects.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: HandleProjectsComponent, children: [
      {
        path: '', component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
