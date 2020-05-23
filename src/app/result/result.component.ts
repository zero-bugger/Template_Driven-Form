import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',

})
export class ResultComponent implements OnInit {

 @Input() public first_name;
 @Input() public last_name;
 @Input() public email_id;


  ngOnInit(): void {
  }

}
