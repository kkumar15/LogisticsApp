import React from 'react'
import ButtonAppBar from './customerNavBar'
// import CustomerBox from './customerViewBox'
import Features from './customerViewGrid'
import image from '../../resources/images/cust_background.jpg'
export default function customerView() {

    const fetchOrders = ["ke"]
    return (
        <div>
        <div>
        <ButtonAppBar></ButtonAppBar>
        </div>
        <div style={{ backgroundImage:`url(${image})` ,height:"100vh" }}>
        <Features >
            </Features>
        </div>
        {/* <section style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'yellow',
            backgroundImage:`url(${image})`
        }}> */}

        {/* </section> */}
        </div>




    )
}