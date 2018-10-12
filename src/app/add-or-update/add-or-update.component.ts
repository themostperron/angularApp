import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css']
})
export class AddOrUpdateComponent implements OnInit {
  @Output() Created = new EventEmitter<any>();
  @Input() Info: any;
  
  public buttonText = 'Save';

  constructor() { 
    this.clearInfo();
    console.log(this.Info);

  }

  ngOnInit() {
  }

  private clearInfo = function() {
    // Create an empty jogging object
    this.Info = {
      id: undefined,
      name: '',
    };
  };
  
  public addOrUpdateRecord = function(event) {
    this.Created.emit(this.Info);
    this.clearInfo();
  };
  

}

