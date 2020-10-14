import React from "react"
import Layout from "../component/layout"
import usePosts from "../hooks/use-post"
import PostPreview from "../component/post-preview"
import { css } from "@emotion/core"
import Hero from "../component/hero"

export default function Home() {
  const posts = usePosts()

  return (
    <>
      <Hero />
      <Layout>
        <h2
          css={css`
            margin-top: 4rem;
          `}
        >
          The Latest Scoop
        </h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}
