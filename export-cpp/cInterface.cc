
#include "somethingLib.h"

static const double g_data[] = {1.0, 2.0, 3.0};
static const char *g_str = "lala lili lolo";


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


