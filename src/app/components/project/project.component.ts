import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../../interfaces/project';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    @Input() project: Project;
    @Output() statusUpdated = new EventEmitter<string>();
    @Output() projectDeleted = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {}

    onUpdateStatus(newStatus: string) {
        this.statusUpdated.emit(newStatus);
    }

    onDelete() {
        this.projectDeleted.emit();
    }
}
