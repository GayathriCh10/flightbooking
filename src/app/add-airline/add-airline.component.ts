import { Component, OnInit } from '@angular/core';
import Add from '../entity/Add';
import UserServices from '../services/UserServices';


@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.sass']
})
export class AddAirlineComponent implements OnInit {

  constructor(private userService:UserServices){}

  add:Add = new Add();
  users:Add[]=[];
  order: boolean = false;

 
   ngOnInit(){
     const promise= this.userService.getUsers();
     promise.subscribe((response) =>{
       console.log(response);
       this.users= response as Add[];
     })

   }

   save(){
    console.log(this.add.airlinename);
    const promise = this.userService.save(this.add);    
    promise.subscribe(function(response){
      console.log(response);
      alert('added successfully')
      
    },
    function(error){
      alert(error.message);
    },
    function(){console.log('default will always called')

    }
    )
  }

}
