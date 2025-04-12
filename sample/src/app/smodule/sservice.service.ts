import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SserviceService {
getUsers(){
  return ['Alice', 'Bob', 'Charlie']
}
  
}

