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

   本仓库为typace项目的正式版，目前由Terryzhang负责开发，有最新的功能，目前开放fork，同时mrche的仓库也开放，欢迎clone和star

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

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

We welcome contributions! Please fork this repository and submit pull requests.
