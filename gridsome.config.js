// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'La Fabrique  | Blog',
  siteDescription: 'Fougnigué Soro\' website. Software Engineer, Software Developer, Web Developer, Full-stack engineer. Clean Code advocate. DevOps.',
  siteUrl: 'https://5fd9c7a60bf0a29cb26cb64c--dreamy-khorana-22de55.netlify.app/',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project', // Required
        baseDir: './projects', // Where .md files are located
        pathPrefix: '/projects', // Add route prefix. Optional
        template: './src/templates/Project.vue', // Optional
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Fougnigué Soro | Blog',
          feed_url: 'https://www.josephharveyangeles.com/rss.xml',
          site_url: 'https://5fd9c7a60bf0a29cb26cb64c--dreamy-khorana-22de55.netlify.app/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://5fd9c7a60bf0a29cb26cb64c--dreamy-khorana-22de55.netlify.app/' + node.path,
          author: 'Fougnigué Soro',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
