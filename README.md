

```markdown name=README.md url=https://github.com/typace-team/typace-official/blob/main/README.md
# <div align="center">✨ Typace 杰奏</div>

<div align="center">

**A Modern, Fast, and Beautiful Blog Framework Built with Next.js**

[🌐 Visit Website](https://typace.org) • [📖 Documentation](#-getting-started) • [💬 Discussions](https://github.com/typace-team/typace-official/discussions) • [📧 Email](mailto:typace@proton.me)

[![License](https://img.shields.io/badge/License-GPL--3.0-blue)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-13.5.8-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## 🚀 About Typace

Typace is a **modern, high-performance blog framework** designed for developers, writers, and content creators. Built on top of [Next.js](https://nextjs.org) and styled with [Tailwind CSS](https://tailwindcss.com), it provides an elegant and efficient platform for sharing technology insights, life experiences, and creative thoughts.

Created by **@terryzhangxr** and **@mrche**, two passionate middle school students, Typace aims to inspire more people to discover the joy of technology and creative expression.

### Key Highlights

- ⚡ **Lightning-Fast**: Built with Next.js for optimal performance and SEO
- 🎨 **Beautiful Design**: Modern UI with smooth animations and responsive layouts
- 🌓 **Dark Mode**: Seamless light/dark theme switching with smooth transitions
- 📱 **Fully Responsive**: Perfect experience across all devices
- 📝 **Markdown Support**: Write posts in pure Markdown with full syntax support
- 💬 **Comments**: Integrated comment system via Gitalk
- 🔍 **SEO Optimized**: Built-in sitemap and RSS feed generation
- 📊 **Table of Contents**: Auto-generated TOC with smooth scrolling navigation
- ⚙️ **Highly Configurable**: Easy-to-customize through `config.js`

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 13.5.8 | React framework for production |
| **React** | 18.2.0 | UI library |
| **Tailwind CSS** | 3.3.5 | Utility-first CSS framework |
| **Gray Matter** | 4.0.3 | YAML front matter parsing |
| **Remark** | 14.0.3 | Markdown processor |
| **PostCSS** | 8.4.31 | CSS transformations |

---

## 📦 Quick Start

### Prerequisites

- **Node.js** 16.x or higher
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/typace-team/typace-official.git
cd typace-official

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your blog in action!

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
# or
yarn start
```

### Static Export

```bash
# Generate static HTML files
npm run export
```

---

## 📁 Project Structure

```
typace-official/
├── pages/                  # Next.js pages
│   ├── index.js          # Homepage
│   ├── about.js          # About page
│   ├── posts/            # Blog post pages (dynamic routes)
│   └── _app.js           # App wrapper & global configs
├── lib/
│   └── posts.js          # Blog post processing utilities
├── source/               # Markdown blog post files
│   └── *.md              # Your blog posts
├── styles/
│   └── globals.css       # Global CSS styles
├── public/               # Static assets (images, fonts)
├── components/           # Reusable React components
├── config.js             # Site configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Project dependencies
└── next.config.js        # Next.js configuration
```

---

## ⚙️ Configuration

Edit `config.js` to customize your blog:

```javascript
module.exports = {
  title: 'Your Blog Title',
  description: 'Your blog description',
  author: 'Your Name',
  siteUrl: 'https://yourblog.com',
  
  // Social media links
  social: {
    twitter: 'your-twitter-handle',
    github: 'your-github-username',
  },
  
  // Theme settings
  theme: {
    darkMode: true,  // Enable dark mode
  },
  
  // Gitalk comment system configuration
  gitalk: {
    clientID: 'your-gitalk-client-id',
    clientSecret: 'your-gitalk-client-secret',
    repo: 'your-repo-name',
    owner: 'your-github-username',
    admin: ['your-github-username'],
  },
};
```

### Color Customization

Modify `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3AB1CE',      // Primary accent color
      secondary: '#F472B6',    // Secondary accent color
      dark: '#1a1a1a',         // Dark mode background
    },
  },
}
```

---

## ✍️ Writing Blog Posts

Create a new Markdown file in the `source/` directory:

```markdown
---
title: "Your Post Title"
date: "2026-04-05"
author: "Your Name"
tags: ["tag1", "tag2"]
excerpt: "Brief description of your post"
---

# Your Post Title

Your content here...
```

The blog will automatically process these files and generate corresponding pages.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Typace is optimized for [Vercel](https://vercel.com). Deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftypace-team%2Ftypace-official)

Or manually:

```bash
npm install -g vercel
vercel
```

### Deploy to Cloudflare Pages

When using **Cloudflare Pages**, add the `nodejs_compat` compatibility flag:

#### Via Dashboard

1. Go to **Settings** → **Functions** → **Compatibility Flags**
2. Add `nodejs_compat` to both **Production** and **Preview** environments
3. Save and redeploy

#### Via Wrangler CLI

Add to `wrangler.toml`:

```toml
compatibility_flags = ["nodejs_compat"]
```

Then deploy:

```bash
wrangler pages deploy
```

### Deploy to Other Platforms

Typace can be deployed to any platform that supports Next.js:
- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**
- **Self-hosted server** (Node.js required)

---

## ✨ Features

### Current Features
- ✅ Modern, responsive design with animations
- ✅ Dark mode with smooth transitions
- ✅ Markdown-based blog posts
- ✅ Gitalk comments system
- ✅ Auto-generated table of contents
- ✅ Dynamic backgrounds
- ✅ SEO optimization
- ✅ RSS feed generation
- ✅ Sitemap generation

### Roadmap
- 🔜 Search functionality
- 🔜 Blog post categories
- 🔜 Advanced analytics
- 🔜 Social media integration
- 🔜 Multi-language support

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| **v2.0.1** | 2025.3 | Page redesign, animation optimization, TOC scrolling |
| **v1.2.2** | 2025.3 | New pages and bug fixes |
| **v1.2.1** | 2025.3 | Navigation bar optimization |
| **v1.2.0** | 2025.3 | Light/dark mode with animations |
| **v1.1.3** | 2025.3 | Comment system |
| **v1.1.2** | 2025.3 | Recommended articles feature |
| **v1.1.1** | 2025.3 | Article page improvements |
| **v1.1.0** | 2025.2 | Dynamic backgrounds |
| **v1.0.1** | 2025.2 | Homepage bug fixes |
| **v1.0.0** | 2025.2 | Initial release |

---

## 🤝 Contributing

We welcome contributions from everyone! Whether it's bug fixes, new features, or documentation improvements, please feel free to contribute.

### How to Contribute

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits clean and descriptive

---

## 📧 Contact & Support

Have questions or need help? Get in touch:

- **Email**: [typace@proton.me](mailto:typace@proton.me)
- **GitHub Issues**: [Report a bug](https://github.com/typace-team/typace-official/issues)
- **Discussions**: [Join the conversation](https://github.com/typace-team/typace-official/discussions)

### Creators

- **@terryzhangxr** - Main developer
- **@mrche** - Project founder & co-developer
- **@che-ui** - GitHub profile

---

## 📄 License

This project is licensed under the **GPL-3.0 License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### Made with ❤️ by the Typace Team

[⬆ Back to Top](#-typace-杰奏)



# Typace Blogging Platform, known as 杰奏 in Chinese

"typace is developed by @che-ui and @terryzhangxr, but we are now migrating the official version to this account. We welcome everyone to use it."

## When using cloudflare pages:
### Solution: Add `nodejs_compat` Flag

The error is because your Pages project needs the `nodejs_compat` compatibility flag enabled for Next.js/Node.js compatibility.

### Dashboard Steps:

1. In your Pages project, go to **Settings** → **Functions** → **Compatibility Flags**

2. Add `nodejs_compat` to both:
   - **Production** environment
   - **Preview** environment

3. Save changes, then redeploy

### Direct Link:
[Go to Compatibility Flags](https://dash.cloudflare.com/5acaba5f6bc503b6b60f9bd22c993be2/pages/view/:projectName/settings/functions)

*(Replace `:projectName` with your actual Pages project name)*

---

### Or via Wrangler CLI:

If you're using Wrangler, add this to your `wrangler.toml`:

```toml
compatibility_flags = ["nodejs_compat"]
```

Then redeploy with `wrangler pages deploy`.

---

注：中文版介绍及教程正在typace官网编写中，敬请期待

   本仓库为typace项目的正式版，目前由Terryzhang主导开发，最早由mrche提出并建立，现在负责优化、宣传本项目，这个仓库有最新的功能，目前开放fork，同时mrche的仓库也开放，欢迎clone和star

Welcome to **Typace**, an under-construction blog platform which based on Next.js focused on sharing technology, life, and thoughts.

## About

Typace is created by terryzhangxr and mrche, two middle school students. This platform aims to help more people discover the fun of technology and get inspired.

## Project Structure

- `pages/`: Contains the main pages of the website.
  - `about.js`: The About page.
  - `index.js`: The Home page.
  - `posts/`: Directory for blog posts.
- `lib/posts.js`: Functions for handling blog posts.
- `source/`: Directory for markdown files of blog posts.
- `styles/globals.css`: Global CSS styles.

## Recent Updates

V1.0.0  Initial edition, project launch  2025.2

V1.0.1  Homepage bug fixes  2025.2

V1.1.0  Added dynamic backgrounds  2025.2

V1.1.1  Article page bug fixes  2025.3

V1.1.2  Added the feature of recommended articles  2025.3

V1.1.3  Added comment system  2025.3

V1.2.0  Added light and dark color switching and animation   2025.3

V1.2.1  Navigation bar optimization  2025.3

V1.2.2  Add more new pages and fix bugs  

V2.0.1 The page has been redesigned, the animation has been optimized, and the article page table of contents has been added to the scrolling and positioning function and the direct button in the comment area(current)

For more details, check the [commit history](https://github.com/terryzhangxr/typace-i/commits).

## Contact

- Email: [typace@proton.me](mailto:typace@proton.me)
- GitHub: [@che-ui](https://github.com/@che-ui)

## License

This project is licensed under the GPL-3.0 License. See the LICENSE file for details.

## Contributing

We welcome contributions! Please fork this repository and submit pull requests.
