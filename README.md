# polyglot-ffi-example

FFI - (Foreign function interface) (sometimes called 'interop') to and from a "C-style" - ABI [  https://en.wikipedia.org/wiki/Application_binary_interface ]

This is a collection of minimal examples - specifically of how to transfer Arrays of Data - and Text-Strings, back and forth between programming languages.

These are usually small bridging code snippets, with some specifics. I use this as a testing template, detached from the complexities of a real project.

Directory structure:
* [export-cpp] - exports an ABI from C++ (Build this first to import them from other places)
* [import-julia06] - Julia lang 0.6
* [import-nodejs] - javascript - using Node.js ffi
* [import-swift3] - swift 3

