set MATLAB=D:\MATLAB\R2019a

cd .

if "%1"=="" ("D:\MATLAB\R2019a\bin\win64\gmake"  -f InputHPFilter.mk all) else ("D:\MATLAB\R2019a\bin\win64\gmake"  -f InputHPFilter.mk %1)
@if errorlevel 1 goto error_exit

exit 0

:error_exit
echo The make command returned an error of %errorlevel%
exit 1
