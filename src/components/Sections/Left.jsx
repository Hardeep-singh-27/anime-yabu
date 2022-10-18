import React, { Fragment } from 'react'
import RForm from './Form'
import Footer from './Footer'
import logo from './logo.svg'
import img from './img.svg'
import vector from './Vector.svg'
import vt from './vt.svg'
import mobile from './mobile.svg'


const Left = () => {
  return (
    <Fragment>
      <div>

        <div className=" d-flex">

          <div className='d-md-block d-sm-none d-none'>
            <img src={img} alt="image" /><span>anime <span>yabu</span></span></div>
        </div>
        <div className="row">
          <div className='px-sm-3 pt-sm-3' ><img src={vt} />  <img src={vector} /></div>
          <div className="col-sm-12  d-flex justify-content-center flex-column    ">
            <div className='d-flex  justify-content-center'>
              <img src={mobile} height="100px" className='d-md-none d-xs-block d-block' />
              <img src={logo} height="100px" className='d-md-block d-sm-none d-none ' />
            </div>
            <div className='text-center ' >
              ひさしぶり!<br />
              <span>
                Bem-vindo(a)!
              </span>
            </div>
          </div>

        </div>
      </div>
      <RForm />



      <Footer />




    </Fragment>





  )
}

export default Left