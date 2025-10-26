@echo off
cd /d %~dp0
rd /s /q .next 2>nul
rd /s /q node_modules 2>nul
npm install next@latest
npm run dev
start http://localhost:3000
pause
