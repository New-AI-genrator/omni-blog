@echo off
cd /d "%~dp0"
echo Starting World Premium Blog...
echo.
echo Cleaning cache and starting server...
echo.
echo Server will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Clean everything
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules

REM Reinstall dependencies
npm install

REM Start development server
npm run dev

pause
