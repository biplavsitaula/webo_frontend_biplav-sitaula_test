import React from 'react'
import './ValueProps.css'
import ValuePropsData from './ValuePropsData'

const ValueProps = () => {
    return (
        <div className='valueBody'>
            {
                ValuePropsData.map((data, index) => (
                    <div className='valueProps'>
                        <div className='number'>{data.number}</div>
                        <div className='heading'>{data.heading}</div>
                        <div className='text'>{data.text}</div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default ValueProps

