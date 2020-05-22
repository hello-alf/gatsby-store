import React, { useState } from "react"
import { SelectStars } from "../styles/components"

export default function Stars() {
  const [stars, chooseStars] = useState(5)
  return (
    <SelectStars selected={stars}>
      <span onClick={() => chooseStars(1)}>✭</span>
      <span onClick={() => chooseStars(2)}>✭</span>
      <span onClick={() => chooseStars(3)}>✭</span>
      <span onClick={() => chooseStars(4)}>✭</span>
      <span onClick={() => chooseStars(5)}>✭</span>
    </SelectStars>
  )
}
