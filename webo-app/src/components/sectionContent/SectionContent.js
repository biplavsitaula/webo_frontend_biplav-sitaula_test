import React from 'react'
import SectionContentData from './SectionContentData'
import './SectionContent.css'
import rSectionContentData from './rSectionContentData'

const SectionContent = () => {
    return (
        <div className='sectionBody'>
            {
                <div className='leftSecCont'>   {/*This is left side content*/}
                    {SectionContentData.map((data, index) => {
                        return (
                            <div className='sectionContent'>
                                <img src={data.imag} className='secImg' alt='ImageError' height={30} width={30} />
                                <div className='secData'>
                                    <div className='money'>{data.money}</div>
                                    <div className='text'>{data.mText}</div></div>
                            </div>
                        )
                    })}
                </div>

            }
            {
                <div className='rightSecCont'>  {/*This is right side content*/}
                {
                    rSectionContentData.map((rdata, index) => {
                        return (
                        <div className='rSectionContent'>
                            <div className='tag'>{rdata.tag}</div>
                            <div className='rSecHeading'>{rdata.rSecHeading}</div>
                            <div className='rText'>{rdata.rText}</div>
                            <div className='points'>
                            <div className='point1'>{rdata.point1}</div>
                            <div className='point2'>{rdata.point2}</div>
                            <div className='point3'>{rdata.point3}</div></div>
                            </div>
                            )
                    })
                }
            </div>
            }
        </div>
    )
}

export default SectionContent