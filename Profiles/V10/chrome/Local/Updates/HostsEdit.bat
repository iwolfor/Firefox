@echo off

%1 %2
ver|find "5.">nul&&goto :st
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :st","","runas",1)(window.close)&goto :eof
:st
copy "%~0" "%windir%\system32\" 



@echo �������޸�Hosts�ļ��������棻����㱻��ʾ��ΪȨ��������ܾ����棬���Թ���Ա������д˳���
@notepad "%SystemRoot%\system32\drivers\etc\hosts" 

@ipconfig /flushdns 
@echo ����ˢ�»��棬������Զ��˳�������
@exit 