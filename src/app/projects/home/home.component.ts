import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: { id: string, name: string }[];
  constructor(private projectsService: ProjectsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects: { id: string, name: string }[]) => {
      this.projects = projects;
    })
  }


  createProject(projectName: string): void {
    this.projectsService.createProject(projectName).subscribe(() => {
      this.projectsService.getProjects().subscribe((projects: { id: string, name: string }[]) => {
        this.projects = projects;
        this.toastr.success('Project successfully created!');
      })
    })
  }

}
