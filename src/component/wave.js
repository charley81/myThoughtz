import React, { useState } from "react"
import { css } from "@emotion/core"

export default function Wave() {
  const [waves, setWaves] = useState(0)
  const label = `👋 ${waves} ${waves === 1 ? "Wave" : "Waves"}`

  return (
    <button
      css={css`
        background: var(--purple);
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  )
}
