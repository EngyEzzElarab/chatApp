import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() public usersArr:string;
  public arrOfMessages: string[]=[];
  public msgText:string;
  public selectedUser:string='';

  constructor() { }

  ngOnInit(): void {
  }
  public sendMessage()
  {
    this.arrOfMessages.push( this.selectedUser+": "+this.msgText);
     this.msgText="";
     this.selectedUser="";
  }
}
