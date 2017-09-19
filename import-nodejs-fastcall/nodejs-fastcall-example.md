
'fastcall' is documented nicely, and I understand the two packages might merge soonish.

Right now - trying to add a function prototype with an Array as a return value - gives me an assert

 at FastFunction._makeCallerFunc (./node_modules/fastcall/lib/FastFunction.js:320:12)
AssertionError [ERR_ASSERTION]: false == true


see:
https://github.com/cmake-js/fastcall#node-ffi-compatible-interface

Using the 'cmake-fs' 'fastcall' wrapper instead of TooTallNate's 'ffi'

https://github.com/cmake-js/fastcall



