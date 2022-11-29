import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; // Add this line
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosContainerComponent } from './components/todos-container/todos-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosContainerComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
