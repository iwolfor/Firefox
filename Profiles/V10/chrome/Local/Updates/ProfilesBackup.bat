@echo off
taskkill /im firefox.exe
::@echo �رջ����������Զ���ʼ���ݡ���
ping -n 3 127.1>nul
::ȡ�õ�ǰ����������·��
cd /d %~dp0
::����Ҫ����Ŀ���·��
set ProfilesPath=..\..\..\
::���ñ��ݴ�ŵ�·���Լ�ѹ�����ļ�����ͨ��ʹ�õ��ǳ�������ô����%date:~5,2%%date:~8,2%��
set "ArchiveName=..\..\..\..\..\ProfilesBackup .7z"
::����Ҫ������ļ��Լ��ļ��У��������Լ����
7z.exe u -up1q3r2x2y2z2w2 %ArchiveName% "%ProfilesPath%chrome" "%ProfilesPath%browser-extension-data" "%ProfilesPath%*extensions*" "%ProfilesPath%*extension-data*" "%ProfilesPath%storage" "%ProfilesPath%Plugins" "%ProfilesPath%cookies.sqlite" "%ProfilesPath%favicons.sqlite" "%ProfilesPath%places.sqlite" "%ProfilesPath%content-prefs.sqlite" "%ProfilesPath%prefs.js" "%ProfilesPath%user.js" "%ProfilesPath%xulstore.json" "%ProfilesPath%search.json.mozlz4" 
@echo ��������ɣ�



