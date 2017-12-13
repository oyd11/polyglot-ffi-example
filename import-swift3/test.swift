

//  swiftc -import-objc-header ../export-cpp/somethingLib.h test.swift ../export-cpp/something.dylib -o test.exe
import Foundation

let cArr = f_arrayDouble()
let arr = Array(UnsafeBufferPointer(start: cArr, count: 3))
print(arr)


class TestStruct_s {
  let a: Int
  let arr: [Double]
  let str: String
  init?(cStruct s: TestStruct) {
    if nil == s.p || nil == s.str {
      return nil
    }
    a = Int(s.a)
    arr = Array(UnsafeBufferPointer(start: s.p, count: 3))
    str = String(validatingUTF8: s.str)!
  }
}

let cStruct = f_struct()
let s = TestStruct_s(cStruct: cStruct)!
print("Struct:")
print("a: ", s.a)
print("arr: ", s.arr)
print("str: ", s.str)


let p1 = UnsafeMutableRawPointer( bitPattern: 0x0123)
let p2 = UnsafeMutableRawPointer( bitPattern: 0x0)
let p3 : UnsafeMutableRawPointer? = nil 

f_printPointer(p1)
f_printPointer(p2)
f_printPointer(p3)

let q = f_structBoth()
print("struct from C: ", q)
print("q.a.x: ", q.a.x)
print("q.b.color: ", q.b.color)

