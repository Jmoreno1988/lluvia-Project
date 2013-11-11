logger = document.getElementById("logger")
function main(){ 
  var w = new World()

  var boid_list = new WorldInterface("boid_list_content")
  w.addPort("new_boid", boid_list)
  var boid_editor = new BoidEditor("boid_properties")
  boid_list.addPort("focus_boid", boid_editor)

  for(var i = 0; i<1; i++){
    var b = w.new_wander()
    b.vel_max = 20
  }

  w.start()
}