import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    
  }

  @Input()
  selectedValue:string;

  @Input()
  txt:string="hi";

  @Output()
  customevent=new EventEmitter();


  onChange(){
     // this.selectedValue=this.selectedValue;
      this.customevent.emit({gender:this.selectedValue,txt:this.txt})
      console.log('Dropdo'+ this.selectedValue);
  }

  
 ddvalues=[
   {id:'All',name:'All'},
   {id:'Male',name:'Male'},
   {id:'Female',name:'Female'}];   
 

}
