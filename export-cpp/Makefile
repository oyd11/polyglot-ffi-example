
something.dylib: cInterface.o
	g++ -dynamiclib -undefined suppress -flat_namespace *.o -o something.dylib

clean:
	rm *.o *.dylib

