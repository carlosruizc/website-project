import * as React from "react"
import GlobalStyles from "../style/GlobalStyles"

const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyles />      
      {children}
    </>
  )
}

export default Layout
