
#include <cstdio>
#include "somethingLib.h"

static const double g_data[] = {1.0, 2.0, 3.0};
static const char *g_str = "lala lili lolo";

TestStructBoth initTestStructBoth() {
    TestStructBoth ret;
    ret.hasA = 0;
    ret.hasB = 0;
    return ret;
}


const double *f_arrayDouble() {
    return g_data;
}

TestStruct f_struct() {
    TestStruct t;
    t.a = 1;
    t.p = g_data;
    t.str = g_str;

    return t;
}

TestStructBoth f_structBoth() {
    TestStructBoth ret = initTestStructBoth();
    ret.a.x = 1.0f;
    ret.a.y = 2.0f;
    ret.b.color = 11;
    ret.hasA = 1;
    ret.hasB = 1;
    return ret;
}

void f_printPointer(void*p) {
    printf("Got void-pointer, it's:\n");
    printf("%p\n",p);
}


