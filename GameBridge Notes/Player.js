#pragma strict

var ak47 : boolean = false ; 
var bullets : int = 0 ;
var ak47Object : GameObject;
var bulletPrefab : GameObject;
var playerCamera : GameObject;

function Update () {
 if( Input.GetMouseButton(0) )
 {
    if(ak47)
    {
      var  bullet : GameObject = GameObject.Instatiate(bulletPrefab, );
    }
 
 }
  
}


function PickUp (var itemName : String ) {

  if(itemName == "ak47")  
  {
    ak47 = true;  
    ak47Object.SetActive(true);
  }


}
