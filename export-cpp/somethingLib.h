#ifndef __SOMETHING_LIB_H
#define __SOMETHING_LIB_H

typedef struct {
    int a;
    const double *p;
    const char *str;
} TestStruct;

#ifdef __cplusplus
extern "C" {
#endif // __cplusplus
    const double *f_arrayDouble();
    TestStruct f_struct();
#ifdef __cplusplus
}
#endif // __cplusplus



#endif // __SOMETHING_LIB_H
