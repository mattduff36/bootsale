# How to Add Git to Your Windows PATH

## Method 1: Find and Add Git to PATH (If Already Installed)

### Step 1: Locate Git Installation

Git is usually installed in one of these locations:
- `C:\Program Files\Git\bin`
- `C:\Program Files\Git\cmd`
- `C:\Program Files (x86)\Git\bin`
- `C:\Program Files (x86)\Git\cmd`

To check if Git is installed, open PowerShell and try:

```powershell
# Check common locations
Test-Path "C:\Program Files\Git\bin\git.exe"
Test-Path "C:\Program Files\Git\cmd\git.exe"
```

If either returns `True`, Git is installed there.

### Step 2: Add Git to PATH

**Option A: Using Windows Settings (Windows 10/11)**

1. **Open System Environment Variables**
   - Press `Win + X` and select "System"
   - OR: Right-click "This PC" → Properties
   - Click "Advanced system settings" on the left
   - Click "Environment Variables" button at the bottom

2. **Edit PATH Variable**
   - In the "System variables" section (bottom half), find "Path"
   - Click "Path" and then click "Edit"
   - Click "New"
   - Add the Git paths:
     ```
     C:\Program Files\Git\bin
     C:\Program Files\Git\cmd
     ```
   - Click "OK" on all dialogs

3. **Restart PowerShell/Terminal**
   - Close and reopen any terminal windows
   - Test: `git --version`

**Option B: Using PowerShell (Quick Method)**

Run PowerShell **as Administrator**:

```powershell
# Add Git to User PATH (current user only)
[Environment]::SetEnvironmentVariable(
    "Path",
    [Environment]::GetEnvironmentVariable("Path", "User") + ";C:\Program Files\Git\bin;C:\Program Files\Git\cmd",
    "User"
)

# OR add to System PATH (all users)
[Environment]::SetEnvironmentVariable(
    "Path",
    [Environment]::GetEnvironmentVariable("Path", "Machine") + ";C:\Program Files\Git\bin;C:\Program Files\Git\cmd",
    "Machine"
)
```

Then restart your terminal.

## Method 2: Fresh Git Installation (Recommended if Git Not Found)

### Step 1: Download Git

1. Go to: **https://git-scm.com/download/win**
2. Download will start automatically (Git for Windows)

### Step 2: Install Git

1. **Run the installer** (Git-2.xx.x-64-bit.exe)

2. **Important Installation Options:**
   - **Adjusting your PATH environment**: Select **"Git from the command line and also from 3rd-party software"** ✅
     - This automatically adds Git to PATH
   - **Choose default editor**: Select your preferred editor or keep default
   - **Configuring line endings**: Keep default (Checkout Windows-style, commit Unix-style)
   - **Terminal emulator**: Keep default (MinTTY)
   - Everything else: Keep defaults

3. **Click "Install"**

4. **Verify Installation**
   - Open **new** PowerShell window
   - Run: `git --version`
   - Should show: `git version 2.xx.x.windows.x`

## Method 3: Quick Test If Git is Already Available

Before doing anything, try these in PowerShell:

```powershell
# Try full path
& "C:\Program Files\Git\bin\git.exe" --version

# Try winget (if you have it)
winget list --name Git

# Try where command
where.exe git
```

If any of these work, you just need to add the path shown.

## Verify PATH Was Updated

After adding Git to PATH, open a **new** PowerShell window and test:

```powershell
# Check if git is in PATH
git --version

# Should output something like:
# git version 2.43.0.windows.1
```

## Now You Can Push to GitHub

Once Git is in your PATH, navigate to your project and run:

```powershell
# Navigate to project
cd "C:\Users\mattd\Data\Websites\CarBootSaleDOTcom"

# Initialize git
git init

# Set default branch name
git branch -M main

# Add remote repository
git remote add origin https://github.com/mattduff36/bootsale.git

# Stage all files
git add .

# Check what will be committed
git status

# Create initial commit
git commit -m "Initial commit: Next.js coming soon page"

# Push to GitHub
git push -u origin main
```

### If Push Requires Authentication

You may need to authenticate. Git will prompt you to sign in via browser or you can use:

**Personal Access Token (PAT):**
1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Copy the token
4. When pushing, use your GitHub username and the token as password

**OR use GitHub CLI:**
```powershell
# Install GitHub CLI
winget install GitHub.cli

# Login
gh auth login

# Then git push will work automatically
```

## Troubleshooting

### "git is not recognized" after adding to PATH
- **Solution**: Close ALL terminal windows and open a new one
- PATH changes don't affect already-open terminals

### Can't find Git installation
- **Solution**: Search in File Explorer for `git.exe`
- OR reinstall Git from https://git-scm.com/download/win

### Permission denied when editing PATH
- **Solution**: Run PowerShell as Administrator
- Right-click PowerShell → "Run as Administrator"

### Git commands work but show errors
- **Solution**: Configure Git user:
  ```powershell
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

## Alternative: Use GitHub Desktop Instead

If you prefer a GUI and want to avoid PATH issues entirely:

1. Download **GitHub Desktop**: https://desktop.github.com/
2. Install and sign in
3. Add your local repository
4. Commit and push with clicks (no command line needed)

This is often easier for Windows users!

---

**Need help?** Let me know if you encounter any issues during the installation or PATH setup.
