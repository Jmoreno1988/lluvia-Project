
assert("Array#uniq 1. Ordered elements", 
      "a", '["a", "b", "c"] ',  
      'a = ["a", "a", "b", "b", "c"].uniq()' )

assert("Array#uniq 2. Unordered elements", 
      "a", '["a", "b", "c"] ',  
      'a = ["a", "b", "a", "b", "c"].uniq()' )

assert("Array#uniq 3. Integers", 
      "a", '[2, 1, 3] ',  
      'a = [2, 1, 2, 1, 2, 2, 3, 1, 1].uniq()' )

assert("Array#uniq!. With changes.", 
      "a", "[1, 2, 3]", 
      "a = [ 1, 2, 1, 2, 2, 3, 1, 2, 3]; a.uniq$B()")

assert("Array#uniq!. With no changes.",
       "a.uniq$B()", "null", "a = [1, 2, 3]")

assert("Array#clear.",
      "a", "[]",
      "a = [1,2,3]; a.clear()")
      
assert("Array#equals$U 1. Identic arrays",
      "a.equals$U(b)", "true",
      "a = [1,2,3]; b = [1,2,3]") 
      
assert("Array#equals$U 2. Distinct arrays",
      "a.equals$U(b)", "false",
      "a = [1,2,3]; b = [3,4,5]")
      
assert("Array#equals$U 3. Arrays with distinct length",
      "a.equals$U(b)", "false",
      "a = [1,2,3]; b = [1,2,3,4]")
      
assert("Array#first 1. without parameters",
      "a.first()", "1",
      "a = [1,2,3]")            

assert("Array#first 2. with parameters",
      "a.first(3)", "[1,2,3]",
      "a = [1,2,3,4,5,6]")

assert("Array#first 3. Empty array with parameters",
      "a.first(2)", "null",
      "a = []")

assert("Array#first 4. Empty array without parameters",
      "a.first()", "null",
      "a = []")

assert("Array#last 1. without parameters",
      "a.last()", "3",
      "a = [1,2,3]")            

assert("Array#last 2. with parameters",
      "a.last(3)", "[4,5,6]",
      "a = [1,2,3,4,5,6]")

assert("Array#last 3. Empty array with parameters",
      "a.last(2)", "null",
      "a = []")

assert("Array#last 4. Empty array without parameters",
      "a.last()", "null",
      "a = []")

assert("Array#include$U 1. Search a item in array with parameter",
      "a.include$U(2)", "true",
      "a = [1, 2, 3, 4, 5]")

assert("Array#include$U 2. Search a item in array with parameter and it don't found ",
      "a.include$U(9)", "false",
      "a = [1, 2, 3, 4, 5]")

assert("Array#include$U 3. Search a item in array with parameter. Wrong number of arguments",
      "a.include$U(9, 2)", "null",
      "a = [1, 2, 3, 4, 5]")

assert("Array#replace 1. with parameters",
       'a.replace(["y","z"])', '["y","z"]',
       'a = ["a","b","c"]') 
       
assert("Array#replace 2. without parameters",
       'a.replace()', "null",
       'a = ["a","b","c"]') 

assert("Array#replace 3. Empty array",
       "a.replace([])", "[]",
       'a = ["a","b","c"]') 

assert("Array#replace 4. with other array",
       "a.replace(b)", '["f","g"]',
       'a = ["a","b","c"]; b = ["f","g"]')

assert("Array#replace 5. Errors, more than one array.", 
       'a.replace(a,b)', "null",
       'a = ["a","b","c"]; b = ["f","g"]') 

assert("Array#replace 6. Errors, parameter is not array.", 
       'a.replace("a")', "null",
       'a = ["a","b","c"]') 

assert("Array#erase$B 1. Delete array's elements with parameter",// Problemas con la comprobación. El test da failed cuando debería de dar Ok.
      "a.erase$B(2)", '[1, 3]',
      "a = [1, 2, 2, 2, 3]")

assert("Array#erase$B 2. Delete array's elements with parameter and not found",
      "a.erase$B(4)", "null",
      "a = [1, 2, 2, 2, 3]")

assert("Array#erase_at$B 1. Delete array's elements with parameters",// Problemas con la comprobación. El test da failed cuando debería de dar Ok.
      "a.erase_at$B(2)", 'a = [ "ant", "bat", "dog"]',
      'a = [ "ant", "bat", "cat", "dog"]')

assert("Array#erase_at$B 2. Delete array's elements with parameters higher than the array",
      "a", '[ "ant", "bat", "cat", "dog"]',
      'a = [ "ant", "bat", "cat", "dog"]; a.erase_at$B(6)')

assert("Array#assoc 1. with existing parameter",
       'ary.assoc("animals")','["animals","cat","dog"]',
       'a = ["letters","a","b"]; b = ["animals","cat","dog"]; ary = [a, b]')

assert("Array#assoc 2. without existing parameter",
       'ary.assoc("cars")','null',
       'a = ["letters","a","b"]; b = ["animals","cat","dog"]; ary = [a, b]')

assert("Array#at 1. with a positive index.",
       'a.at(1)','"cat"',
       'a = ["dog","cat","hamster","fish"]')
       
assert("Array#at 2. with a negative index.",
       'a.at(-1)','"fish"',
       'a = ["dog", "cat", "hamster","fish"]')
 
assert("Array#at 3. with a negative index.",
       'a.at(-7)','null',
       'a = ["dog", "cat", "hamster","fish"]')

assert("Array#compact.",
       'a.compact()','[1,2,3]',
       'a = [1,null,2,3,null]')
       
assert("Array#drop.",
       "a.drop(2)","[3,4,5]",
       "a = [1,2,3,4,5]")       

assert("Array#flatten 1. without parameter",
       "a.flatten()","[11,12,21,22,31,32]",
       "a = [11,12,[21,22,[31,32]]]")

assert("Array#flatten 2. with level",//Problemas con la comprobación. El test da failed cuando debería ser Ok.
       "a.flatten(1)","[11,12,21,22,[31,32]]",
       "a = [11,12,[21,22,[31,32]]]")

assert("Array#index 1. with a existing object",
       'a.index("c")',"2",
       'a = ["a","b","c"]')

assert("Array#index 2. with a unexisting object",
       'a.index("z")',"null",
       'a = ["a","b","c"]')
       
assert("Array#product.",
      "a.product([4,5])","[[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]]",
      "a = [1,2,3]")

assert("Array#rassoc 1. With a existing element.",
       'a.rassoc("two")','[2, "two"]',
       'a = [[1, "one"],[2, "two"],[3, "three"]]')

assert("Array#rassoc 2. Without existing element.",
       'a.rassoc("four")','null',
       'a = [[1, "one"],[2, "two"],[3, "three"]]')

assert("Array#rindex 1. With a existing element",
       'a.rindex("b")',"3",
       'a = ["a","b","c","b","d"]')

assert("Array#rindex 2. Without existing element.",
       'a.rindex("z")',"null",
       'a = ["a","b","c","b","d"]')

assert("Array#rotate 1. With negative index.",
       "a.rotate(-2)",'["c","d","a","b"]',
       'a = ["a","b","c","d"]')

assert("Array#rotate 2. Other example.",
       "a.rotate(-3)",'["b","c","d","a"]',
       'a = ["a","b","c","d"]')
              
assert("Array#rotate 3. Whithout argument", //Problemas con la comprobación. El test muestra void.
       "a.rotate()", '["b","c","d","a"]',
       'a = ["a","b","c","d"]')
       
assert("Array#rotate 4. Whith positive arguments", 
       "a.rotate(2)", '["c","d","a","b"]',
       'a = ["a","b","c","d"]')

assert("Array#count 1. Without parameters.",
       "a.count()",'3',
       'a = ["a","b","c"]')
       

assert("Array#count 2. With paremeter.",
       "a.count('a')",'1',
       'a = ["a","b","c"]')
       

assert("Array#count 3. With condition.",
       "a.count(function(obj){ return obj > 'a' })",'2',
       'a = ["a","b","c"]')
       
assert("Array#take 1.",
       "a.take(3)","[1,2,3]",
       "a = [1,2,3,4,5,6]") 
       
assert("Array#take_while",
       "a.take_while(function(obj){return obj<3? obj: null})","[1,2]",
       "a = [1,2,3,4,5,6]")       
      
assert("Array#shuffle",
       "a.shuffle() == a","false",
       "a = [1,2,3,4]")

/*       
assert("Array#transpose",
       "a.transpose()","[[1,3,5],[2,4,6]]",
       "a = [[1,2],[3,4],[5,6]")       

assert("Array#collect.",
       'a.collect(function(obj){ return obj + "!" })','["a!","b!","c!"]',
       'a = ["a","b","c"]')

assert("Array#collect$B.",
       'a','["a!","b!","c!"]',
       'a = ["a","b","c"]; a.collect$B(function(obj){ return obj + "!" }')

assert("Array#combination.to_a 1.",
       'a.combination(1).to_a',"[[1],[2],[3],[4]",
       "a = [1,2,3,4]")

assert("Array#combination.to_a 2. Other example",
       "a.combination(2).to_a","[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
       "a = [1,2,3,4]")

assert("Array#combination.to_a 3.",
        "a.combination(3).to_a","[[1,2,3],[1,2,4],[1,3,4],[2,3,4]]",
        "a = [1,2,3,4]")

assert("Array#combination.to_a 4.",
       "a.combination(4).to_a","[[1,2,3,4]]",
       "a = [1,2,3,4]")

assert("Array#combination.to_a 5.",
       "a.combination(0).to_a","[[]]",
       "a = [1,2,3,4]")

assert("Array#combination(5).to_a 6.",
       "a.combination(5).to_a","[]", //no combinations of length 5
       "a = [1,2,3,4]")

assert"Array#compact$B.",
      "a","[1,2,3,4]",
      "a = [1, null, 2, 3, null, 4]; a.compact$B()")
*/





