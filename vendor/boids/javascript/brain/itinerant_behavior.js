/**
 * @classDescription Creates Itinerant Behavior: seek
 *
 * @return {SeekBehavior}
 * @constructor
*/

SeekBehavior.prototype = new Behavior
SeekBehavior.prototype.constructor = SeekBehavior
SeekBehavior.prototype.super = Behavior

function SeekBehavior(){
  Behavior.apply(this, arguments)
  this.target = null
}

SeekBehavior.prototype.set_target = function(boid){
  this.target = boid || new Boid({
                          position:      new Vector(1,1),
                          velocity:      new Vector(1,1),
                          acceleration:  new Vector(1,1)
      }, "red")
}

SeekBehavior.prototype.target_data = function(){
  if (!this.target)
    throw "SeekBehavior Disabled. Still no target."
  return this.target ? this.target.geo_data : null
}

SeekBehavior.prototype.get_target = function(){
  return this.target_data()
}

SeekBehavior.prototype.target_at = function(){
  return this.get_target().position.subs( this.me.geo_data.position )
}

SeekBehavior.prototype.desired_velocity = function(){
  var arrival_distance
  try{ 
    arrival_distance = this.target_at().module()
  }catch(err){
    arrival_distance = 0
  }
  var scale = 1
  /* Arrival behavior Modifier
  if (this.approach_distance > arrival_distance)
    scale = arrival_distance / this.approach_distance
    */
  return (new Vector(this.target_at().unit().scale(scale * this.me.vel_max)))
}

SeekBehavior.prototype.desired_acceleration = function(){
  return this.desired_velocity().subs(this.me.velocity())
}


/**
 * @classDescription Creates Itinerant Behavior: flee
 *
 * @return {FleeBehavior}
 * @constructor
*/


FleeBehavior.prototype = new Behavior
FleeBehavior.prototype.constructor = FleeBehavior
FleeBehavior.prototype.super = Behavior

function FleeBehavior(){
  Behavior.apply(this, arguments)
  this.target = null
}

FleeBehavior.prototype.set_target = function(boid){
  this.target = boid || new Boid({
                          position:      new Vector(1,1),
                          velocity:      new Vector(1,1),
                          acceleration:  new Vector(1,1)
      }, "red")
}

FleeBehavior.prototype.target_data = function(){
  if (!this.target)
    throw "FleeBehavior Disabled. Still no target."
  return this.target ? this.target.geo_data : null
}

FleeBehavior.prototype.get_target = function(){
  return this.target_data()
}

FleeBehavior.prototype.target_at = function(){
  return this.get_target().position.subs( this.me.geo_data.position )
}

FleeBehavior.prototype.desired_velocity = function(){
  var arrival_distance
  try{ 
    arrival_distance = this.target_at().module()
  }catch(err){
    arrival_distance = 0
  }
  var scale = 1

  return (new Vector(this.target_at().unit().scale(-scale * this.me.vel_max)))
}

FleeBehavior.prototype.desired_acceleration = function(){
  return this.desired_velocity().subs(this.me.velocity())
}

/**
 * @classDescription Creates Itinerant Behavior: wander
 *
 * @return {WanderBehavior}
 * @constructor
*/

WanderBehavior.prototype = new Behavior
WanderBehavior.prototype.constructor = WanderBehavior
WanderBehavior.prototype.super = Behavior

function WanderBehavior(){
  Behavior.apply(this, arguments)
  this.target = null
  this.radius = 5
  this.angle = 0//Math.floor(Math.random() * (360 - 0 + 1)) + 0;//Math.random()
  this.limit = 100
  this.timer = 0
}

WanderBehavior.prototype.set_target = function(boid){
  var vector1 = new Vector(this.me.last_heading.unit().get_coord(0)*this.radius, this.me.last_heading.unit().get_coord(1)*this.radius)
  var vector2 = new Vector(this.radius, this.angle, "pol")
  this.target = vector1.add(vector2)
  this.angle += (Math.random() * (Math.PI*2))
}

WanderBehavior.prototype.target_data = function(){
  if (!this.target)
    throw "WanderBehavior Disabled. Still no target."
  else if(this.timer >= this.limit){
    this.set_target()
    this.timer = 0
  }
  this.timer++

  return this.target ? this.target : null
}

WanderBehavior.prototype.get_target = function(){
  return this.target_data()
}

WanderBehavior.prototype.target_at = function(){
  return this.get_target()//.subs( this.me.geo_data.position )
}

WanderBehavior.prototype.desired_velocity = function(){
  var arrival_distance
  try{ 
    arrival_distance = this.target_at().module()
  }catch(err){
    arrival_distance = 0
  }
  var scale = 1
  
  return (new Vector(this.target_at().unit().scale(scale * this.me.vel_max)))
}

WanderBehavior.prototype.desired_acceleration = function(){
  return this.desired_velocity().subs(this.me.velocity())
}

/**
 * @classDescription Creates Itinerant Behavior: wall following
 *
 * @return {WallFollowingBehavior}
 * @constructor
*/

WallFollowingBehavior.prototype = new Behavior
WallFollowingBehavior.prototype.constructor = WallFollowingBehavior
WallFollowingBehavior.prototype.super = Behavior

function WallFollowingBehavior(){
  Behavior.apply(this, arguments)
}

/**
 * @classDescription Creates Itinerant Behavior: path following
 *
 * @return {PathFollowingBehavior}
 * @constructor
*/


PathFollowingBehavior.prototype = new Behavior
PathFollowingBehavior.prototype.constructor = PathFollowingBehavior
PathFollowingBehavior.prototype.super = Behavior

function PathFollowingBehavior(){
  Behavior.apply(this, arguments)
}
