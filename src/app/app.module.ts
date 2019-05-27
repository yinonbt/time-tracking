import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store-entities/reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './store-entities/effects/task.effects';
import { MsToTimePipe } from './pipes/ms-to-time.pipe';
import { SecToTimePipe } from './pipes/sec-to-time.pipe';

@NgModule({
  declarations: [AppComponent, TasksListComponent, SingleTaskComponent, MsToTimePipe, SecToTimePipe],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([TaskEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
