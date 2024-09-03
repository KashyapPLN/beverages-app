import React from 'react';
import './exploreMenu.css';
import juice from '../../../assets/juice.jpeg';
import smoothies from '../../../assets/strawberry-banana_smoothie.jpg';
import popsicles from '../../../assets/popsicles.jpg';
import milkshakes from '../../../assets/milkshakes.jpg';
import thickshakes from '../../../assets/thickshake.png';
import icecream from '../../../assets/icecream.png';
import mocktails from '../../../assets/mocktails.jpg';

export default function ExploreMenu() {
    const menuList =[
        {
            id:1,
            category:'juices',
            pic:juice
        },
        {
            id:2,
            category:'smoothies',
            pic:smoothies
        },
        {
            id:3,
            category:'mocktails',
            pic:mocktails
        },
        {
            id:4,
            category:'milkshakes',
            pic:milkshakes
        },
        {
            id:5,
            category:'thickshakes',
            pic:thickshakes
        },
        {
            id:6,
            category:'popsicles',
            pic:popsicles
        },
        {
            id:7,
            category:'ice creams',
            pic:icecream
        }
    ]
    
  return (
    <div className='explore-menu'>
        <div className='explore-menu-text mt-2'>
        <h2>Pick Your Blend</h2>
        <p>Indulge in your dream blend today and explore a world of refreshing delights crafted just for you!</p>
        </div>       
<div className='explore-menu-list'>
    {
        menuList.map((item) => {
            return (
                <div id={item.id} key={item.id} className='explore-menu-list-item'>
                    <div className='img-container'>
                        <img src={item.pic} alt={item.category} />
                    </div>
                    <p>{item.category}</p>
                </div>
            );
        })
        
    }
</div>
    </div>
  )
}
