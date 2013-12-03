String.prototype.capitalize = function(){
  word = this.replace(this[0], this[0].toUpperCase())
  return word

}

String.prototype.capitalize$B = function(){
  this.replace(this[0], this[0].toUpperCase())
}

String.prototype.index = function(){
  if (arguments.length == 0 || arguments.length > 2)
    //throw ("wrong number of arguments")
    return null
  return this.indexOf(arguments[0]) < 0? null : this.indexOf(arguments[0])
// Falta que funcione al pasar por parametros
// ? y una letra, ya que da error de sintaxis
// y el conjunto de letras
}

String.prototype.replace$B = function(){
}

String.prototype.insert = function(){
  if (arguments.length == 0 || arguments.length > 2)
    //throw ("wrong number of arguments")
    return null
  if (arguments[0] > this.length)
    return null
    //throw("index out of string")
  var pos = arguments[0] < 0? this.length + arguments[1].length + arguments[0] - 1 : arguments[0]
  var str = ""
  for(var i=0;i<=this.length;i++)
     if(i == pos){
       str = str + arguments[1]
       var add = true
     }
     else if(!i==0 && add)
       str = str + this[i - 1]
          else
            str = str + this[i]
  return str
}

String.prototype.ljust = function(){
  var str = this
  var j = 0
  for(var i = 0; i < (arguments[0] - this.length); i++)
    if (arguments.length > 1 && arguments[1].length > 1)
      str = str + arguments[1][i % arguments[1].length]
    else if (arguments.length > 1)
        str = str + arguments[1]
        else
          str = str + " "
  return str
}

String.prototype.lstrip = function(){
  return this.replace(/^\s+/g,"")
}

String.prototype.swapcase= function(){
  var str = []
  for(var i = 0; i < this.length;i++){
    if ((this[i].charCodeAt(0) > 64) && (this[i].charCodeAt(0) < 97)){      
      str[i] = this[i].toLowerCase()      
    }
    else{
      str[i] = this[i].toUpperCase()
    }
  }  
  var word = str.join("")
  return word
}

String.prototype.empty$U = function(){
   if(arguments.length > 0)	
      //throw ("wrong number of arguments. This function not needs arguments")
      return null
   return this.length>0? false : true
}

String.prototype.downcase$B = function(){
//   if(this instanceof String)
 //     throw("undefined method downcase$B")
   var change = false
   for(var i = 0; i < this.length ; i++)
      if( (this[i] >= 'A') && (this[i] <= 'Z') )
	    change = true 
   return change? this.toLowerCase() : null
}

String.prototype.casecmp = function(){
  if(arguments[0].length > this.length)
    return -1
  if(arguments[0].length == 1)
    return this[0] == arguments[0] || this[0] == arguments[0].swapcase()? 1 : -1
  if(arguments[0].length <= this.length){
    for(var i=0;i<arguments[0].length;i++)
      validar = this[i] == arguments[0][i] || this[i] == arguments[0][i].swapcase()
}
  return validar && (arguments[0].length == this.length)? 0 : validar? 1 : -1
}

String.prototype.ord = function(){
   return this.charCodeAt(0)
}

String.prototype.reverse = function(){
   return this.split("").reverse().join("")
}

String.prototype.include$U = function(){

   return (this.lastIndexOf(arguments[0]) > 0)? true : false 

}

String.prototype.rindex = function(){

   if (arguments.length == 0)
      return null
   return (this.lastIndexOf(arguments[0]) > 0)? this.lastIndexOf(arguments[0]) : false
}


String.prototype.center = function(){
 // if (arguments.length == 0 || arguments.length > 2)
 //    throw("wrong number arguments")
  if (this.length >= arguments[0])
     return this
  var str = ""
  var i = 0
  var j = 0
  while(i<=(arguments[0] - this.length)){
      if (i == (arguments[0]-this.length) / 2){
         j = 0
         str += this
         }
      else if (arguments.length > 1){
         str += arguments[1].length == 1? arguments[1] : arguments[1][j]
         j = (j+1)%arguments[1].length
         }
           else
              str += " "
      i++
  } 
  return str
}

String.prototype.chomp = function(){
    if (arguments.length == 1)
       return this.replace(arguments[0], "")
    if (this.search(/\r\n/i) == this.length - 2)
       return this.replace("\r\n", "")
    if (this.search(/\r/i) == this.length - 1)
       return this.replace("\r", "")
    if (this.search(/\n/i) == this.length - 1)
       return this.replace("\n", "")
    return this
}

String.prototype.chop = function(){
  if (arguments.length > 0)
//     throw("wrong number of arguments")
    return null
  var str = this.chomp()
  if (str.length == this.length)
    return str.slice(0,this.length-1)
  return str
}//Acabado

String.prototype.hex = function(){
   if (this.search("0x") == 0)
     return parseInt(this)
   return isNaN(parseInt(this,16))? 0 : parseInt(this,16)
}//Acabado

String.prototype.chr = function(){
// No se puede coger el numero que se 
// mete en this y sacar un string con la conversion en hexadecimal
// Problema: this no puede ser un valor decimal en esta clase, ya que
// solo deja meter strings
  if (this.length > 1)
     return this[0]
  return this
}

String.prototype.rjust = function(){
  if (this.length >= arguments[0])
     return this
  var str = ""
  var i = 0
  while(i<(arguments[0] - this.length)){
       if (arguments.length > 1){
         str += arguments[1].length == 1? arguments[1] : arguments[1][i%arguments[1].length]
         }
       else
         str += " "
      i++
  }
  return str+this
}

String.prototype.succ = function(){
// El metodo funciona en el firebug pero no va el assert
// problema del framework
  var str = ""
  var i
  var vuelta = true
  for(i=this.length-1;i>=0 && vuelta;i--){
    if (this[i] == '>' || this[i] == '<')
       str = this[i] + str
    else if(this[i]=='z' || this[i]=='Z')
            str = (this[i]=='z'? 'a':'A') + str
         else if(this[i] == '9')
                 str = '0' + str
              else
                 str = String.fromCharCode(this[i].charCodeAt()+1) + str
  vuelta =this[i] == 'z' || this[i] == 'Z' || this[i]=='9' || this[i]=='<' || this[i]=='>'
}
  return this.substr(0,i+1)+str
}

String.prototype.to_i = function() {
var base = 10 //Base por defecto
var result = 0 //Resultado por defecto

      //Exception
if(arguments.length > 1)
   //throw ("wrong number of arguments. to_i( [base: 2 ... 36]) ")
   return null

if(arguments.length != 0)
    if(isNaN(arguments[0]) || (arguments[0] < 2) || (arguments[0] > 36))
       //throw ("Invalid argument for base (2 - 36)")
       return null
    else base = arguments[0]

return isNaN( parseInt(this,base) )? 0 : parseInt(this,base)
}

String.prototype.to_f = function() {

//Exception
if(arguments.length > 0)
 //throw ("This function no needs arguments")
   return null

return isNaN(parseFloat(this))? 0.0 : parseFloat(this) ;
}

String.prototype.strip = function() {

  return this.replace(/^\s+ | \s+$/g,'')
}

String.prototype.partition = function(){
   // El metodo no esta claro lo que hace, revisarlo

     var ary = [3] 
     var pos = this.search(arguments[0])
     if (pos < 0)
         ary = [this.substr(0,this.length), "", ""]
     else
          ary = [this.substr(0, pos), this.substr(pos,1),this.substr(pos+1,this.length-pos)]
     return ary 
}
