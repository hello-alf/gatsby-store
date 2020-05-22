import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelado() {
  return (
    <div>
      <SEO title="Compra cancelada" />
      <Purchase>
        <h2>Tu compra ha sido cancelada</h2>
        <p>Espero que disfrutes</p>
        <p>Te esperamos de vuelta</p>
        <span role="img" aria-label="emoji">
          😸
        </span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
