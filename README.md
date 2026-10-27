# Khushnuma Baluchi — Portfolio

Personal portfolio website built with React 18, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide icons. It is a static single-page site with no backend.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build and check

```bash
npm run typecheck  # TypeScript only
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
public/
  favicon.svg          Site icon (replace with your own if you like)
  resume.pdf           Resume served by the Download Resume buttons
  projects/            Put project screenshots here
src/
  data/portfolio.ts    ALL editable content: profile, links, skills, experience, projects, education
  components/          One component per section (Hero, About, Skills, Experience, Projects, ...)
  hooks/               Active nav section, resume-file check
  index.css            Tailwind layers and shared styles
index.html             Page title, SEO and social meta tags
```

You should only need to edit `src/data/portfolio.ts` to change content.

## Personalising

### Resume
Put your PDF at `public/resume.pdf` (a copy of `Khushnuma_Baluchi.pdf` is already there).
The Download Resume buttons only appear when that file exists, so a missing file never shows a broken button.
To replace it, overwrite the file with the same name.

### LinkedIn and GitHub
In `src/data/portfolio.ts` set:

```ts
linkedinUrl: 'https://www.linkedin.com/in/your-profile',
githubUrl: 'https://github.com/your-username',
```

Links stay hidden while these are empty.

### Project screenshots and links
1. Save a screenshot in `public/projects/`, for example `public/projects/paid.png` (around 1600×800 works well).
2. In the matching project in `src/data/portfolio.ts`, set `image: '/projects/paid.png'`.
3. Optionally set `repoUrl` and `demoUrl`. Both stay hidden while empty.

Without an image, each project shows an abstract illustration that is labelled "Illustration", so it is never mistaken for a real screenshot.
Only add links and screenshots you are allowed to share. Client projects are often confidential.

### SEO
The title, description and social tags are in `index.html`. Once the site has a domain, you can add
`<link rel="canonical" href="https://your-domain/" />` and an `og:image`.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Create the empty `portfolio` repository on GitHub first, without a README, so the push doesn't conflict.

## Deploy

### Vercel
1. Go to https://vercel.com/new and import the GitHub repository.
2. Vercel detects Vite automatically: build command `npm run build`, output directory `dist`.
3. Click Deploy. Every push to `main` redeploys automatically.

### Netlify
1. Go to https://app.netlify.com/start and connect the GitHub repository.
2. Set the build command to `npm run build` and the publish directory to `dist`.
3. Click Deploy.

The site uses in-page anchors only (no client-side routes), so no redirect or rewrite rules are needed.

## Remaining setup checklist

- [ ] Add your real LinkedIn URL (`profile.linkedinUrl`)
- [ ] Add your real GitHub URL (`profile.githubUrl`)
- [ ] Check that `public/resume.pdf` is your latest resume
- [ ] Optionally add project screenshots (`public/projects/` and the `image` field)
- [ ] Optionally add repository and demo links you are allowed to share
- [ ] Optionally replace `public/favicon.svg`
- [ ] Push to GitHub and deploy on Vercel or Netlify
- [ ] After deploying, add a canonical URL and an `og:image` in `index.html`
