/**
 * @class Array
 * When the module is being defined, the module enumerable should replace the method each.
 */
/**
 * @method  each 
 * Executes a function parsed as a parameter by each item of the array, parsing the array item as a parameter
 * @param  {function}  Needs to parse a function that receives the items of the array one by one
 * ###Example
 *     var names = ["Peter","John","David"]
 *     names.each(function (arrayItem){ alert(arrayItem)})
 * This method throws an alert for each array item showing the content of that array item 
 */
Array.prototype.each = function(){
  for (var i = 0; i < this.length; i++) 
    Array.prototype.each.yield(this[i]) 
}
/**
 * @method  each_index  
 * Executes a function parsed as a parameter by each item of the array, parsing the array index as a parameter 
 * @param  {function}  Needs to parse a function that receives the items of the array one by one
 * ###Example
 *     var names = ["Peter","John","David"]
 *     names.each(function (arrayIndex){ alert(arrayIndex)})
 * This code throws an alert for each array item showing the array index number
 */
Array.prototype.each_index = function(){
  for (var i = 0; i < this.length; i++) 
    Array.prototype.each_index.yield(i) 
}
/**
 * @method  each_with_index 
 * Executes a function parsed as a parameter by each item of the array, parsing as a parameter the array index and the array block of the index
 * @param  {function}  Needs to parse a function that receives the items of the array one by one
 * ###Example
 *     var names = ["Peter","John","David"]
 *     names.each(function (arrayItem, arrayIndex){ alert(arrayItem + " " + arrayIndex)})
 * This code throws an alert for each array item showing the array index number and the content of the index
 */
Array.prototype.each_with_index = function(){
  for (var i = 0; i < this.length; i++) 
    Array.prototype.each_with_index.yield(this[i], i) 
}
/**
 * @method  count 
 * The method counts all the elements in the array
 * @return  {Integer} Sum of all the array indexes 
 * ###Example
 *     var names = ["Peter","John","David"]
 *     var namesCount = names.count()
 */
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
/**
 * @method  collect 
 * The method selects an object in an array that matches the condition parsed as parameter
 * @return  {Array} Returns an array with the items previously parsed by the function as a parameter
 * @param  {function} This function will be executed for every object of the array. This function will receive as a parameter each element of the original array, 
and returns data that will be stored in the array returned by the function 'collect'
 * ###Example
 *     var number = [250,500,1143]
 *     discount = number.collect(function(obj){ return obj-(obj*0.25)})
 *     //The result will be = [187.5,375,857.25]
 */
Array.prototype.collect = function(){
        var collectable = []
	for (var i = 0; i < this.length; i++) 
		collectable.push(Array.prototype.collect.yield(this[i]))
        return collectable
}
/**
 * @method  select_if 
 * The method checks if every item of the array can pass a condition
 * @return  {Array} Returns all items that have passed the condition. If an item can not pass the condition, it is deleted
 * @param  {function} This function must return a boolean. If it returns true, the array item will be included in the final array. If not, it will be deleted
 * ###Example
 *     //SUSTITUIR POR EJEMPLO MAS ELABORADO CON METODOS DE STRING
 *     discount = number.collect(function(obj){ return obj-(obj*0.25)})
 *     //The result will be = [187.5,375,857.25]
 */
Array.prototype.select_if = function(){
       var collectable = []
	for (var i = 0; i < this.length; i++) 
           if ( Array.prototype.select_if.yield(this[i]) ) 
		collectable.push(this[i])
        return collectable
}

/**
 * @method  indexOf 
 * The method searches for an object in every position of the array, starting at position parsed as parameter
 * @return  {Integer} Returns the position of the searched element. If the element does not exist, it returns null
/bin/bash: Applications: command not found
 * @param  {Object} The object that will be searched
 * @param  {Integer} Position to start search
 * ###Example
 *     var numbers = [34,56,78,98]
 *     numbers.indexOf(56, 0)
 *     //The result will be = 1
 */
Array.prototype.indexOf = function(searchElement, fromIndex){
	var i
	for (i = fromIndex || 0; i <this.length && this[i] !== searchElement; i++);
	i = i>=this.length? null: i
	return i
}
/**
 * @method  indexOf 
 * The method clones an array
 * @return  {Array} Cloned array
 * ###Example
 *     var numbers = [34,56,78,98]
 *     numbers2 = numbers.clone
 *     //numbers2 is a copy of numbers
 */
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
/**
 * @method  clear
 * The method clears an Array
 * @return  {Array} An empty array
 * ###Example
 *     var numbers = [34,56,78,98]
 *     numbers.clear()
 */
Array.prototype.clear = function(){
 while( this.length > 0)
       this.pop()
}
/**
 * @method  equals$U
 * The method compares two arrays
 * @return  {Boolean} If the arrays matches the condition, it returns true. If not, it returns false
 * @param  {Array} Array to compare
 * ###Example
 *     var numbers = [34,56,78,98]
 *     numbers.indexOf(56, 0)
 *     //The result will be = 1
 */
Array.prototype.equals$U = function(other){
	var same = true
	 if(this.length != other.length)
	  return  false
             for (var i=0; i<this.length; i++)
                if (this[i] != other[i])
                  same = false
              return same
}
/**
 * @method  uniq
 * The method searches the repeated items of an array and deletes them from the returned array
 * @return  {Array} Returns an array with the repeated items deleted
 * ###Example
 *     a = [2, 1, 2, 1, 2, 2, 3, 1, 1].uniq()
 *     //The result will be = [2, 1, 3]
 */
Array.prototype.uniq = function(){
  var uniq = []
  var comparable = []
  var block = arguments.length && typeof(arguments[0]) == "function"
  var element = null

  for (var i=0; i<this.length; i++){
      element = block ? arguments[0](this[i]) : this[i]
     if (!includes(element, comparable))
        uniq.push(this[i])
	comparable.push(element)
  }
  return uniq
}
/**
 * @method  uniq$B
 * The method searches the repeated items of the array and deletes them from the original array
 * ###Example
 *     var numbers = [1, 2, 1, 2, 2, 3, 1, 2, 3]
 *     numbers.uniq$B()
 *     //The result will be = [1,2,3]
 */
Array.prototype.uniq$B = function(){
   var uniq = this.uniq()
    if (uniq.equals$U(this))
       return null
    this.clear()
    for(var i=0; i<uniq.length; i++)
       this[i] = uniq[i]
    return this
 }

/**
 * @method  first 
 * The method returns the first element or elements of the array -it will depend on the number of elements meeting the parameters-
 * @return  {Array} Returns the first element or elements of the array
 * @param  {Integer} Position to end including the elements in the returned array
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     filterNumbers = numbers.first(3)
 *     //The result will be = [1,2,3]
 */
Array.prototype.first = function(){
   if (this.length == 0)
      return null
   if (arguments.length == 0)
      return this[0]
   var ary = []
   for (var i=0; i < arguments[0] && i < this.length ; i++)
      ary[i] = this[i]
   return ary
}
/**
 * @method  last
 * The method returns the last element or elements of an array -it will depend on the number of elements meeting the parameters-
 * @return  {Array} Returns the last element or elements of the array
 * @param  {Integer} Position to start including the elements in the returned array
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     filterNumbers = numbers.last(6)
 *     //The result will be = [8,9]
 */
Array.prototype.last = function(){
   if (this.length == 0)
      return null
   if (arguments.length == 0)
      return this[this.length -1]
   var ary = []

   for (var i= 0; i < Math.min(arguments[0], this.length); i++)
      ary[i] = this[ this.length - Math.min(arguments[0], this.length) +i ]
   return ary
}
/**
 * @method  erase$B
 * Deletes the element on an specific position (parsed as parameter) of the original array
 * @param  {Integer} Position of the array item to be deleted
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     numbers.delete(3)
 *     //The result will be = [1,2,3,5,6,7,8,9]
 */
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
/**
 * @method  erase_at$B
 * Deletes the element on an specific position (parsed as parameter) of the original array
 * @param  {Integer} Position of the array item to be deleted
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     numbers.delete(3)
 *     //The result will be = [1,2,3,5,6,7,8,9]
 */
Array.prototype.erase_at$B = function(){//El assert muestra un test fallido sin motivo alguno (valor esperado == valor recibido).
  if(arguments.length > 1)
    return null
    //throw ("Wrong number of parameters")
  if(arguments[0] > this.length)
    return null
  this.splice(arguments[0],1)
  return this
}

 /**
 * @method  erase_if
 * Deletes every element of the array which block parsed as parameter evaluates to true
 * @param  {function} Block that must contain a condition to erase or not the element (returns true or false)
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     numbers.erase_if(function(obj){ return obj > 2? obj: null})
 *     //The result will be = [1,2]
 */
Array.prototype.erase_if = function(){
    /*
     *	VALID INPUT!
     *
     *  PARAMETER TYPES
     *  (function (object, object){ |condition| } )
     *
     *  DIMENSIONS
     *  Only one function
     *
     */

     if(arguments.length > 1)
       //throw("Wrong number of arguments")
       return null
     
     var ary = []
     for(var i = 0; i < this.length; i++)
       if ( !Array.prototype.erase_if.yield(this[i]) )
         ary.push(this[i])
     return ary.compact()
}
 /**
 * @method  replace
 * Replaces the array content with the array parsed as parameter. If the array is empty, the returned array will be null
 * @param  {Array} Theis array will replace the original array
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     newNumbers = numbers.replace(["a","b","c"])
 *     //The result will be = ["a","b","c"]
 */

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
/**
*
* PREGUNTAR A TXEMA FUNCIONAMIENTO
*
*/
Array.prototype.delete$B = function(obj){
  var position = this.indexOf(obj)
  if ( position == -1)
    return Array.prototype.delete$B.yield()
  
  return this.splice(position, 1)[0]
}
 /**
 * @method  include$U
 * Goes through every item of the array searching if the integer parsed as parameter is in the array. If so, it returns true. If not, false.
 * @param  {Object} Object that the method will search for
 * @return {Boolean} Returns the result of the search. if item is included, returns true. If not, false 
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     newNumbers = numbers.include$U(3)
 *     //The result will be = true
 */
Array.prototype.include$U = function(){
  if(arguments.length != 1)
    //throw "wrong number of arguments (it needs one argument)"
    return null
  var find = false
  for(var i = 0; i < this.length; i++)
    if( arguments[0] == this[i])
      find = true
  return find
}
 /**
 * @method  assoc
 *
 * search at the first element of an array that contains arrays, compares the first element with the given parameter, and returns the array wrapper
 * 
 * @param  {Object} object that is searched
 * 
 * @return {Array} array 
 * 
 * ###Example
 *     
 *     var coupleOne = ["David", "Homer"]
 *     var coupleTwo = ["John", "Steve"]
 *     var index = [a,b]
 *     var winnerCouple = index.assoc("John")    #=> ["John","Steve"]
 *     var winnerCouple = index.assoc(["John"])  #=> ["John","Steve"]
 *     var winnerCouple = index.assoc("Homer")   #=> nil
 *
 *
 */

Array.prototype.assoc = function(){
  if(arguments.length > 1)
    //throw "wrong number of arguments"
    return null
  for(var i = 0; i < this.length;i++)
    if(arguments[0] == this[i][0])
      return this[i]
  return null
}
 /**
 * @method  at
 * returns the element corresponding to the index passed as parameter
 * @param  {Integer} Array index position
 * @return {Object} The selected element by index passed as parameter 
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     newNumbers = numbers.at(3)
 *     //The result will be = 4
 */

Array.prototype.at = function(){
   if(arguments.length > 1)
     //throw "wrong number of arguments"
   if(arguments[0] > this.length)
     return null
   if(isNaN(arguments[0]))
     //throw "wrong type paremeter" Converts any argument to array, then merges elements of itself with corresponding elements from each argument. 
     return null    
   if(arguments[0] < 0 && (this.length + arguments[0]) < 0)       
       return null
   return arguments[0]>=0? this[arguments[0]] : this[this.length+(arguments[0])]
}

 /**
 * @method  compact
 * Deletes the null elements of an array
 * @returns {Array} Returns clean array without null elements
 * ###Example
 *     var numbers = [1,null,2,null,3,null,4,5,6,7,8,9]
 *     newNumbers = numbers.compact()
 *     //The result will be = [1,2,3,4,5,6,7,8,9]
 */

Array.prototype.compact = function(){
  var ary = []
  for(var i = 0; i < this.length; i++)
    if(this[i] != null)
      ary.push(this[i])
  return ary      
}

Array.prototype.merge = function(ary2){
  var ary = []// PROBLEMAS CON EL TEST,LA VARIABLE ARY CONTIENE DATOS PERO EN EL TEST SE MUESTRA COMO UNDEFINED
  for(var i = 0; i < this.length; i++)
      ary.push(this[i])
  for(var i = 0; i < ary2.length; i++)
      ary.push(ary2[i])
  return ary      
}

 /**
 * @method  drop
 * Deletes elements from position 0 of the array to the possition passed as parameter
 * @param {Integer} Position to stop deleting data of the array
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     newNumbers = numbers.drop(3)
 *     //The result will be = [5,6,7,8,9]
 */


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

 /**
 * @method  drop_while
 * Executes a block passed as parameter that returns either an object or null. If it returns null, this position will be deleted
 * @param {Function} Function that must return either an object or null
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     newNumbers = numbers.drop_while(function(obj, that){ return obj > 5? that: null})
 *     //The result will be = [6,7,8,9]
 */


Array.prototype.drop_while = function(){
    /**
     *	VALID INPUT!
     *
     *  PARAMETER TYPES
     *  (function (object, object){ |condition| } )
     *
     *  DIMENSIONS
     *  Only one function
     *
     */

  if(arguments.length > 1)
    //throw("Wrong number of parameters")
    return null  

  /*for(var i = 0; i < this.length; i++)
    if(this[i] instanceof Array)
      //throw("Invalid this. This contains sub-arrays")
      return null*/

  var ary = []
  for(var i = 0; i < this.length; i++)
    ary.push(Array.prototype.drop_while.yield(i,this[i])) 
  
  return ary.compact()
}

 /**
 * @method  flatten
 * This method transforms an array that contains other arrays inside in a single array with the data of all the arrays
 * @param {Integer} The level to stop flatting objects
 * ###Example
 *     var numbers = [[1,2],[3,4],[5,6]]
 *     numbers.flatten()
 *     //The result will be = [1,2,3,4,5,6]
 *     var numbers = [[1,2,[3,4,5,6]]]
 *     numbers.flatten(1)
 *     //The result will be = [1,2,[3,4,5,6]]
 */
Array.prototype.flatten = function(level){
  if(level == 0)
    return this
  level = level || 1000
  return unpack(this, [], level)
}
 /**
 * @method  index
 * Search throught an array to find the element passed as parameter and return the position of these element
 * @param {Object} Object that the method will search for
 * @return {Integer} Position of the element we are searching for, if not find it will be null
 * ###Example
 *     var numbers = [1,2,3,4,5,6,7,8,9]
 *     newNumbers = numbers.index(3)
 *     //The result will be = 4
 */
Array.prototype.index = function(){
  for(var i = 0; i < this.length; i++)
    if(this[i] == arguments[0])
      return i
  return null
}

 /**
 * ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿???????????????????????????????
 */

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
/**
* ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿????????????????????????
*/
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

 /**
 * @method  rindex
 * Search throught an array to find the element passed as parameter and return the position of these element, but starting to search from the final position of the array
 * @param {Object} Object that the method will search for
 * @return {Integer} Position of the element we are searching for, if not find it will be null
 * ###Example
 *     var numbers = [1,2,3,4,5,4,3,2,1]
 *     newNumbers = numbers.rindex(3)
 *     //The result will be = 6
 */

Array.prototype.rindex = function(){
  if(arguments.length != 1)
    //throw ("Wrong number of arguments")
    return null
  
  for(var i = this.length-1; i >= 0; i--)
    if(this[i] == arguments[0])
      return i
  return null
}
 /**
 * @method  rotate
 * Literally rotate the array elements stablishing as center of rotation an index passed as parameter
 * @param {Integer} Stablish the center of the array rotation 
 * ###Example
 *     var characters = ["a","b","c","d"]
 *     characters.rotate(2)
 *     //The result will be = ["c","d","a","b"]
 */
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

 /**
 * @method  take
 * Take the elements of an array from the first position to the position passed as parameter
 * @param {Integer} Position of the element to stop taking elements
 * ###Example
 *     var numbers = [1,2,3,4,5,4,3,2,1]
 *     newNumbers = numbers.take(3)
 *     //The result will be = [1,2,3,4]
 */

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

 /**
 * @method  take_while
 * Method that needs a function poassed as parameter, the function will reciebe every item of the array 
 * and an array with all the returned elements of these function will be returned by take_while method
 * @param {Function} Function that will be executed
 * @return {Array} Array with all elements returned by the function passed as parameter
 * ###Example
 *     var numbers = [1,2,3,4,5,4,3,2,1]
 *     numbers = numbers.take_while(function(obj){return obj<3? obj: null})
 *     //The result will be = [1,2]
 */


Array.prototype.take_while = function(){
  var ary = []
  for(var i = 0; i < this.length; i++)
    ary.push( Array.prototype.take_while.yield(this[i]))  
  return ary.compact()
}

/**
 * @method  shuffle
 * This method shuffle the array items aleatory
 * @return {Array} Array that was shuffled
 * ###Example
 *     var numbers = [1,2,3,4]
 *     numbers.shuffle()
 *     //The result will be = [1,2]
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

/**
 * 
 * @memberOf 	{Array}
 * @method 		transpose        
 * @param       (Array of Arrays).
 *
 * Coded by: David
 *
 * Comments:   Assumes that self is an array of arrays and transposes the rows and columns. 
 */


Array.prototype.transpose = function(){
    /**
     *	VALID INPUT!
     *
     *  PARAMETER TYPES
     *  (Array of Arrays)
     *
     *  DIMENSIONS
     *  Paremeters dimensions must have the same dimensions.
     *
     */
     
  for(var i = 0; i < this.length; i++)
  if(!(this[i] instanceof Array))
    //throw("Wrong type of parameters into Array" + typeof(arguments[i]))
    return null
          
  for(var i = 0; i < this.length; i++)
    if((this[0].length) != (this[i].length))      
      //throw("Element size differs")
      return null

   var ary = [] 
 

   //Square matrices
   if((this.length) == (this[0].length)){    
     ary = this.clone()
     for(var i = 0; i < this.length;i++){
       ary[i] = []
       for(var j = 0;j < this[i].length; j++)
           ary[i][j] = this[j][i]
     }
      
   return ary  
   }
   
   //Non-square matrices

   for(var i = 0; i < this[0].length;i++)
     ary.push(_transpose(i,this))

   return ary
}

/**
 * @method  zip
 * Takes the element for two or more arrays passed as parameter and copy their content in a single array
 * @param {Array} Arrays to be zipped
 * @return {Array} Array with all elements of the other arrays
 * ###Example
 *     var a = [1,2]
 *     var b = [3,4]
 *     a.zip(b)
 *     //The result will be = [1,2,3,4]
 */

Array.prototype.zip = function(){
   var ary = []
   for(var i=0;i<this.length;i++){
      ary[i] = []
      ary[i][0]=this[i]
      for (var j=0; j<arguments.length; j++)
         if(arguments[j][i] == (void 0))
	    ary[i][j+1]=null
	 else
	    ary[i][j+1]=arguments[j][i]
   }
   return ary;
}


/**
 * @method  empty$U
 * Check if the array is emprty
 * @return {Boolean} if is empty tue, if not, false
 * ###Example
 *     var a = []
 *     a.empty$U()
 *     //The result will be = true
 */
Array.prototype.empty$U = function(){
  if(arguments.length > 0)
    //throw("Wrong number of parameters")
    return null
  return this.length==0? true: false
}


 /**
 * @method  eql$U
 * Check if the arrays are equals
 * @return {Boolean} if is equals tue, if not, false
 * ###Example
 *     var a = [1,2]
 *     var b = [1,2]
 *     a.eql$U(b)
 *     //The result will be = true
 */
Array.prototype.eql$U = function(model){
    /**
     *	VALID INPUT!
     *
     *  PARAMETER TYPES
     *  (All types)
     *
     *  DIMENSIONS
     *  One object
     *
     */    
  if(arguments.length > 1)
    //throw("Wrong number of arguments")
    return null

  if(!(arguments[0] instanceof Array))
    return false

  if(this.length != arguments[0].length)
    return false
  var that = this  
  return model.inject_with_index( true, 
                                  function (el, index, acum){ 
                                        if (typeof(el) === "number")
                                          return acum && el == that[index] //Number.eql$U(el, that[index])
                                        return acum && ((el != null)? el.eql$U(that[index]) : true)
                                  });

}


 /*
¿??????????
 */
Array.prototype.inject = function(init_value){
  for (var i=0; i<this.length; i++)
    init_value = Array.prototype.inject.yield(this[i], init_value)
  return init_value
}



Array.prototype.inject_with_index = function(init_value){
  for (var i=0; i<this.length; i++)
    init_value = Array.prototype.inject_with_index.yield(this[i], i, init_value)
  return init_value
}


/**
 * @method  reverse
 * Reverse all array elements
 * @return {Array} New array with elements reversed
 * ###Example
 *     var a = [1,2,3,4]
 *     a.reverse()
 *     //The result will be = [4,3,2,1]
 */
Array.prototype.reverse = function(){
  var ary = []
  pos = 0
  for(var i = this.length-1; i >= 0; i--){
    ary[pos] = this[i]
    pos++
  }
  return ary
}


 /**
 * @method  values_at
 * Return the values of a concrete index passed as parameter
 * @return {Array} New array with values of index selected
 * @param {Integer} The index to be selected
 * ###Example
 *     var a = [1,2,3,4]
 *     a.values_at(1,2)
 *     //The result will be = [1,2]
 */
Array.prototype.values_at = function(){
    /**
     *	VALID INPUT!
     *
     *  PARAMETER TYPES
     *  (Integer indices or ranges)
     *
     *  DIMENSIONS
     *  Any
     *
     */ 
  
  for(var i = 0; i < arguments.length; i ++)
    if(isNaN(arguments[i]))
      //throw ("Invalid type of paramenter")    
      return null
  
  var ary = [] 
  for(var i = 0; i < arguments.length; i++){
    //Converts real numbers (if exists) into integer.    
    arguments[i] = Math.round(arguments[i])
    
    if((arguments[i]) >= (this.length))      
      ary.push(null)
    
    else if(arguments[i] < 0){      
      if((arguments[i]+(arguments[i]*-2)) >= this.length)
        ary.push(null)
      else
        ary.push(this[this.length+(arguments[i])])
    }

    else   
      ary.push(this[arguments[i]])              
  }
  return ary  
}



/**
 * 
 * @memberOf 	{Array}
 * @method 	to_a      
 * @param       (any).
 *
 * Coded by: David
 *
 * Comments: Returns self. If called on a subclass of Array, converts the receiver to an Array object. 
 */


Array.prototype.to_a = function(){
  return this
}

/**
 * 
 * @memberOf 	{Array}
 * @method 	    Cycle      
 * @param       (function {}).
 *
 * Coded by: David
 *
 * Comments: Calls block for each element repeatedly n times or forever if none or nil is given. If a non-positive number is given or the array is empty, does nothing. Returns nil if the loop has finished without getting interrupted.
 */
Array.prototype.cycle = function(){

}

/**
 * 
 * @memberOf    {Array}
 * @method 	    strip_all     
 * @param       (function {}).
 *
 * Coded by: imasen
 *
 * Comments: strips each of the string elements of an array
 */

 /**
 * @method  strip_all
 * Return all values of the content of an array, including bidimensional array
 * @return {Array} New array with values of index selected
 * @param {Integer} The index to be selected
 * ###Example
 *     var a = [[1,2],[3,4]]
 *     a.strip_all()
 *     //The result will be = [1,2,3,4]
 */
Array.prototype.strip_all = function(){
  return this.collect(function(el){
         return el.respond_to("strip") ? el.strip() : el
      })
}


//Internal simple functions
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

function _transpose(pos, nary){
  //This function returns a transpose array. (Used by Array#transpose method when it receives non-square matrices).
  var array = []
  for(var i = 0; i < nary.length; i++)
    array[i] = nary[i][pos]          
    return array
}

