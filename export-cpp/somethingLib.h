#ifndef __SOMETHING_LIB_H
#define __SOMETHING_LIB_H

typedef struct {
    int a;
    const double *p;
    const char *str;
} TestStruct;

// 'nested' struct:
typedef struct {
    float x;
    float y;
} TestA;

typedef struct {
    int color;
} TestB;

typedef struct {
    int hasA;
    int hasB;
    TestA a;
    TestB b;
} TestStructBoth;

#ifdef __cplusplus
extern "C" {
#endif // __cplusplus
    const double *f_arrayDouble();
    TestStruct f_struct();
    void f_printPointer(void*p);
    TestStructBoth f_structBoth();
#ifdef __cplusplus
}
#endif // __cplusplus



#endif // __SOMETHING_LIB_H
