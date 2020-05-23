import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  impact:string[]=['High','Medium'];
  mytime:String;
  firstname:String;
  email:String;
  lastname:String;
  shouldopen:boolean=false;
  



  ngOnInit(): void {
    
  }
  constructor(private router:Router) { }
  onSubmit(form:any){
    this.router.navigateByUrl('/result');
    console.log("Values",form);
  }

  onOpenChild():boolean{
    return this.shouldopen = true;
  }

}
