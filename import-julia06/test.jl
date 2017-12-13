#!/usr/bin/env julia



global lib_filename = "../export-cpp/something.dylib"
global something_lib = Libdl.dlopen( lib_filename )

function f_arrayDouble()
    f = Libdl.dlsym(something_lib , :f_arrayDouble)
    cret = ccall( f , Ptr{Cdouble}, ())
    ret = unsafe_wrap(Array, cret, 3)
    return ret, cret
end

#= From C-style header- no automatic conversion for now:
typedef struct {
    int a;
    const double *p;
    const char *str;
} TestStruct;
=#

struct CTestStruct
    a::Cint
    p::Ptr{Cdouble}
    str::Cstring
end

struct TestStruct
    a::Int
    p::Vector{Float64}
    str::String
end

function f_struct()
    f = Libdl.dlsym(something_lib , :f_struct)
    cret = ccall( f , CTestStruct, ())
    ret = TestStruct(cret.a,
        unsafe_wrap(Array,cret.p, 3),
         unsafe_string(cret.str))
    return ret, cret
end

a,b = f_arrayDouble()
println("array from C: ", a)

c,d = f_struct()
println("struct from C: ", c)

function f_printPointer(p)
    f = Libdl.dlsym(something_lib , :f_printPointer)
    ccall( f , Void, (Ptr{Void},)
     , p )
end

p1 = Ptr{Void}(UInt(0x0123))
p2 = Ptr{Void}(0)

f_printPointer(p1)
f_printPointer(p2)

struct CTestA
    x::Cfloat
    y::Cfloat
end

struct CTestB
    color::Cint
end

struct CTestStructBoth
    hasA::Cint
    hasB::Cint
    a::CTestA
    b::CTestB
end

function f_structBoth()
    f = Libdl.dlsym(something_lib , :f_structBoth)
    cret = ccall( f , CTestStructBoth, ())
    return cret
end

q = f_structBoth()
println("struct from C: ", q)
println("q.a.x: ", q.a.x)
println("q.b.color: ", q.b.color)





