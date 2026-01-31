# Interactive Terminal Portfolio

> A modern, interactive terminal-style portfolio website built with React, TypeScript, and Vite.

![Portfolio Preview](https://github.com/sidthebuilder/Portfolio-/blob/main/attached_assets/preview.png?raw=true)

**Live Demo:** [https://sidthebuilder.github.io/Portfolio-/](https://sidthebuilder.github.io/Portfolio-/)

## ✨ Features

- **Interactive Terminal Interface**: Fully functional command-line experience with autocomplete and command history
- **AI-Powered Assistant**: Integrated Google Gemini AI to answer questions about the portfolio owner
- **PDF Resume Generation**: Automatically generates a professional PDF resume on demand
- **Dynamic Theming**: Multiple theme options including Dark, Light, Matrix, and custom themes
- **Quick Actions**: Convenient navigation buttons for About, Projects, Skills, Contact, and Resume
- **Keyboard Shortcuts**: 
  - `Tab` for autocomplete
  - `↑/↓` arrows for command history
  - `Ctrl+L` to clear terminal
- **Responsive Design**: Optimized for desktop and mobile devices
- **No Browser Caching**: Implements cache control headers for always-fresh content

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- Wouter (routing)
- TailwindCSS

**Backend/Services:**
- Express.js
- Google Generative AI (Gemini)
- PostgreSQL (Drizzle ORM)

**Utilities:**
- jsPDF & html2canvas (PDF generation)
- React Query (data fetching)
- Zod (validation)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sidthebuilder/Portfolio-.git

# Navigate to directory
cd Portfolio-

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your GEMINI_API_KEY to .env

# Start development server
npm run dev
```

## 🚀 Deployment

This portfolio is deployed on GitHub Pages using manual deployment for maximum security and control.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
# Deploy the built files to gh-pages branch
git subtree push --prefix dist/public origin gh-pages
```

For detailed deployment instructions, see the [deployment guide](docs/deployment.md).

## 📝 Available Commands

Type `help` in the terminal to see all available commands:

- `about` - Learn about the portfolio owner
- `projects` - View featured projects
- `skills` - See technical skills
- `contact` - Get contact information
- `resume` - Download PDF resume
- `ai [question]` - Ask the AI assistant a question
- `clear` - Clear the terminal
- `theme [name]` - Change the theme

## 🎨 Themes

Available themes:
- `dark` - Default dark theme
- `light` - Light mode
- `matrix` - Matrix-inspired green theme
- `cyberpunk` - Neon cyberpunk theme
- `ocean` - Ocean blue theme

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sidthebuilder/Portfolio-/issues).

---

**Built with ❤️ using React + TypeScript + Vite**
