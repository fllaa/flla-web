# Fallah Andy Prakasa - Personal Portfolio

A modern, responsive personal portfolio website showcasing projects, skills, and professional experience. Built with cutting-edge web technologies and featuring a beautiful glassmorphism design with animated mesh gradients.

## 🌟 Features

- **Modern Design**: Glassmorphism UI with animated mesh gradients and smooth transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Featured projects with detailed descriptions and live demos
- **Skills Visualization**: Interactive skill progress bars and certifications
- **Contact Form**: Functional contact form with toast notifications
- **Dark Theme**: Beautiful dark theme with custom color palette
- **Performance Optimized**: Built with Waku for optimal performance and SEO

## 🚀 Tech Stack

### Core Framework
- **[Waku](https://waku.gg/)** - Modern React framework for building fast web applications
- **React 19** - Latest React with server components support
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful SVG icons
- **Custom CSS** - Animated mesh gradients and glassmorphism effects

### Additional Libraries
- **React Hook Form** - Form handling and validation
- **TanStack Query** - Data fetching and caching
- **Next Themes** - Theme management
- **Sonner** - Toast notifications
- **Class Variance Authority** - Component variant management

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (Radix-based)
│   ├── About.tsx        # About section component
│   ├── Contact.tsx      # Contact form component
│   ├── Hero.tsx         # Hero section component
│   ├── Navigation.tsx   # Navigation component
│   ├── Projects.tsx     # Projects showcase component
│   └── Skills.tsx       # Skills and certifications component
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx   # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
├── lib/                 # Utility functions
│   └── utils.ts         # Common utilities
├── pages/               # Page components
│   ├── _layout.tsx      # Root layout component
│   └── index.tsx        # Home page component
└── styles.css           # Global styles and custom CSS
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fllaa/flla-v2.git
   cd flla-v2
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using bun (recommended)
   bun install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using bun
   bun run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server

## 🎨 Design System

### Color Palette
The project uses a custom dark theme with gradient colors:
- **Primary**: Purple gradient (`hsl(267 89% 70%)`)
- **Secondary**: Dark blue (`hsl(222 47% 11%)`)
- **Accent**: Light blue (`hsl(197 71% 73%)`)
- **Background**: Very dark blue (`hsl(222 84% 4.9%)`)

### Typography
- **Font Family**: Nunito (Google Fonts)
- **Responsive Typography**: Fluid scaling across devices

### Components
- **Glass Cards**: Glassmorphism effect with backdrop blur
- **Animated Gradients**: CSS-based mesh gradient animations
- **Hover Effects**: Smooth transitions and glow effects

## 🌐 Deployment

### Cloudflare Pages (Recommended)
The project is configured for Cloudflare Pages deployment with Wrangler:

1. **Build the project**
   ```bash
   bun run build
   ```

2. **Deploy with Wrangler**
   ```bash
   wrangler pages deploy dist
   ```

### Other Platforms
The built static files in the `dist` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔧 Customization

### Personal Information
Update the following files to customize with your information:

1. **Hero Section** (`src/components/Hero.tsx`)
   - Name and title
   - Professional description
   - Social media links

2. **About Section** (`src/components/About.tsx`)
   - Personal journey and background
   - Current focus areas
   - Professional experience

3. **Projects** (`src/components/Projects.tsx`)
   - Project details, descriptions, and links
   - Technologies used
   - Project images

4. **Skills** (`src/components/Skills.tsx`)
   - Skill categories and proficiency levels
   - Certifications

5. **Contact Information** (`src/components/Contact.tsx`)
   - Contact details
   - Social media links

### Styling
- **Colors**: Modify `tailwind.config.ts` for color scheme changes
- **Animations**: Update `src/styles.css` for custom animations
- **Layout**: Adjust component layouts in respective files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Static Site Generation**: Pre-rendered for optimal performance
- **Image Optimization**: Optimized images with proper loading
- **Code Splitting**: Automatic code splitting with Waku
- **CSS Optimization**: Purged and minified CSS
- **Bundle Analysis**: Optimized bundle size

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Fallah Andy Prakasa**
- Website: [flla.my.id](https://flla.my.id)
- GitHub: [@fllaa](https://github.com/fllaa)
- LinkedIn: [Fallah Andy Prakasa](https://linkedin.com/in/fallah-andy-prakasa)

---

⭐ If you found this project helpful, please give it a star on GitHub!