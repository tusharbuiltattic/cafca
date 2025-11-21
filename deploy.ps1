# CAFCA Website - Quick Deploy to Vercel (Windows PowerShell)
# This script automates the deployment process

Write-Host "🏛️  CAFCA Website - Vercel Deployment" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI is not installed." -ForegroundColor Red
    Write-Host "📦 Install with: npm install -g vercel" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Or deploy via web interface:" -ForegroundColor Yellow
    Write-Host "🌐 https://vercel.com/new" -ForegroundColor Blue
    exit 1
}

Write-Host "✅ Vercel CLI found" -ForegroundColor Green
Write-Host ""

# Check if user is logged in
Write-Host "🔐 Checking authentication..." -ForegroundColor Yellow
$whoami = vercel whoami 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not logged in to Vercel" -ForegroundColor Red
    Write-Host "🔑 Logging in..." -ForegroundColor Yellow
    vercel login
}

Write-Host ""
Write-Host "🚀 Deploying CAFCA website to Vercel..." -ForegroundColor Cyan
Write-Host ""

# Deploy to Vercel
vercel --prod

Write-Host ""
Write-Host "✨ Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Check your deployment URL above"
Write-Host "   2. Test all website features"
Write-Host "   3. Add a custom domain in Vercel dashboard"
Write-Host "   4. Enable Analytics and Speed Insights"
Write-Host ""
Write-Host "📖 For help, see DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host ""
