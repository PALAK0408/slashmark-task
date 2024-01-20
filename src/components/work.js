import React from 'react'
import workimagewallet from "../assets/work-image-wallet.png"
import workimagecash from "../assets/work-image-cash.png"
import workimagecart from "../assets/work-image-cart.png"

const Work = () => {
    const workinfodata = [

        {
            image: workimagewallet,
            title:"Wallet",
            text: "Pay with your wallet get exciting reward",
        },
        {
            image: workimagecart,
            title:"Your Cart",
            text: "Add items in your cart now",
        },
        {
            image: workimagecash,
            title:"Pay with Cash",
            text: "Get upto 80% cashbacks ",
        },
    ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">WORK</p>
            <h1 className="primary-heading">How it works</h1>
            <p className="primary-text">
                explore the exciting offer now don't miss the chance
                to grab your products for you 
                and your loved ones!!!!!
            </p>

        </div>
        <div className="work-section-bottom">
            {
                workinfodata.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src ={data.image}></img>
                        </div>
                        <h2>{data.text}</h2>
                        <p>{data.text}</p>
                    </div>

                ))
            }
        </div>

    </div>
  )
}

export default Work