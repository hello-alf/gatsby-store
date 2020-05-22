import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo, SEO, Products } from "../components"

// import styled from "styled-components"

// const Button = styled.button`
//   width: 8rem;
//   background-color: "#98ca3f";
//   border: none;
//   border-radius: 10px;
//   color: ${props => props.color};
//   &:hover {
//     transform: scale(1.4);
//   }
// `

export const query = graphql`
  query GET_DATA {
    allSite {
      nodes {
        siteMetadata {
          description
        }
      }
    }
    allStrapiProductos {
      edges {
        node {
          id
          name
          descripcion
          price
          image {
            publicURL
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  console.log(data.allStrapiProductos.edges)
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.nodes[0].siteMetadata.description} />
      <Products products={data.allStrapiProductos.edges} />
    </>
  )
}

export default IndexPage
