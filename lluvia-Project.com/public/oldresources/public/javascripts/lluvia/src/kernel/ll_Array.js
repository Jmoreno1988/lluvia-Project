/*
 * When module will be defined, module enumerable shall replace method each.
 */

Array.prototype.each = function(){
	for (var i = 0; i < this.length; i++) 
		Array.prototype.each.yield(this[i])	
}

Array.prototype.each_index = function(){
	for (var i = 0; i < this.length; i++) 
		Array.prototype.each_index.yield(i)	
}

Array.prototype.each_with_index = function(){
	for (var i = 0; i < this.length; i++) 
		Array.prototype.each_with_index.yield(this[i], i)	
}

Array.prototype.count = function(obj){
  if (typeof(obj) === "undefined" )
    return this.length

  var count = 0
  for (var i=0; i<this.length; i++) 
     if ( (typeof(obj) === "function" ? Array.prototype.count.yield(this[i]) : this[i] == obj) )
       count++

  return count
}

Array.prototype.each_reverse = function(){// Problemas en el test. Muestra failed pero valor esperado == valor recibido.
	var l = this.length - 1
	for (var i = l; i >= 0; i--) 
		Array.prototype.each.yield(this[i])	
}

Array.prototype.collect = function(){
        var collectable = []
	for (var i = 0; i < this.length; i++) 
		collectable.push(Array.prototype.collect.yield(this[i]))
        return collectable
}


Array.prototype.indexOf = function(searchElement, fromIndex){
	var i
	for (i = fromIndex || 0; i <this.length && this[i] !== searchElement; i++);
	i = i>=this.length? null: i
	return i
}

Array.prototype.clone = function(){
   var ary = []
   for (var i=0; i<this.length; i++)
      ary[i] = this[i]
   return ary
}

Array.prototype.clone$B = function(model){
   this.clear()
   for(var i=0; i<model.length; i++)
      this[i] = model[i]
}

Array.prototype.clear = function(){
 while( this.length > 0)
       this.pop()
}
 
Array.prototype.equals$U = function(other){
	var same = true
	 if(this.length != other.length)
	  return  false
             for (var i=0; i<this.length; i++)
                if (this[i] != other[i])
                  same = false
              return same
}

Array.prototype.uniq = function(){
  var uniq = []
  for (var i=0; i<this.length; i++)
     if (!includes(this[i], uniq))
        uniq.push(this[i])
  return uniq
}

Array.prototype.uniq$B = function(){
   var uniq = this.uniq()
    if (uniq.equals$U(this))
       return null
    this.clear()
    for(var i=0; i<uniq.length; i++)
       this[i] = uniq[i]
    return this
 }

Array.prototype.first = function(){
   if (this.length == 0)
      return null
   if (arguments.length == 0)
      return this[0]
   var ary = []
   for (var i=0; i < arguments[0]; i++)
      ary[i] = this[i]
   return ary
}

Array.prototype.last = function(){
   if (this.length == 0)
      return null
   if (arguments.length == 0)
      return this[this.length -1]
   var ary = []
   for (var i=this.length-arguments[0]; i < this.length; i++)
      ary[i - this.length + arguments[0]] = this[i]
   return ary
}

Array.prototype.erase$B = function(){ // El assert muestra un test fallido sin motivo alguno (valor esperado == valor recibido). Falla una vez se pone la condición de parámetro inexistente en el array.
  if(arguments.length > 1)
     return null
     //throw ("Wrong number of parameters")
  var find = false
  for(var i = this.length-1; i>0; i--)
    if(this[i] == arguments[0]){
      this.splice(i,1)
      find = true;
    }
  return find? this: null
}  

Array.prototype.erase_at$B = function(){//El assert muestra un test fallido sin motivo alguno (valor esperado == valor recibido).
   if(arguments.length > 1)
     return null
     //throw ("Wrong number of parameters")
   if(arguments[0] > this.length)
     return null
   this.splice(arguments[0],1)
   return this
}

Array.prototype.replace = function(){
  if(arguments.length == 0)
    return null
  if(arguments.length > 1)
    return null
    //throw("wrong number of arguments")
  if (!(arguments[0] instanceof Array))
     return null
    //throw("Invalid parameter type: Array expected.")  
  this.clear()
  for(var i = 0; i < arguments[0].length; i++)
     this[i] = arguments[0][i]
  return this
}

Array.prototype.include$U = function(){
  if(arguments.length != 1)
    //throw "wrong number of arguments (it needs one arguments)"
    return null
  var find = false
  for(var i = 0; i < this.length; i++)
    if( arguments[0] == this[i])
      find = true
  return find
}

Array.prototype.assoc = function(){
  if(arguments.length > 1)
    //throw "wrong number of arguments"
    return null
  for(var i = 0; i < this.length;i++)
    if(arguments[0] == this[i][0])
      return this[i]
  return null
}

Array.prototype.at = function(){
   if(arguments.length > 1)
     //throw "wrong number of arguments"
   if(arguments[0] > this.length)
     return null
   if(isNaN(arguments[0]))
     //throw "wrong type paremeter"
     return null    
   if(arguments[0] < 0 && (this.length + arguments[0]) < 0)       
       return null
   return arguments[0]>=0? this[arguments[0]] : this[this.length+(arguments[0])]
}

Array.prototype.compact = function(){
  var ary = []
  for(var i = 0; i < this.length; i++)
    if(this[i] != null)
      ary.push(this[i])
  return ary      
}

Array.prototype.drop = function(){
  if(arguments.length > 1 || arguments.length < 1)
    //throw "Wrong number of arguments"
    return null
  if(isNaN(arguments[0]))
    //throw "Invalid type argument"
    return null
  var ary = []
  if(arguments[0] > this.length-1)
     return ary
  ary = this.clone()     
  for(var i = 0; i < arguments[0]; i++)
     ary.splice(0,1)
  return ary
}

Array.prototype.flatten = function(level){
  if(level == 0)
    return this
  level = level || 1000
  return unpack(this, [], level)
}

Array.prototype.index = function(){
  for(var i = 0; i < this.length; i++)
    if(this[i] == arguments[0])
      return i
  return null
}

Array.prototype.product = function(){
  var ary = []
  
  if(!(arguments[0])){
    for(var i = 0; i < this.length; i++)
      ary[i] = [this[i]]    
    return ary
  }
  
  if(arguments[0].length < 1)
    return ary

  if(arguments.length >= 1){     
    if(arguments.length == 1)   
      return aproduct(this,arguments[0])///////////////TO DO
  }    
}

Array.prototype.rassoc = function(){
  if(arguments.length > 1 || arguments.length < 1)
    //throw ("wrong number of arguments")
    return null
  var existsArray = false
  for(var i = 0; i < this.length; i++)
    if(this[i] instanceof Array)
      if(this[i].length == 2)
        existingArray = true

  if(existingArray){    
    for(var i = 0; i < this.length; i++)
      if(this[i] instanceof Array)
        if(this[i][1] == arguments[0])
          return this[i]
  }
  return null
}

Array.prototype.rindex = function(){
  if(arguments.length != 1)
    //throw ("Wrong number of arguments")
    return null
  
  for(var i = this.length-1; i >= 0; i--)
    if(this[i] == arguments[0])
      return i
  return null
}

Array.prototype.rotate = function(obj){
  if (typeof(obj) === "undefined"){
    var ary = this.clone()
    ary.push(ary.shift())
    return ary
  }
  if(arguments.length > 1)
    //throw ("Wrong number of arguments")
    return null  
  var ary = this.clone()  
  if(arguments){ 
    if(isNaN(arguments[0]))
      //throw ("Wrong type argument")
      return null 
      
    if(arguments[0] < 0){
      if(Math.abs(arguments[0]) > this.length-1)
        //throw("Invalid index")
        return null
      return _rotate(Math.abs(arguments[0]), this, ary)    
    }
    if(arguments[0] > this.length-1)
      //throw("Invalid index")
      return null
    for(var i = 0; i < ary.length; i++){
      ary[i] = this[arguments[0]]      
      arguments[0]++
      if(arguments[0] == this.length)
         arguments[0] = 0
    }
    return ary
  }  
  return _rotate(this.length-1, this, ary)
}

Array.prototype.take = function(){
  if(!(arguments[0]) || arguments.length > 1)
    //throw ("Wrong number of parameters")
    return null
    
  if(isNaN(arguments[0]))
    //throw ("Wrong type of parameters")          
    return null
    
  var ary = []
  if(arguments[0] > this.length)
    arguments[0] = this.length
  for(var i = 0; i < arguments[0]; i++)
    ary[i] = this[i]
  return ary
}

Array.prototype.take_while = function(){
  var ary = []
  for(var i = 0; i < this.length; i++)
    ary.push( Array.prototype.take_while.yield(this[i]))  
  return ary.compact()
}

/**
 * This function shuffles an array
 *
 * @memberOf     {Array}
 * @return      (Array)
 *
 * Comments:   This method works using an auxiliar array when the positions from shuffling the
 *                original array are saved,and then taked to reorder the array.
 */
Array.prototype.shuffle = function()
{
    if(arguments.length > 0)
      //throw("Wrong number of arguments")
      return null

    randomizedArray = [];
    usedNumbers = [];
   
    while(randomizedArray.length < this.length)
    {
        finded = false;
        var number = Math.round(getRandomArbitary(0,this.length));
        for (var i=0; i < usedNumbers.length; i++)         
            if (number == usedNumbers[i])            
                finded = true;                    
        if(!finded && number < this.length)
        {
            usedNumbers.push(number);
            randomizedArray.push(this[number]);
        }
    }
  
    return randomizedArray;
}

Array.prototype.collect = function(){
   var ary = []
  for (var i=0; i<this.length; i++)
     ary.push( Array.prototype.collect.yield(this[i]) )
  return ary
}

function includes(el, array){
  for (var i=0; i<array.length; i++)
    if (array[i] == el)
      return true
  return false
}

function unpack(model, array, level){    
  var l = level;

  for (var i=0; i<model.length; i++){
     if ( (model[i] instanceof Array) && (l > 0)){       
       unpack(model[i], array, l-1)       
     }
     else{       
       array.push(model[i])       
     }
  }
  return array
}

function aproduct(array1, array2){
    var nary = []
    var arrays = array1.length * array2.length
    for(var i = 0; i < arrays; i++){
      nary[i] = []
    }
    var pos = 0
    for(var i = 0; i < array1.length; i++)
      for(var j = 0; j < array2.length; j++){
        nary[pos][0] = array1[i]
        nary[pos][1] = array2[j]      
        pos++
      }
    return nary  
}

function _rotate(number, array1, array2){
    var pos = 1 
    array2[number] = array1[0]
    var arg = number
    if(arg == array1.length-1)
      arg = 0
    else
      arg++
    for(var i = arg; i != number;i++){    
      array2[i] = array1[pos]            
      if(i == (array1.length-1))
        i = -1;
      pos++
    }
    return array2
}

function getRandomArbitary (min, max) {
  return Math.random() * (max - min) + min;
}

