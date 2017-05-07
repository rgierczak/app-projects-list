import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { Project } from '../../interfaces/project';
import { ProjectsService } from '../../services/projects.service';
import { itemStateTrigger, markedTrigger } from './animations';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        markedTrigger,
        itemStateTrigger
    ]
})
export class ProjectsComponent implements OnInit {
    projects: Project[];
    displayProjects: Project[] = [];
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

                    if (this.projects.length >= 1) {
                        this.displayProjects.push(this.projects[0]);
                    }
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
        this.projects.unshift(project);
    }

    onItemAnimated(event: AnimationEvent, lastProjectId: number) {
        if (event.fromState != 'void') {
            return;
        }

        if (this.projects.length > lastProjectId + 1) {
            this.displayProjects.push(this.projects[lastProjectId + 1])
        } else {
            this.projects = this.displayProjects;
        }
    }
}

