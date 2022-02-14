import React from 'react'
import './styles.css'

function Styles() {
    return (
        <>
        <div className="container">
            <div className='box'>
            <img className='img' src='img1.png' alt=''/>
                <h1>This is Box One </h1>
                <p className='ptag'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea blanditiis optio quo officia quidem ratione architecto nobis fugit. Esse ab earum quae obcaecati iste, sed omnis eius officiis asperiores?
                </p>

            </div>
            <div className='box'>
                <img className='img' src='img1.png' alt=''/>
            <h1>This is Box Two </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea blanditiis optio quo officia quidem ratione architecto nobis fugit. Esse ab earum quae obcaecati iste, sed omnis eius officiis asperiores?
                </p>
            </div>
            <div className='box'>
            <img className='img' src='img1.png' alt=''/>
            <h1>This is Box Three </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea blanditiis optio quo officia quidem ratione architecto nobis fugit. Esse ab earum quae obcaecati iste, sed omnis eius officiis asperiores?
                </p>
            </div>

        </div>
        </>
    )
}




export default Styles
