module.exports = {
  siteMetadata: {
    title: "Justin Perez | CEO and Full Stack Engineer | Los Angeles, California",
    author: "Justin Perez",
    description: "I design, build, and launch websites and online applications. Explore my work, view my skills, or get in contact"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
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
