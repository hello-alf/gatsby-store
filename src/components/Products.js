import React from "react"
import { Link } from "gatsby"
import formatprice from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

export default function Product({ products }) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({ node }) => {
          const price = formatprice(node.price)
          return (
            <article key={node.id}>
              <img src={node.image.publicURL} alt={node.name} />
              <p>{node.name}</p>
              <small>USD {price}</small>
              <Link to={`/${node.id}`}>
                Comprar Ahora <span>→</span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
