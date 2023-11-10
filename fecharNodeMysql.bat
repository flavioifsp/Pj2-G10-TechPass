@echo off

taskkill   /im xampp-control.exe
taskkill  /f /im node.exe
taskkill   /im mysqld.exe
taskkill   /im cmd.exe
exit
