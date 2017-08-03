'use strict'
let ref = require('ref');
let ffi = require('ffi');
let Struct = require('ref-struct');
let CString = ref.types.CString;

/// Pointer types
let doublePtr = ref.refType('double');
let floatPtr  = ref.refType('float');
let shortPtr  = ref.refType('short');
let longPtr   = ref.refType('long');
let boolPtr   = ref.refType('bool');
/// Array types
let ArrayType  = require('ref-array');
let doubleArray = ArrayType('double');
//let doubleArray = ArrayType(ref.types.double);
let floatArray  = ArrayType('float');
let shortArray  = ArrayType('short');

let CTestStruct = Struct({
  'a': 'int', 
  'p': doubleArray,
  'str': 'string',
});

class SomethingLib {
  constructor(libName) {
    this.lib = ffi.Library("../export-cpp/something.dylib", {
    // const double *f_arrayDouble();
      'f_arrayDouble': ['doublePtr', [ ] ],
    // TestStruct f_struct();
      'f_struct': ['CTestStruct', []]
    });
  }
  f1() {
    return this.f_arrayDouble();
  }
  f2() {
    return this.f_struct();
  }
}

l = new SomethingLib()

q = l.f1()
// l.f2()



