import React from 'react'
import BtnSectionContData from './BtnSectionContData'
import './BtnSectionCont.css'
import SectionHeadingData from '../sectionHeading/SectionHeadingData'

function BtnSectionCont() {
    return (
        <div className='BtnSectionContBody'>
            {
                BtnSectionContData.map((data, index) => {
                    return (
                        <div>
                            <div className='lBtnSec'>
                                <div className='tag'>{data.tag}</div>
                                <div className='btnSecHead'>{data.heading}</div>
                                <div className='subHead'>{data.subHead}</div>
                                <div className='rightSectionHeading'>
                                    <div className='quotes'>{data.quotes}</div>
                                    <div className='author'>{data.author}</div>
                                </div>
                            </div></div>
                    )
                })
            }
        </div>
    )
}

export default BtnSectionCont