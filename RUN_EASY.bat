@echo off
cd /d %~dp0
rd /s /q .next 2>nul
call npm install --force
call npm run dev
start http://localhost:3000
pause
