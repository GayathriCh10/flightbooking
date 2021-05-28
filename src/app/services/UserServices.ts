import { Injectable } from "@angular/core";

import {HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import Add from "../entity/Add";
const Base_Url = "http://localhost:3000/flights";
@Injectable()
export default class UserServices{
    constructor(private http:HttpClient){ }
    getUsers(){
        return this.http.get(Base_Url);
    }
    save(user:Add){
        console.log(user);
        return this.http.post(Base_Url,user,{
            headers:{
                "content-type":"application/json"
            }
        })
    }
    getUserByName(name:string){

        
        return this.http.get(Base_Url,{params: new HttpParams().set('firstname' , name)});
    }

}