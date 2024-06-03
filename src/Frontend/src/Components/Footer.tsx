import React from 'react'

interface FooterProps  {}

const Footer = (props: FooterProps) => {
  return (
    
    <footer className="footer">
    <div className="container">
        <p className="footer__copy">
            Knowvation Learnings © 2023. All rights reserved.
        </p>
    </div>
</footer>
  )
}

export default Footer