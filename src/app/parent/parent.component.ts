import { Component,OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  displayedColumns: string[] = ['code','name','gender','salary','dateofbirth'];
 // dataSource= new MatTableDataSource<Iemployee>(employees);
 dataSource = employees;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  ngOnInit() {   
  //this.dataSource.paginator = this.paginator;
  }
  ondropdownchange(eventArgs:any){        
    //  Selecteddropdownvalue= Defaultvalue;      
    }

}
export interface Iemployees {
  code: number;
  name: string;
  gender: string;
  salary: string;
  dateofbirth: string;
}

const employees: Iemployees[] = [
  {code:1,name:'John',gender:'Male',salary:'20000',dateofbirth:'12-23-1986'},
  {code:2,name:'david',gender:'Male',salary:'10000',dateofbirth:'10-10-1996'},
  {code:3,name:'tom',gender:'Male',salary:'30000',dateofbirth:'10-10-2000'},
  {code:4,name:'mary',gender:'Female',salary:'30000',dateofbirth:'10-10-2000'},
  {code:5,name:'dany',gender:'Female',salary:'30000',dateofbirth:'10-10-2000'},
  {code:6,name:'kathy',gender:'Female',salary:'30000',dateofbirth:'10-10-2000'},
  {code:7,name:'thersa',gender:'Female',salary:'30000',dateofbirth:'10-10-2000'},
  {code:8,name:'angeline',gender:'Female',salary:'30000',dateofbirth:'10-10-2000'},
  {code:9,name:'darren',gender:'Male',salary:'30000',dateofbirth:'10-10-2000'},
  {code:10,name:'peter',gender:'Male',salary:'30000',dateofbirth:'10-10-2000'},
  {code:11,name:'Tara',gender:'Female',salary:'30000',dateofbirth:'10-10-2000'},
  {code:12,name:'Kim',gender:'Female',salary:'30000',dateofbirth:'10-10-2000'}
    ];
