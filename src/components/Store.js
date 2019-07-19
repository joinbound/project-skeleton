import React, { Component } from 'react';



class Store extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'Celine Purse',
          picture:
            'https://secure.avelleassets.com/productimages/Handbag/Celine/Celine-Pebbled-Leather-Nano-Luggage-Tote_93569_front_large_3.jpg',
          price: 10,
        },
        {
          name: 'Adidas Stan Smith',
          picture:
            'https://shop.r10s.jp/auc-rodeo/cabinet/adidas/m20325-11.jpg',
          price: 20,
        },
        {
          name: 'coffee',
          picture: 
          'https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa4ae30da/25239x.jpg?sw=345&sh=345&sm=fit&q=65',
          price: 5,
        },
        {
          name: 'Bottle',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/61kE2tvlmCL._AC_SL1150_.jpg',
          price: 12,
        },
        {
          name: 'Bear',
          picture:
            'https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa4ae30da/25239x.jpg?sw=345&sh=345&sm=fit&q=65',
          price: 5,
        },
      ],
    };
  }
  render() {
    let featured = null;
    let rewards = [];
    this.state.data.sort((a, b) =>
      a.price < b.price ? 1 : b.price < a.price ? -1 : 0
    );
    featured = this.state.data[0];
    rewards = this.state.data.slice(1);

    return (
      <div id="storeBody">

        <div id="featured">
          <img src={featured.picture} alt="" />
          <div className="featureGradientBox"> 
          <h1 className="nameText">
            {featured.name}
            <br></br>
            <img id="BerryIcon" src="/images/redBerryIcon.png" alt="berry"/>
            {featured.price}
          </h1>
          </div>
        </div>

        <div id="rewards">
          {rewards.map(reward => (

            <div id="rewardCard">
              <img src={reward.picture} alt="" />
              <div className="rewardGradientBox">
              <h1 className="rewardNameText">
              {reward.name}
              <br></br>
              <img id="BerryIcon" src="/images/redBerryIcon.png" alt="berry"/>
              {reward.price}
              </h1>
              </div>
            </div>
          ))}
          </div>
        
      </div>
    );
  }
 }
 export default Store;
 
 