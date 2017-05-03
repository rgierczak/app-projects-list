import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';
import { ProjectComponent } from './components/project/project.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectsService } from './services/projects.service';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        ProjectComponent,
        NewProjectComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
