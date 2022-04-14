import React from 'react'
import './style/header.module.css'

export default function Header() {
  return (
    <header>
      <h1>Welcome</h1>
      <ul className="header-menu">
          <li>Home</li>
          <li>Login</li>
          <li>Sign Up</li>
      </ul>
    </header>
  )
}
