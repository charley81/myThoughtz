import React, { Children } from "react"
import { Global, css } from "@emotion/core"
import Header from "./header"

export default function layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            --green: #478559;
            --purple: #161748;
            --pink: #fa5d9b;
            --blue: #39a0ca;
            --dark: #222;
            --medium: #444;
            --light: #f8f8ff;
          }

          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: var(--medium);
            background: var(--light);
            font-family: "Architects Daughter", cursive;
            letter-spacing: 2px;
            font-size: 14px;
            line-height: 1.4;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: var(--medium);
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: var(--dark);
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
      <footer></footer>
    </>
  )
}
