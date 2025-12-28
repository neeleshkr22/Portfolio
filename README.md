# Modern Developer Portfolio

A sleek, modern portfolio website built with Next.js 16, featuring a clean single-page design with smooth animations. Showcases professional experience, projects, skills, and GitHub activity with a developer-focused aesthetic.

## ✨ Features

- **Modern Single-Page Design:** Clean, professional layout inspired by contemporary developer portfolios
- **Responsive & Mobile-First:** Fully optimized for all screen sizes
- **Real GitHub Activity:** Live contribution graph powered by GitHub API
- **Smooth Animations:** Powered by Framer Motion for elegant transitions
- **Custom Typography:** Domine serif for headings, Roboto Mono for code elements, Cause for body text
- **Work Experience Timeline:** Expandable cards with detailed role descriptions
- **Project Showcase:** Featured projects with live demos and GitHub links
- **Skills Grid:** Visual representation of technical stack with icons
- **Dark Theme:** Optimized for comfortable viewing

## 🚀 Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [GitHub Contributions API](https://github.com/grubersjoe/github-contributions-api) - Activity data

## 📁 Project Structure

```
app/
  globals.css          # Global styles with custom fonts
  layout.tsx           # Root layout with theme provider
  page.tsx             # Main portfolio page
  projects/
    page.tsx           # Dedicated projects page
components/
  theme-provider.tsx   # Dark mode provider
lib/
  utils.ts             # Utility functions
public/
  Profilepic.jpg       # Profile picture & favicon
  joget.jpg            # Company logos
  deloitte.jpg
  hashtag.jpg
  doctool.png          # Project images
  peace.jpg
  inroute.png
  Neelesh.pdf          # Resume
```

## 📦 Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/neeleshkr22/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Run the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 🛠️ Customization

### Update Personal Info
Edit the data arrays in `app/page.tsx`:
- `experiences` - Work experience entries
- `projects` - Portfolio projects
- `skills` - Technical skills with icons

### Change Profile Picture
Replace `public/Profilepic.jpg` - it's used for both profile image and favicon

### Update Resume
Replace `public/Neelesh.pdf` with your resume

### Modify Fonts
Edit font imports in `app/globals.css`:
- Domine (name/headings)
- Roboto Mono (code/titles)
- Cause (body text)

### GitHub Activity
Update the GitHub username in the API call (line ~142 in `app/page.tsx`):
```typescript
fetch('https://github-contributions-api.jogruber.de/v4/YOUR_USERNAME?y=last')
```

## 📱 Pages

- **/** - Main portfolio (About, Experience, Projects, Skills, GitHub Activity)
- **/projects** - Detailed projects showcase

## 🎨 Design Features

- Japanese banner ("開発者" - Developer) with tooltip
- Circular company logos for experience
- Live time display with seconds
- Gradient contribution heatmap
- Corner-decorated CTA section
- Smooth scroll animations
- Hover effects and transitions

## 📄 License

This project is licensed under the MIT License.

---

> Built with 💻 by [Neelesh Kumar](https://github.com/neeleshkr22)  
> Last Updated: December 2025
