import React from 'react'
import AboveFold from '../aboveFold/AboveFold'
import SectionHeading from '../sectionHeading/SectionHeading'
import ValueProps from '../valueProps/ValueProps'
import SectionContent from '../sectionContent/SectionContent'

const Home = () => {
  return (
    <div>
      <AboveFold />
      <SectionHeading />
      <ValueProps />
      <SectionContent />
    </div>
  )
}

export default Home