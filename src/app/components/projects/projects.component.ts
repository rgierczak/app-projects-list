import { Component, OnInit } from '@angular/core';

import { Project } from '../../interfaces/project';
import { ProjectsService } from '../../services/projects.service';
import { markedTrigger } from './animations';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        markedTrigger
    ]
})
export class ProjectsComponent implements OnInit {
    projects: Project[];
    markedProjectIndex = 0;
    progress = 'progressing';
    createNew = false;

    constructor(private projectsService: ProjectsService) {}

    ngOnInit() {
        this.projectsService.loadProjects()
            .subscribe(
                (projects: Project[]) => {
                    this.progress = 'finished';
                    this.projects = projects;
                }
            );
    }

    onStatusUpdated(newStatus: string, id: number) {
        this.projects[id].status = newStatus;
    }

    onProjectDeleted(index: number) {
        this.projects.splice(index, 1);
    }

    onProjectCreated(project: Project) {
        this.createNew = false;
        this.projects.push(project);
    }
}

