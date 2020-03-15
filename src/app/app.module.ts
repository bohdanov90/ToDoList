import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddingNewTaskComponent } from './adding-new-task/adding-new-task.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { ToDoListService } from './services/to-do-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddingNewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LocalStorageService,
    ToDoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
