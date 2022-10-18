import React, { Fragment } from 'react'
import eye from './eye.svg'
import './Rform.scss'
const RForm = () => {
  return (

    <Fragment>
      <div className='form'>
        <div className='position-relative form-field'>
          <label>Email</label>
          <input type="text" className='form-control' placeholder=' Email' />
        </div>


        <div className='position-relative form-field'>
          <label>Password</label>
          <input type="password" className='form-control' placeholder='Password' />
          <img src={eye} />
        </div>


        <div className='position-relative form-field'>
          <label>Confirm Password</label>
          <input type="password" className='form-control' placeholder='confirm password' />
          <img src={eye} />
        </div>
        <div className='button'>
          <input type="button " className='btn form-control' value="Register" />
        </div>
      </div>
    </Fragment>


  )
}

export default RForm