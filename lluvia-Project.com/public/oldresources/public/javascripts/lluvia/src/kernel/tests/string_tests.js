assert ("String#capitalize 1. Normal string",
        "a.capitalize()", '"Hello"',
        'a = "hello"')

assert ("String#capitalize 2. String with numbers at the first.",
        "a.capitalize()", '"123hello"',
        'a = "123hello"')

assert ("String#capitalize 3. String without changes",
        "a.capitalize()", '"Hello"',
        'a = "Hello"')

assert ("String#capitalize$B.",
        "a", '"Hello"',
        'a = "hello"; a.capitalize$B()')

assert("String#index 1. Letter position in the word.",
       '"hello".index("e")', '1',
       '"hello".index("e")')

assert("String#index 2. Letters position.",
       '"hello".index("lo")', '3',
       '"hello".index("lo")')

assert("String#index 3. Position array in the word.",
       '"hello".index(a)', '0',
       '"hello".index(a); a = "hello"')

assert("String#index 4. Letter isn't word.",
       '"hello".index("a")', "null",
       '"hello".index("a")')

assert("String#index 5. Set of letters in the word.",
       '"hello".index(/[aeiou]/, -3)', '4',
       '"hello".index(/[aeiou]/, -3)')

assert("String#insert 1. Insert one letter",
       '"hello".insert(1,"X")', '"hXello"',
       '"hello".insert(1,"X")')
       
assert("String#insert 2. Insert string",
       '"hello".insert(-3,"XY")', '"helXYlo"',
       '"hello".insert(-3,"XY")')

assert("String#ljust 1. Whitout letters.",
       '"hello".ljust(10)', '"hello     "',
       '"hello".ljust(10)')

assert("String#ljust 2. Whith one letter.",
       '"hello".ljust(10,"p")', '"helloppppp"',
       '"hello".ljust(10,"p")')

assert("String#ljust 3. Whith string.",
       '"hello".ljust(10,"pe")', '"hellopepep"',
       '"hello".ljust(10,"pe")')

assert("String#ljust 4. Whith blanks.",
       'a.ljust(10)', '"hello     "',
       'a = "hello"')

assert("String#swapcase 1. Simple sample.",
       'a.swapcase()','"Hello"',
       'a = "hELLO"')

assert("String#swapcase 2. Another string.",
       'a.swapcase()','"MoUnTaIn"',
       'a = "mOuNtAiN"')

assert("String#empty$U 1. Stream full",
      'a.empty$U()', "false",
      'a = "Full"')

assert("String#empty$U 2. Stream empty",
      'a.empty$U()', "true",
      'a = ""')

assert("String#lstrip 1. Whith spaces.",
       '"    hello    ".lstrip()', '"hello    "',
       '"    hello    ".lstrip()')

assert("String#lstrip 2. Whithout spaces.",
       '"hello".lstrip()', '"hello"',
       '"hello".lstrip()')

assert("String#downcase$B 1. Replace all letter uppercase for letter downcase or return null if not changes were made",
      'a.downcase$B()', '"hello"',
      'a = "Hello"')

assert("String#downcase$B 2. Replace all letter uppercase for letter downcase or return null if not changes were made",
      'a.downcase$B()', 'null',
      'a = "hello"')

assert("String#downcase$B 3. Replace all letter uppercase for letter downcase or return null if not changes were made",
      'a.downcase$B()', '"hello 1 2 3 ) ? "',
      'a = "Hello 1 2 3 ) ? "')

assert("String#downcase$B 4. Replace all letter uppercase for letter downcase or return null if not changes were made",
      'a.downcase$B()', 'null',
      'a = ""')

assert("String#casecmp.",
      'a.casecmp("abcde")', '1',
      'a = "abcdef"')

assert("String#casecmp.",
      'a.casecmp("abcdef")', '0',
      'a = "abcdef"')

assert("String#casecmp.",
      'a.casecmp("abcdefg")', '-1',
      'a = "abcdef"')

assert("String#casecmp.",
      'a.casecmp("ac")', '-1',
      'a = "abcdef"')

assert("String#casecmp.",
      'a.casecmp("a")', '1',
      'a = "abcdef"')

assert("String#casecmp.",
      'a.casecmp("aBcD")', '1',
      'a = "abcdef"')

assert("String#ord . Return an integer value of string",
      'a.ord()','97',
      'a = "a"')

assert("String#reverse. Return the reverse of string",
      'a.reverse()','"aloh"',
      'a = "hola"')

assert("String#include$U 1. Check is string contains the given string or character. the arguments is one character",
      'a.include$U("i")', "true",
      'a = "adios"')

assert("String#include$U 2. Check is string contains the given string or character. Argumenst empty ",
      'a.include$U("")', "true", 
      'a = "adios"')

assert("String#include$U 3. Check is string contains the given string or character. Argumenst is a string and find it",
      'a.include$U("io")', "true", 
      'a = "adios"')

assert("String#include$U 4. Check is string contains the given string or character. Argumenst is a string and not find it",
      'a.include$U("hio")', "false", 
      'a = "adios"')

assert("String#rindex 1. Returns the position of the last occurrence of the given character",
      'a.rindex("e")', "1", 
      'a = "hello"')

assert("String#rindex 2. Returns the position of the last occurrence of the given other variable",
      'a.rindex(b)', "4", 
      'a = "hello"; b = "o" ')

assert("String#rindex 3. Returns the position of the last occurrence of the given other string",
      'a.rindex("el")', "1", 
      'a = "hello"')

assert("String#rindex 4. Returns the position of the last occurrence of the given not arguments",
      'a.rindex()', "null", 
      'a = "hello"')

assert("String#center.",
       'a.center(3)', '"hello"',
       'a = "hello"')

assert("String#center.",
       'a.center(5)', '"hello"',
       'a = "hello"')

assert("String#center.",
       'a.center(11)', '"   hello   "',
       'a = "hello"')

assert("String#center.",
       'a.center(11, "12")', '"121hello121"',
       'a = "hello"')

assert("String#center.",
       'a.center(11, "1")', '"111hello111"',
       'a = "hello"')

assert("String#chr Return the first character from a string",
       'a.chr()', '"h"',
       'a = "hello"')

assert("String#chr 1. Return the string if unique character",
       'a.chr()', '"h"',
       'a = "h"')

assert("String#chr 2. Return the string void",
       'a.chr()', '""',
       'a = ""')
/*
assert("String#squeeze 1. Delete",
       'a.squeeze("l")', '"helo"',
       'a = "hello"')
*/
assert("String#chomp.", 
       'a.chomp()', '"hello"',
       'a= "hello"')

assert("String#chomp.", 
       'a.chomp()', '"hello"',
       'a= "hello\\n"')

assert("String#chomp.", 
       'a.chomp()', '"hello"',
       'a= "hello\\r"')

assert("String#chomp.", 
       'a.chomp()', '"hello"',
       'a= "hello\\r\\n"')

assert("String#chomp.", 
       'a.chomp("llo")', '"he"',
       'a= "hello"')

assert("String#chomp.", 
       'a.chomp()', '"hello \\n there"',
       'a= "hello \\n there"')
/*
assert("String#clear Returns a clear string",
       'a.clear()', '""',
       'a = "hello"')
*/
assert("String#chop.",
       'a.chop()', '"hell"',
       'a= "hello"')

assert("String#chop.",
       'a.chop()', '"hello"',
       'a= "hello\\n"')

assert("String#chop.",
       'a.chop()', '"hello"',
       'a= "hello\\r"')

assert("String#chop.",
       'a.chop()', '"hello"',
       'a= "hello\\r\\n"')

assert("String#chop.",
       'a.chop("llo")', 'null',
       'a= "hello"')

assert("String#hex 1. String numeric",
       'a.hex()', '19',
       'a= "13"')
       
assert("String#hex 2. String numeric hexadecimal",
       'a.hex()', '19',
       'a= "0x13"')

assert("String#hex 3. String whith caracter hexadecimal",
       'a.hex()', '10',
       'a= "algo"')

assert("String#hex 4. String negative numeric",
       'a.hex()', '-19',
       'a= "-13"')

assert("String#hex 5. String",
       'a.hex()', '0',
       'a= "hello"')

assert("String#rjust.",
       'a.rjust(4)', '"hello"',
       'a= "hello"')
       
assert("String#rjust.",
       'a.rjust(10)', '"     hello"',
       'a= "hello"')

assert("String#rjust.",
       'a.rjust(10,"123")', '"12312hello"',
       'a= "hello"')

assert("String#rjust.",
       'a.rjust(10,"1")', '"11111hello"',
       'a= "hello"')

assert("String#succ.",
       'a.succ()', '"abce"',
       'a = "abcd"')

assert("String#succ.",
       'a.succ()', '"aaaa"',
       'a = "zzzz"')

assert("String#succ.",
       'a.succ()', '"ibA0"',
       'a = "iaZ9"')

assert("String#succ.",
       'a.succ()', '"<<ibA0>>"',
       'a = "<<iaZ9>>"')

assert("String#to_i 1.Returns the result of interpreting leading characters in str as an integer base base (between 2 and 36)  Only numbers and not base",
      'a.to_i()', "1234",
      'a = "1234"')

assert("String#to_i 2.Returns the result of interpreting leading characters in str as an integer base base (between 2 and 36)  first numbers after character and not base",
      'a.to_i()', "1234",
      'a = "1234abce\t"')

assert("String#to_i 3.Returns the result of interpreting leading characters in str as an integer base base (between 2 and 36)  first character after numbers and character and not base",
      'a.to_i()', "0",
      'a = "abc1234abce\t"')

assert("String#to_i 4.Returns the result of interpreting leading characters in str as an integer base base (between 2 and 36)  first numbers and character and base= 2",
      'a.to_i(2)', "100",
      'a = "1100100abc"')

assert("String#to_i 5.Returns the result of interpreting leading characters in str as an integer base base (between 2 and 36)  first numbers and character and base= 16",
      'a.to_i(16)', "410",
      'a = "19ahd"')

assert("String#to_f 1.Returns the result of interpreting leading characters in str as a floating point number. Only numbers",
      'a.to_f()', "12345.0",
      'a = "12345"')

assert("String#to_f 2. First numbers after character",
      'a.to_f()', "45.67",
      'a = "45.67 degrees\t"')

assert("String#to_f 3.First character after numbers and characters",
      'a.to_f()', "0.0",
      'a = "thx1138"')

assert("String#to_f 4.First numbers and exponent",
      'a.to_f()', "1234.5",
      'a = "123.45e1"')

assert("String#to_f 5.First negative numbers and exponent",
      'a.to_f()', "-1234.5",
      'a = "-123.45e1"')

assert("String#to_f 6.First negative numbers and negative exponent",
      'a.to_f()', "-123.45",
      'a = "-1234.5e-1"')

assert("String#to_f 7.First numbers - character - numbers",
      'a.to_f()', "123",
      'a= "123abc56"')

assert("String#strip 1.Returns a copy of str with leading and trailing whitespace removed. Only character ",
      'a.strip()', "123",
      'a = "123"')

assert("String#strip 2.Returns a copy of str with leading and trailing whitespace removed. Whitespace - character - ",
      'a.strip()', "123",
      'a = "  \\\t \\\n  123"')

assert("String#strip 3.Returns a copy of str with leading and trailing whitespace removed. character - Whitespace",
      'a.strip()', "123",
      'a = "123 \\\t \\\r \\\n \t"')

assert("String#strip 4.Returns a copy of str with leading and trailing whitespace removed. character - Whitespace - character - whitespace",
      'a.strip()', "123",
      'a = "  \t  123   \t"')
      'a = "  \t  123 \\\n  \t"')*/

// El metodo no esta claro, mas en la definicion de funcion
assert("String#partition.",
       'a.partition("l")', '["he", "l", "lo"]',
       'a = "hello"')
      
assert("String#rstrip 1. Delete the spaces to right the string.",
      'a.lstrip()', '"  Hello"',
      'a = "  Hello  "')

