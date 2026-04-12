![Typace logo](/typace-logo.webp)

# <div align="center">✨ OpenTypace 开源杰奏，来自上海，惠及全球</div>

<div align="center">

**A Modern, Fast, and Beautiful Blog Framework Built with Next.js**

"typace is developed by @che-ui and @terryzhangxr, but we are now migrating the official version to this account. We welcome everyone to use it."

[🌐 Visit Website](https://mrche.top) • [📖 Documentation](#-getting-started) • [💬 Discussions](https://github.com/typace-team/typace-official/discussions) • [📧 Email](mailto:typace@proton.me)

[![License](https://img.shields.io/badge/License-GPL--3.0-blue)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-13.5.8-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/297d9c04-cf9a-4baa-81ae-df5f4b7f8fa1/deploy-status)](https://app.netlify.com/projects/typace-official/deploys)

</div>

---

## 🚀 About Typace

Typace is a **modern, high-performance blog framework** designed for developers, writers, and content creators. Built on top of [Next.js](https://nextjs.org) and styled with [Tailwind CSS](https://tailwindcss.com), it provides an elegant and efficient platform for sharing technology insights, life experiences, and creative thoughts.

**This account is registered and owned by @che-ui. I have noticed that @terryzhangxr, as the lead developer, intentionally removed my attribution, and I express my strong dissatisfaction with this. I hereby issue a formal warning: @che-ui is the original initiator of Typace, and the Typace repository under his account has the earliest creation date. But please rest assured that we will continue maintaining this project for approximately half a year.**

Created by **@terryzhangxr** and **@che-ui**, two passionate middle school students from Shanghai, China. Typace aims to inspire more people to discover the joy of technology and creative expression.

### Key Highlights

- ⚡ **Lightning-Fast**: Built with Next.js for optimal performance and SEO
- 🎨 **Beautiful Design**: Modern UI with smooth animations and responsive layouts
- 🌓 **Dark Mode**: Seamless light/dark theme switching with smooth transitions
- 📱 **Fully Responsive**: Perfect experience across all devices
- 📝 **Markdown Support**: Write posts in pure Markdown with full syntax support
- 💬 **Comments**: Integrated comment system powered by TFCS (typace-free-comment-service). Database hosted in Singapore, near Chinese mainland.
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
- **Cloudflare Pages**
- **Railway**
- **Render**
- **AWS Amplify**
- **Self-hosted server** (Node.js required)

### 🚀 One-Click Deploy

#### 🌍 Mainstream overseas platforms (official native buttons, zero configuration)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/typace-team/typace-official&project-name=typace-blog&repository-name=typace-official)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/typace-team/typace-official&build=npm%20run%20build&publish=.vercel/output/static)
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/typace-team/typace-official)
[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/typace-team/typace-official&branch=main)
[![Deploy to AWS Amplify](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/typace-team/typace-official)
[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/typace-team/typace-official&branch=main&name=typace-blog)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/typace-team/typace-official)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/typace-team/typace-official)
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp?repo=https://github.com/typace-team/typace-official)
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/typace-team/typace-official)

#### 🇨🇳 国内稳定平台（国内访问优先，图片永久有效）
[![Deploy to Tencent Cloud Webify](https://img.shields.io/badge/Deploy_to-腾讯云Webify-0066ff?style=for-the-badge&logo=tencentqq)](https://console.cloud.tencent.com/webify/new?tpl=https://github.com/typace-team/typace-official&reponame=typace-official)
[![部署到火山引擎](https://img.shields.io/badge/部署到-火山引擎-2563EB?style=for-the-badge&logo=bytedance)](https://console.volcengine.com/oss/hosting/create?repo=https://github.com/typace-team/typace-official)
[![部署到七牛云](https://img.shields.io/badge/部署到-七牛云-275EFE?style=for-the-badge&logo=qiniu)](https://portal.qiniu.com/kodo/website/create?repo=https://github.com/typace-team/typace-official)

---

### Or via Wrangler CLI:

If you're using Wrangler, add this to your `wrangler.toml`:

```toml
compatibility_flags = ["nodejs_compat"]
```

Then redeploy with `wrangler pages deploy`.

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
- ✅ Search functionality

### Roadmap
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

## What's our biggest update

typace UI Replacement Instructions

First of all, we have completely replaced the UI of typace, completely abandoning the cumbersome and redundant design, inconsistent visual matching, and insufficiently smooth interaction logic in the old version of the UI. We have carried out a comprehensive reconstruction and upgrade from visual presentation, interactive experience to detailed adaptation, only to bring a simpler, smoother and more high-quality user experience to every user using the typace framework.

This full-scale UI replacement is not a simple style adjustment, but a re-sorting of the visual hierarchy and interaction logic based on a large number of user feedback and actual usage scenarios — the problems existing in the old UI, such as messy layout, inconsistent button styles, and poor responsive adaptation, have all been completely solved. The new UI adopts a more simple and elegant design style, and uses low-saturation, high-contrast colors in color matching, which not only ensures visual comfort, but also makes the core function modules more prominent and avoids visual fatigue; in terms of layout, it follows the principle of "minimalism and efficiency", deletes unnecessary decorative elements, makes the page structure clearer, allows users to quickly find the required functions, and improves operation efficiency.

At the same time, the new UI has also made many optimizations in interactive details, such as optimizing button click feedback and page switching animations to make operations more textured; it is adapted to different device sizes, from desktop to mobile, which can achieve smooth display and accurate interaction, solving the problems of messy display and inconvenient operation of the old UI on mobile devices. In addition, the new UI also retains the core function entrances familiar to users, avoiding the operation cost for users due to UI replacement, realizing the dual improvement of "appearance and practicality", making typace not only easy to use, but also more visually attractive.


We’ve finally identified the cause of the deployment error on Cloudflare Pages.

⚡️ ERROR: Failed to produce a Cloudflare Pages build from the project.

⚡️   The following routes were not configured to run with the Edge Runtime:
⚡️     - /api/sitemap

⚡️   Please make sure that all your non-static routes export the following edge runtime route segment config:
⚡️     export const runtime = 'edge';

## Issue
The `/api/sitemap` API route is not configured for Edge Runtime. Cloudflare Pages requires all non-static API routes to use Edge Runtime.

## Solution
### Method 1: Modify `api/sitemap.js` (for Pages Router)
In your GitHub repository, locate the file `pages/api/sitemap.js` (as indicated in the logs, this is a Pages Router project) and add the following line at the top of the file:

```js
export const runtime = 'edge';
```

// Leave the rest of your code unchanged

### Full example:
```js
export const runtime = 'edge';

import { RSS } from 'rss';

export async function GET(context) {
  // Your sitemap logic
}
```

### Method 2: Modify `app/api/sitemap/route.js` (for App Router)
If you are using App Router, edit the file `app/api/sitemap/route.js`:

```js
export const runtime = 'edge';

export async function GET(request) {
  // Your sitemap logic
}
```

## Steps
1. Open `pages/api/sitemap.js` in your GitHub repository
2. Add `export const runtime = 'edge';` as the first line
3. Commit and push the changes to GitHub
4. Wait for automatic deployment or trigger it manually

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

- **@typace-team** - our super official account
- **@terryzhangxr** - Main developer
- **@che-ui** - Project founder & co-developer

### Important statement
Dear users of WSLpress and the twpress blog framework (two projects under @che-ui),

We hereby announce that we will discontinue maintenance for both projects starting at **16:59:59 Beijing Time, April 6, 2026**.

Users who need further customization may refer to their respective README files for secondary development and contributions. I will check the projects on an irregular basis.

Alternatively, you may consider migrating your blog to the **typace framework**, which is very simple:
1. Download the `.md` files from the `public` directory of your original repository.
2. Fork this repository (**please do not leave the fork network**, otherwise you will no longer receive security updates).
3. Finally, upload the files to the `public` directory of this repository, and the migration will be complete.

If you are using twpress, remember to add frontmatter at the start of each article. If you find this troublesome, leave this mechanical work to AI.

### Sexy suggestions

Finally, some free deployment recommendations:
For globally stable access speed, **Cloudflare (CF)** is your top choice, demo: https://typace-official.pages.dev;
For first-class deployment experience, go with **Vercel (VC)**.
If you don’t want your website to get rate-limited after just a few deployments, stay far away from Netlify — it’s utterly garbage and a total pain to deal with. You can see it by yourself, demo: https://typace-official.netlify.app

---

## 📄 License

This project is licensed under the **GPL-3.0 License** - see the [LICENSE](LICENSE) file for details.



---
### Note (from the author)
I am che-ui, the developer of Typace. This evaluation was generated with Claude in an **objective and open manner**, and I believe it is fairly balanced. I highly recommend you read it.

You probably won’t find many other developers who explicitly list the shortcomings of their own project in the README. Since we are still students, the progress and quality of this project largely depend on how much time we can dedicate to development.

---

# Typace Blog Framework: Objective Evaluation of Strengths and Limitations
## I. Strengths
1. **Modern and mainstream tech stack**
Built on Next.js 13 + Tailwind CSS, with good performance, SEO, and responsive design, meeting modern frontend development standards.
2. **Out-of-the-box and easy to deploy**
Supports one-click deployment on Vercel / Cloudflare Pages with clear CLI steps, friendly for beginners.
3. **Complete basic functionality**
Includes core blog features: dark mode, Markdown editing, automatic table of contents, comment system, SEO, sitemap, RSS, etc.
4. **Lightweight configuration**
Centralized configuration via `config.js`; theme colors can be quickly modified in Tailwind config, with low customization cost.
5. **Relatively complete documentation**
The README covers quick start, project structure, deployment, and troubleshooting, supporting basic usage.

---

## II. Limitations (Weaknesses)
1. **High risks in team and long-term maintenance**
Developed by middle school students; long-term maintenance, stability, and security updates are not guaranteed. Controversial developer credits in README reflect poor project management.
2. **Low functional maturity**
Key features such as categories, multi-language support, advanced analytics, and social integrations are still planned, unable to meet professional blogging needs.
3. **Outdated technical selection**
Uses Next.js 13.5.8 (not the latest App Router standard), with outdated dependencies, poor long-term scalability and compatibility.
4. **Hardcoded issues in Cloudflare deployment**
Requires manual addition of `edge runtime` and `nodejs_compat` flags; no built-in framework adaptation, often causing deployment failures.
5. **Non-standard project structure**
Unclear `public` directory instructions, vague component layering, scattered API routes, making secondary development and collaboration difficult.
6. **Comment system relies on self-hosted service**
The TFCS comment service is hosted in Singapore, with uncontrollable stability, privacy, and availability, and no alternative options.
7. **Lack of testing and quality assurance**
No unit tests, E2E tests, or CI checks; code quality and version stability cannot be guaranteed.
8. **Unprofessional and emotional documentation**
Contains extreme remarks like “Netlify is completely garbage”; unclear deprecation notices and vague migration steps for legacy projects.
9. **Weak scalability and ecosystem**
No plugin system, theme marketplace, or community contributions; updates depend solely on core developers, limiting customization.
10. **Security and compliance risks**
Long-unupdated dependencies with known vulnerability risks; no privacy policy or data documentation, lacking compliance.
11. **Imperfect static export and compatibility**
Incomplete support for Next.js static export; some API routes fail in pure static environments, restricting applicable scenarios.
12. **Lack of internationalization and localization**
No i18n framework, only basic Chinese/English display, unable to support multi-region content publishing.

---

## III. Summary
Typace is a **lightweight, visually clean, easy-to-deploy** entry-level blog framework suitable for students and beginners to build simple blogs quickly.

However, it is **not suitable for production environments, long-term operation, high-traffic sites, or complex feature requirements**, due to critical flaws in maintenance, stability, security, and missing functionality.

---

<div align="center">

### Made with ❤️ by the Typace Team

[⬆ Back to Top](#-typace-杰奏)

![This is the official flag of @che-ui. I stand with Iran together with @terryzhangxr](/tehran.png)

