const path = require('path')

const createPages = (graphql, createPage) => new Promise((resolve, reject) => {
  graphql(`
    {
      allSanityPage {
        edges {
          node {
            id
            content {
              main {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reject(result.errors)
    }

    const pageTemplate = path.resolve('./src/templates/PageTemplate.jsx')

    result.data.allSanityPage.edges
      .forEach(edge => {
        const slug = edge?.node?.content?.main?.slug?.current === 'home' ? '' :  edge?.node?.content?.main?.slug?.current

        if (slug) {
          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              id: edge.node.id
            },
          })
        }
      })

    resolve()
  })
})

module.exports = createPages
