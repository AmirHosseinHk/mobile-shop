import React from 'react'
import {BsBell,BsBrightnessHigh} from 'react-icons/bs'
import './Header.css'


function Header() {
  return (
    <div className='main-header'>
        <div className="profileBox">
            <img src="./img/images.png" alt="" />
            <div className="profile-docs">
                <h3>امیرحسین حکیمی نیری</h3>
                <h5>مدیر فروش</h5>
            </div>

        </div>
        <div className="leftHeader">
            <div className="search-box">
                <input type="search" placeholder='جست و جو کنید ...'/>
                <button>جست و جو</button>

            </div>
            <button className='leftHeader-icon'><BsBell /> </button>
            <button className='leftHeader-icon'><BsBrightnessHigh /> </button>
        </div>
    </div>
  )
}

export default Header