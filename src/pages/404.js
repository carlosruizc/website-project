import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Box>
    <h1>Something Went Wrong</h1>
    <h2>The page you were looking for was not found</h2>
    <img src="/404.webp" />
  </Box>
)

const Box=styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px;
  `

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
