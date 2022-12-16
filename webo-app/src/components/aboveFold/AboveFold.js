import React from 'react'
import './AboveFold.css'
import AboveFoldData from './AboveFoldData'
import hand from './hand.png'
import play from './play.png'
import open from './open.png'
import oracle from './oracle.png'
import morpheus from './morpheus.png'
import samsung from './samsung.png'
import monday from './moday.png'
import segment from './segment.png'
import protonet from './protonet.png'


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
                                <div className='buttons'>
                                    <button className='getStarted' height={50}>Get Started</button>
                                    <div className='play'>
                                        <img src={play} className='playButton' alt='playButton' width={40} height={40} />
                                        {data.play}
                                    </div>
                                    <div className='img1'>
                                        <img src={hand} alt='This is first hand.' height={800} width={350} />
                                    </div>
                                </div>

                            </div>
                            <div className='companies'>
                                <div className='companyText'>{data.companyTag}</div>
                                <div className='companyLogos'>
                                    <li><img src={open} alt='open' height={20} width={120} /></li>
                                    <li><img src={oracle} alt='oracle' height={20} width={120} /></li>
                                    <li><img src={morpheus} alt='morpheus' height={20} width={120} /></li>
                                    <li><img src={samsung} alt='samsung' height={20} width={120} /></li>
                                    <li><img src={monday} alt='monday' height={20} width={120} /></li>
                                    <li><img src={segment} alt='segment' height={20} width={120} /></li>
                                    <li><img src={protonet} alt='protonet' height={20} width={120} /></li>
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


