import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  StyledProductDetail,
  QtySelect,
  Button,
} from "../styles/components"
import { SEO, Stars } from "."
import { CartContext } from "../context"

export default function ProductDetail({
  price,
  sku: id,
  description,
  quantity,
  name,
  image,
}) {
  const formatedPrice = priceFormat(price)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)
  const handleSubmit = () => {
    addToCart({ price, id, name, quantity: qty, image })
  }
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={image.publicURL} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatedPrice}</b>
        <Stars />
        <small>{description}</small>
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}></button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}></button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
