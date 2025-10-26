@echo off
cd /d %~dp0
rmdir /s /q .next 2>nul
rmdir /s /q node_modules 2>nul
npm install
npm run dev
start http://localhost:3000
pause
