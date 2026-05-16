# Systems Biology & Data Analytics Lab

Welcome to the official repository of the **Systems Biology & Data Analytics Lab**. This project is a modern, high-performance web application built to showcase our research, services, and team.

---

## 🚀 Technologies Used

- **Framework:** [React 19](https://react.dev/) (Latest Stable)
- **Bundler:** [Vite 6](https://vitejs.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Styling:** Vanilla CSS with a focus on modern, responsive design.
- **Deployment:** GitHub Pages with a custom domain.

---

## ✨ Features

- **Dynamic Hero & Background:** Interactive background transitions and hero messaging.
- **Responsive Navbar:** Features a unique "spill-out" logo design and multi-line branding.
- **Research & Publications:** Dedicated sections for showcasing academic work and products.
- **Team Slider:** Interactive sliders for presenting lab members.
- **Mobile Optimized:** Fully responsive layout for seamless browsing on all devices.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahul216/SBDA-LAB.git
   cd SBDA-LAB
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is used to maintain compatibility with specific carousel plugins.)*

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 📦 Deployment

### GitHub Pages

To deploy the latest version to GitHub Pages:

```bash
npm run deploy
```
This script builds the project and pushes the `dist` folder to the `gh-pages` branch.

### Custom Domain Configuration

If you are using a custom domain:
1. Ensure the `CNAME` file in the `public/` directory contains your domain name.
2. Update your DNS settings to point to GitHub's servers:
   - **A Records:** `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME Record:** Point `www` to `<your-username>.github.io`.

---

## 📂 Project Structure

```text
SBDA-LAB/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components
│   │   ├── pages/       # Page-level components (About, Teams, etc.)
│   │   └── Navbar.jsx   # Custom spill-out navbar
│   ├── App.jsx          # Main App logic & Routing
│   └── main.jsx         # Entry point
├── public/              # Static files (CNAME, favicon, etc.)
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

---

## 👨‍💻 Credits

- **Principal Investigator:** Dr. Abhishek Sengupta
- **Developed by:** Rahul Bachheti
- **Maintained at:** Alcartez/SBDA-LAB 

---

## 📄 License

© 2024 SBDA Research Lab. All rights reserved.
