:: RunningCheese Firefox ¸üÐÂ³ÌÐò
wget -c -N --no-check-certificate https://github.com/runningcheese/RunningCheese-Firefox/raw/master/Updates/UpdatesFiles.zip
7z x UpdatesFiles.zip -y
move /y "%cd%\user.js" "%~dp0..\..\..\..\V10"
move /y "%cd%\userChrome.css" "%~dp0..\..\..\chrome"
move /y "%cd%\userContent.css" "%~dp0..\..\..\chrome"
move /y "%cd%\_addmenu.js" "%~dp0..\..\..\chrome\Local"
move /y "%cd%\_keychanger.js" "%~dp0..\..\..\chrome\Local"
move /y "%cd%\*.uc.js" "%~dp0..\..\SubScript\"
move /y "%cd%\*.css" "%~dp0..\..\css\"
move /y "%cd%\*.bat" "%~dp0..\..\Local\Updates\"
move /y "%cd%\*.png" "%~dp0..\..\images\icons\"
move /y "%cd%\*.xpi" "%~dp0..\..\..\extensions\"
del /f UpdatesFiles.zip

exit