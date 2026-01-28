# Git Setup and Push Guide

## Your Repository
**GitHub URL**: https://github.com/mattduff36/bootsale.git

## Option 1: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop** (if not installed)
   - Visit: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Add this repository**
   - Open GitHub Desktop
   - File → Add Local Repository
   - Browse to: `C:\Users\mattd\Data\Websites\CarBootSaleDOTcom`
   - Click "Add Repository"

3. **Create initial commit**
   - You'll see all files listed
   - Enter commit message: "Initial commit: Next.js coming soon page"
   - Click "Commit to main"

4. **Publish to GitHub**
   - Click "Publish repository"
   - Ensure it's published to: mattduff36/bootsale
   - Click "Publish repository"

Done! Your code is now on GitHub.

## Option 2: Using Visual Studio Code

1. **Open VS Code**
   - Open folder: `C:\Users\mattd\Data\Websites\CarBootSaleDOTcom`

2. **Initialize Git**
   - Open Source Control panel (Ctrl+Shift+G)
   - Click "Initialize Repository"

3. **Stage and commit**
   - Click "+" next to "Changes" to stage all files
   - Enter commit message: "Initial commit: Next.js coming soon page"
   - Click checkmark to commit

4. **Push to GitHub**
   - Click "..." menu in Source Control
   - Select "Remote" → "Add Remote"
   - Enter: `https://github.com/mattduff36/bootsale.git`
   - Name: `origin`
   - Click "..." menu → "Push"

## Option 3: Using Git Command Line

### If Git is installed but not in PATH:

Find where Git is installed (common locations):
- `C:\Program Files\Git\bin\git.exe`
- `C:\Program Files (x86)\Git\bin\git.exe`

Then run these commands (replace git path if needed):

```powershell
# Navigate to project
cd "C:\Users\mattd\Data\Websites\CarBootSaleDOTcom"

# Initialize git
& "C:\Program Files\Git\bin\git.exe" init

# Set default branch to main
& "C:\Program Files\Git\bin\git.exe" branch -M main

# Add remote
& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/mattduff36/bootsale.git

# Stage all files
& "C:\Program Files\Git\bin\git.exe" add .

# Create initial commit
& "C:\Program Files\Git\bin\git.exe" commit -m "Initial commit: Next.js coming soon page"

# Push to GitHub
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

### If Git is not installed:

1. **Download Git for Windows**
   - Visit: https://git-scm.com/download/win
   - Install with default options
   - Restart your terminal/PowerShell

2. **Then run these commands**:

```powershell
cd "C:\Users\mattd\Data\Websites\CarBootSaleDOTcom"
git init
git branch -M main
git remote add origin https://github.com/mattduff36/bootsale.git
git add .
git commit -m "Initial commit: Next.js coming soon page"
git push -u origin main
```

## Option 4: Manual Upload via GitHub Web Interface

1. **Go to**: https://github.com/mattduff36/bootsale
2. Click "uploading an existing file"
3. Drag and drop these folders/files:
   - `app/` folder
   - `components/` folder
   - `lib/` folder
   - `public/` folder
   - All config files (.eslintrc.json, next.config.ts, package.json, etc.)
   - All .md files
4. Commit the files

**Note**: This is less ideal as you'll lose the ability to easily sync changes later.

## After Pushing to GitHub

Once your code is on GitHub, you can deploy to Vercel:

1. **Go to Vercel**: https://vercel.com
2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `mattduff36/bootsale`
3. **Configure**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - No environment variables needed yet
4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live!

## What Gets Pushed

The following will be committed to GitHub:

**App Code**:
- ✅ app/ (layout, page, styles)
- ✅ components/ (Hero, Grid, Footer)
- ✅ lib/ (brand constants)
- ✅ public/ (logos, icons, robots.txt)

**Configuration**:
- ✅ package.json
- ✅ tsconfig.json
- ✅ tailwind.config.ts
- ✅ next.config.ts
- ✅ postcss.config.mjs
- ✅ .eslintrc.json
- ✅ vercel.json
- ✅ .gitignore

**Documentation**:
- ✅ README.md
- ✅ DEPLOYMENT.md
- ✅ PROJECT_SUMMARY.md
- ✅ DESIGN_ASSETS.md
- ✅ IMPLEMENTATION_CHECKLIST.md

**Not Pushed** (per .gitignore):
- ❌ node_modules/
- ❌ .next/
- ❌ .env.local

**Design Assets**:
- The original design folders will be pushed (they're not in .gitignore)
- If you want to exclude them, add to .gitignore:
  ```
  CarBoot Sales Stuff/
  Carboot_Icons/
  Carbootsale/
  New-Square-Logo/
  New-Square-Logo-without_dot_com/
  *.jpg
  ```

## Recommended: GitHub Desktop

For the easiest experience, I recommend using **GitHub Desktop**. It handles everything visually and is perfect for this workflow.

## Need Help?

If you encounter any authentication issues:
- GitHub Desktop: Will prompt you to sign in
- Git CLI: May need a Personal Access Token
  - Go to: GitHub Settings → Developer Settings → Personal Access Tokens
  - Generate new token with `repo` scope
  - Use token as password when pushing

---

**Ready to deploy?** Once code is on GitHub, Vercel deployment takes less than 2 minutes! 🚀
