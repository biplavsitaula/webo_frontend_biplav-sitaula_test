import React from 'react'
import SectionHeadingData from './SectionHeadingData'
import './SectionHeading.css'

const SectionHeading = () => {
    return (
        <div>
            {
                SectionHeadingData.map((data, index) => {
                    return (
                        <div className='sectionHeading'>
                            <div className='leftSectionHeading'>
                                <div className='Heading'>{data.heading}</div>
                                <div className='subHeading'>{data.subHeading}</div>
                            </div>
                            <div className='rightSectionHeading'>
                                <div className='quotes'>{data.quotes}</div>
                                <div className='author'>{data.author}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SectionHeading

