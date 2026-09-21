# Dave Maxuell - AI Researcher & Engineer Portfolio

A clean, minimalist, high-performance personal portfolio website designed for **Dave Maxuell** (AI Researcher & Engineer specializing in Multimodal Learning, RAG, Foundation Models, and Vision-Language-Action systems).

## ✨ Features

- **Editorial Bento / CV Layout**: Modern aesthetic with a sticky sidebar, status indicator, and structured sections.
- **Experience Accordions**: Expandable career and research timeline with institution badges, methodologies, and tool stacks.
- **Academic Research & Publications**: Highlighted awards (*KIISE & HCLT Excellent Paper Awards*), quantitative benchmarks, and metric tags.
- **Project Showcase**: Visual banners, architecture breakdown, and interactive modal views.
- **Recognition & Honors**: Dotted leader line timeline for awards and scholarship distinctions.
- **Interactive CV Viewer**: Built-in print-to-PDF, Markdown exporter, and full academic CV modal.
- **Responsive & Accessible**: Optimized for mobile, tablet, and wide-desktop viewports.

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 How to Save to GitHub

1. **Initialize Git repository** (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "feat: Dave Maxuell portfolio website"
   ```

2. **Create a new repository on GitHub** (e.g., `dave-maxuell-portfolio`).

3. **Link and push to your GitHub repository**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/dave-maxuell-portfolio.git
   git push -u origin main
   ```

---

## 🌐 How to Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** and import your GitHub repository.
3. Vercel will automatically detect **Vite** as the framework:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Your portfolio will be live with a free `.vercel.app` domain and automatic SSL!

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Motion
- **Fonts**: Plus Jakarta Sans
