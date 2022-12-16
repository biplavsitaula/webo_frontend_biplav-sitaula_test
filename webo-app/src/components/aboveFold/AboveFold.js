import React from 'react'
import './AboveFold.css';
import AboveFoldData from './AboveFoldData';
import hand from './hand.png';


const AboveFold = () => {
    return (
        <div>
            {
                AboveFoldData.map((data, index) => {
                    return (
                        <div className='header'>
                            <div className='navigation'>
                                <div className='logo'>
                                    {data.logo}
                                </div>
                                <div className='list'>
                                    <ul>
                                        <li>{data.li[0]}</li>
                                        <li>{data.li[1]}</li>
                                        <li>{data.li[2]}</li>
                                        <li>{data.li[3]}</li>
                                    </ul>
                                    <div className='subList'>
                                        <div className='sub1'>
                                            {data.sub1}
                                        </div>
                                        <button className='sub2'>Start Free</button>
                                    </div>
                                </div>
                            </div>
                            <div className='headingBody'>
                                <h2>{data.heading}</h2>
                                <p>{data.text}</p>
                                <button className='getStarted'>Get Started</button>
                                
                                    <div className='img1'><img src={hand} alt='This is first hand.' height={500} width={350} />
                                    </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default AboveFold


