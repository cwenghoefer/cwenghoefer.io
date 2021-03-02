module.exports = {
  siteMetadata: {
    title: `Blog | Christian Wenghöfer`,
    name: `Christian Wenghöfer`,
    siteUrl: `https://cwenghoefer.io`,
    description: ``,
    hero: {
      heading: `This is my personal blog about [it]. What is [it]? `,
      maxWidth: 900,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/cwenghoefer`,
      },
      {
        name: `github`,
        url: `https://github.com/cwenghoefer`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/cwenghoefer.io`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/cwenghoefer/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/cwenghoefer`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
