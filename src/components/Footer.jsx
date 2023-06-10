import React from 'react'
import { Icon } from '@iconify/react';
import '../style/footer.scss'

const Footer = () => {
  return (
    <footer className='containerFooter'>
        <img src="https://i.postimg.cc/NFPk6L20/logo.jpg" alt="" />
        <div className='redesSociales'>
        <Icon icon="mdi:instagram" color="white" width="45" height="45" />
        <Icon icon="mdi:github" color="white" width="45" height="45" />
        <Icon icon="ic:baseline-discord" color="white" width="45" height="45" />
        <Icon icon="mdi:linkedin" color="white" width="45" height="45" />
        </div>
        <div className='textFooter'>
          <h5>Legal</h5>
          <h5>Cookies</h5>
          <h5>Privacy</h5>
          <h5>Sponsors</h5>
          <h5>Donations</h5>
        </div>
        <p>&copy;2023, Isaac Berrio, All rights reserved</p>
    </footer>
  )
}

export default Footer