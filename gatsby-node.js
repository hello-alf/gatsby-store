const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_PRODUCTS {
      allStrapiProductos {
        edges {
          node {
            id
            name
            descripcion
            price
            available
            image {
              publicURL
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  result.data.allStrapiProductos.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
