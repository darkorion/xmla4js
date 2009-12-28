REM  
REM script: compile.bat
REM description: compiles Xmla.js using the Google closure compiler
REM see: http://code.google.com/intl/nl-NL/closure/compiler/docs/overview.html
REM 

REM Set the XMLA_HOME variable to the directory to which you checked out the xmla4js project directory 
SET XMLA_HOME="D:\Servers\biserver-ce-3.5.0.stable\biserver-ce\tomcat\webapps\xmla4js"

REM Set the CLOSURE_COMPILER variable to the location of the closure compiler jar file
SET CLOSURE_COMPILER="D:\Applications\closure-compiler\compiler-latest\compiler.jar"

java -jar "%CLOSURE_COMPILER%" --js "%XMLA_HOME%/src/Xmla.js" --js_output_file "%XMLA_HOME%/js/Xmla-compiled.js