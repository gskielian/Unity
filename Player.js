#pragma strict

var ak47 : boolean = false ; 
var bullets : int = 0 ;
var ak47Object : GameObject;


function PickUp (var itemName : String ) {

  if(itemName == "ak47")  
  {
    ak47 = true;  
    ak47Object.SetActive(true);
  }


}
