Write-Host "Starting World Premium Blog..." -ForegroundColor Green
Write-Host ""
Write-Host "Cleaning cache and starting server..." -ForegroundColor Yellow
Write-Host "Server will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host ""

# Change to script directory
Set-Location $PSScriptRoot

# Clean cache
if (Test-Path .next) {
    Remove-Item .next -Recurse -Force
    Write-Host "Cleaned build cache..." -ForegroundColor Green
}

# Reinstall dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Start development server
Write-Host "Starting server..." -ForegroundColor Green
npm run dev
