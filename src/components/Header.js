import React from 'react'
import Link from 'gatsby-link'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <div className="header__main">
        <div>
          <h1>Jennifer Hurd</h1>

          <img
            src={
              'http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_183/v1534899352/IMG_20180712_172449701_1_u9rnja.jpg'
            }
            alt="Jen"
            style={{ height: '30%', width: '60%', borderRadius: '50%' }}
          />
          <p>Web Developer from the suburbs of Chicago</p>
        </div>
        <div>
          <img
            src={
              'http://res.cloudinary.com/jjenjjenjjen/image/upload/v1534887981/chicago-illinois-skyline-skyscrapers-161963_isugq0.jpg'
            }
            alt="Chicago"
            style={{ borderRadius: '3%' }}
          />
        </div>
      </div>
      <div />
    </span>
  </header>
)

export default Header
