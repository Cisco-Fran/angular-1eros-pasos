import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

import  { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[{
    id:uuid(),
    name: 'Krillin',
    power:1000
  },

{
  id:uuid(),
  name: 'goku',
  power:10000
},

{
  id:uuid(),
  name: 'Vegeta',
  power:7500
}
];

addCharacter(character:Character):void{


const newCharcater:Character={id:uuid(), ...character}


  this.characters.push(newCharcater);
}

//onDeleteCharacter(index:number):void{
  //this.characters.splice(index,1);
//}

deleteCharacterByid(id:string){
this.characters= this.characters.filter(Character=>Character.id!==id);

}

}
