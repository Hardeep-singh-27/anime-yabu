import React from 'react'
import insta from './insta.svg'
import twitter from './twitter.svg'
import fb from './fb.svg'

const Footer = () => {
  return (
    <div >
        <div className='footer'>
        Click here to register
        </div>
<div className='social-media'>

        <span><img src={insta} className="insta" /></span>
        <span><img src={twitter} className="twitter" /></span>

        <span><img src={fb} className="fb"/></span>

        </div>
        <div className='end-footer'>
            <p>Já é membro?<a href='#'> Faça Login</a></p>
        </div>
    </div>
  )
}

export default Footer