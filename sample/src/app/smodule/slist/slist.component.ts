import { Component } from '@angular/core';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-slist',
  templateUrl: './slist.component.html',
  styleUrls: ['./slist.component.css']
})
export class SlistComponent{
  users: string[]=[];
  constructor(private sService:SserviceService){}
    ngOnInit(){
      this.users=this.sService.getUsers(); 
    }
  }
