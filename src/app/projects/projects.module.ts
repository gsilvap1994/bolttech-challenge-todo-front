import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { HomeComponent } from './home/home.component';
import { HandleProjectsComponent } from './handle-projects.component';
import { SharedModule } from '../shared/shared.module';
import { CreateProjectFormComponent } from './components/create-project-form/create-project-form.component';

@NgModule({
  declarations: [HomeComponent, HandleProjectsComponent, CreateProjectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
