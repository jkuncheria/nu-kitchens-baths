<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/11xxbu1uJlazDz6EvlArJ2-n3GQXGGJDR

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

1. Push your code to GitHub (already done ✅)

2. **Important:** Add your API key in Vercel's dashboard:
   - Go to your Vercel project dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add a new variable:
     - **Name:** `VITE_GEMINI_API_KEY`
     - **Value:** Your Gemini API key
     - **Environment:** Production, Preview, and Development (select all)
   - Click **Save**
   - Redeploy your application

3. The app will automatically redeploy when you push to GitHub, or you can manually trigger a redeploy from the Vercel dashboard.
