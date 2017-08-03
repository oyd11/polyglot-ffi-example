



global lib_filename = "../export-cpp/something.dylib"
global something_lib = Libdl.dlopen( lib_filename )

function f_arrayDouble()
    f = Libdl.dlsym(something_lib , :f_arrayDouble)
    cret = ccall( f , Ptr{Cdouble}, ()) 
    ret = unsafe_wrap(Array, cret, 3)
    return ret, cret
end

#
#typedef struct {
#    int a;
#    const double *p;
#    const char *str;
#} TestStruct;
#

mutable struct CTestStruct
    a::Cint
    p::Ptr{Cdouble}
    str::Cstring
end

mutable struct TestStruct
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
c,d = f_struct()

