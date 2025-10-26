@echo off
cd /d %~dp0
rd /s /q .next 2>nul
npm cache clean --force
npm install --no-optional
npm run dev
start http://localhost:3000
pause
