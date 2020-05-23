import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import  { BugReport } from '../model'


import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  impact:string[]=['High','Medium'];
  shouldopen:boolean=false;
  
  
  model = new BugReport('','','','','','','');
  



  ngOnInit(): void {
    
  }
  constructor(  ) { }
  onSubmit(){
    this.shouldopen = true;
  }


}
