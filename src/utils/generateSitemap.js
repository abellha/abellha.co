const fs = require("fs")
const globby = require("globby")

async function generateSiteMap() {
  const pages = await globby([
    "src/pages/**/*.js",
    "!src/pages/_*.js",
    "!src/pages/**/[id].js",
    "!src/pages/api",
    "!src/pages/404.js",
    "src/posts/*.md",
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace("src/pages/", "")
            .replace(".js", "")
            .replace(".md", "")
          const route = path === "index" ? "" : path
          return `
            <url>
                <loc>${`${process.env.NEXT_PUBLIC_URL_BASE}${route}`}</loc>
            </url>
        `
        })
        .join("")}
      </urlset>
  `

  fs.writeFileSync("public/sitemap.xml", sitemap)
}

generateSiteMap()
