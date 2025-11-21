#!/bin/bash

# CAFCA Website - Quick Deploy to Vercel
# This script automates the deployment process

echo "🏛️  CAFCA Website - Vercel Deployment"
echo "======================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI is not installed."
    echo "📦 Install with: npm install -g vercel"
    echo ""
    echo "Or deploy via web interface:"
    echo "🌐 https://vercel.com/new"
    exit 1
fi

echo "✅ Vercel CLI found"
echo ""

# Check if user is logged in
echo "🔐 Checking authentication..."
vercel whoami &> /dev/null

if [ $? -ne 0 ]; then
    echo "❌ Not logged in to Vercel"
    echo "🔑 Logging in..."
    vercel login
fi

echo ""
echo "🚀 Deploying CAFCA website to Vercel..."
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "✨ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Check your deployment URL above"
echo "   2. Test all website features"
echo "   3. Add a custom domain in Vercel dashboard"
echo "   4. Enable Analytics and Speed Insights"
echo ""
echo "📖 For help, see DEPLOYMENT.md"
echo ""
