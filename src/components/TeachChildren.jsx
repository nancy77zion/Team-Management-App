import React from 'react'
import Header from './Header'

const TeachChildren = ({children}) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default TeachChildren