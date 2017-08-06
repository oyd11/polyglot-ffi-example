

test: test.swift ../export-cpp/something.dylib ../export-cpp/somethingLib.h
	cp ../export-cpp/something.dylib .
	swiftc -import-objc-header ../export-cpp/somethingLib.h test.swift something.dylib -o test.exe

clean:
	rm *.dylib test.exe
