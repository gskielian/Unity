#pragma script


//if no know how to find out how to do stuff -- scripting reference (no internet needed)

var  objectToDisableOnPickUp : GameObject;


function Start() {

}

function Update() {
//

}

function OnTriggerEnter( t : Collider ) {

  if( t.gameObject.tag == "Player" )
  {
    t.gameObject.SendMessage( "PickUp", "ak47" ); // Name of the gun is AK47, in this case
  
    if( renderer != null )
    {
      renderer.enabled = false; // makes it invisible
    }
      collider.enabled = false; // so you can't get a second ak   
    if ( objectToDisableOnPickUp != null )
    {
      objectToDisableOnPickUp.SetActiveRecursive(false);
    }

  }

}
// *** remember to add the model to the script  (drag and drop within Unity) ***
// todo: add sphere on the top of the zombie that does more damage (head shot)
