'use strict'
// see:  https://github.com/cmake-js/fastcall#node-ffi-compatible-interface
let fastcall = require('fastcall');
let ffi = fastcall.ffi;
let ref = fastcall.ref;
let Struct = fastcall.StructType;
let ArrayType  = fastcall.ArrayType;

let doubleArray = ArrayType('double');
//let floatArray  = ArrayType('float');
//let shortArray  = ArrayType('short');

let somethingLib  = new fastcall.Library("../export-cpp/something.dylib");
somethingLib.array({ DoubleArray: 'double' })
console.log('arrays::')
console.log(somethingLib.arrays)
somethingLib.function({ f_arrayDouble: ['DoubleArray', []] })
console.log('functions::')
console.log(somethingLib.functions)

/*
ffi.Library("../export-cpp/something.dylib", {
    // const double *f_arrayDouble();
    'f_arrayDouble': [doubleArray, [ ] ]
  });
*/

function f_arrayDouble() {
    let qq = somethingLib.interface.f_arrayDouble();
    console.log("zz")
    console.log(qq)
     qq.length = 3
    console.log(qq.ref())
    console.log(qq.deref())

    console.log(qq[0])
    console.log(qq[1])
    console.log(qq[2])
}
console.log("----")

f_arrayDouble() 
console.log("----")

/*
function f_struct() {
  let ret = somethingLib.f_struct();
  ret.p.length = 3;
  return ret;
} */

//let arr = f_arrayDouble();
//console.log('Array from C: ' ,arr);
//console.log('values : ' ,arr[0], arr[1], arr[2]);

/*
let s = f_struct();
console.log('struct from C: ' );
console.log('fields: a: ', s.a );
console.log('        p : ', s.p[0],s.p[1], s.p[2]);
console.log('        str: ', s.str );
*/


// calling f_arrayDouble - async just for fun:

/*

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

*/

