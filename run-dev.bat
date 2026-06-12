@echo off
echo Starting AI Engineer Portfolio...
echo.
echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Setting up directories...
call npm run setup:dirs

echo.
echo Step 3: Starting development server...
echo.
echo The application will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
