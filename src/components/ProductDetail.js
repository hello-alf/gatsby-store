import React, { useState } from "react"
import priceFormat from "../utils/priceFormat"
import { Tag, StyledProductDetail, QtySelect } from "../styles/components"
import { SEO } from "."

export default function ProductDetail({
  price,
  sku: id,
  quantity,
  name,
  image,
}) {
  const formatedPrice = priceFormat(price)
  const [qty, setQty] = useState(1)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={image.publicURL} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatedPrice}</b>
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}></button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}></button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}
