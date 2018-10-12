import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as _ from 'lodash';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { AddOrUpdateComponent } from './add-or-update/add-or-update.component';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { WorkoutService } from './workout.service';

const appRoutes: Routes = [{path:'',component: HomeComponent}];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridComponent,
    AddOrUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent],


})
export class AppModule { }
