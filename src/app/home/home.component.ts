import { Component, OnInit } from '@angular/core';
import {WorkoutService} from '../workout.service';
import * as _ from 'lodash';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Data: Array<any>;
  public current: any;
  
  constructor(private workoutService: WorkoutService) {
    workoutService.get().subscribe((data:any)=>{
    console.log(data);    
    this.Data = data;});
    this.current = this.setInitialValuesForData();
   }
  
   private setInitialValuesForData () {
    return {
      id: undefined,
      name: ''
    }
    
  }


  public createOrUpdate = function(dato: any) {
    // if jogging is present in joggingData, we can assume this is an update
    // otherwise it is adding a new element
    let WithId;
    WithId = _.find(this.Data, (el => el.id === dato.id));

    if (WithId) {
      const updateIndex = _.findIndex(this.Data, {id: WithId.id});
      this.workoutService.update(dato).subscribe(
        Record =>  this.Data.splice(updateIndex, 1, dato)
      );
    } else {
      this.workoutService.add(dato).subscribe(
        Record => this.Data.push(dato)
      );
    }

    this.current = this.setInitialValuesForData();
  };

  ngOnInit() {
  }

  public editClicked = function(record) {
    this.current = record;
  };

  public newClicked = function() {
    this.current = this.setInitialValuesForData(); 
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.Data, {id: record.id});
    this.workoutService.remove(record).subscribe(
      result => this.Data.splice(deleteIndex, 1)
    );
  }



}


