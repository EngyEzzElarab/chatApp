import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Output() public messageText=new EventEmitter();
  @Input() public personName:string;
  public inputText:string;
  
  constructor() { }

  ngOnInit(): void {
  }
  public sendMessage()
  {
      this.messageText.emit(this.personName+" says"+this.inputText);
  }
}
