module.exports = {
  siteMetadata: {
    title: "Justin Perez - Full Stack Web Developer in Los Angeles, CA",
    author: "Justin Perez",
    description: "Justin Perez is a Full Stack Web Developer in Los Angeles, California.",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Justin\'s Workfolio\: Personal Website',
        short_name: 'Justin\'s Website',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Diamond.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
