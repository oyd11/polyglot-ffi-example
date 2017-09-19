'use strict'
let ffi = require('ffi');
let Struct = require('ref-struct');
let ArrayType  = require('ref-array');

// Getting arrays from C interface into node/Javascript : see:
// https://github.com/node-ffi/node-ffi/issues/279
// " set the .length to the proper value "
// nice choice, but - could be nice to document it:
//   https://github.com/TooTallNate/ref-array

let doubleArray = ArrayType('double');
let floatArray  = ArrayType('float');
let shortArray  = ArrayType('short');

/*
typedef struct {
    int a;
    const double *p;
    const char *str;
} TestStruct;
*/

let CTestStruct = Struct({
  'a': 'int',
  'p': doubleArray,
  'str': 'string',
});

let somethingLib  = ffi.Library("../export-cpp/something.dylib", {
    // const double *f_arrayDouble();
    'f_arrayDouble': [doubleArray, [ ] ],
    // TestStruct f_struct();
    'f_struct': [CTestStruct, []]
  });

function f_arrayDouble() {
  let ret = somethingLib.f_arrayDouble();
  // Important: let the 'js' structure know the length of the raw C array:
  ret.length = 3; // expected length based on your C code
  return ret
}

function f_struct() {
  let ret = somethingLib.f_struct();
  ret.p.length = 3;
  return ret;
}

let arr = f_arrayDouble();
console.log('Array from C: ' ,arr);
console.log('values : ' ,arr[0], arr[1], arr[2]);

let s = f_struct();
console.log('struct from C: ' );
console.log('fields: a: ', s.a );
console.log('        p : ', s.p[0],s.p[1], s.p[2]);
console.log('        str: ', s.str );


// calling f_arrayDouble - async just for fun:


function testAsync() {
  somethingLib.f_arrayDouble.async( (err, ret) => {
      // Important: let the 'js' structure know the length of the raw C array:
      ret.length = 3; // expected length based on your C code
      console.log('__async returned__');
      console.log('arr from C: ' );
      console.log(ret[0],ret[1], ret[2]);
    } )
}

console.log('will call: testAsync()');
testAsync();
console.log('called: testAsync()');


