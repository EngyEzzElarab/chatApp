import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  public userName:string='';
 public groupName:string;
 public users: string[]=[];
 public goToChat:boolean=false;
 
//  @Output() usersList=new EventEmitter();
 @Output() user:any=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public addUser()
  {   
    this.users.push(this.userName);
    
      // this.arrOfMessages.push("");
      // this.personName="";   
      this.user.emit(this.userName);
      this.userName="";
  }
  public formGroup()
  {
      // this.arrOfMessages.push("");
      this.goToChat=!this.goToChat;
      // this.groupName="";   
      this.userName="";
      // this.usersList.emit(this.users);
  }
  

}
