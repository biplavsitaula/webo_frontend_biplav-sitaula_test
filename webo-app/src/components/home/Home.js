import React from 'react'
import AboveFold from '../aboveFold/AboveFold'
import SectionHeading from '../sectionHeading/SectionHeading'
import ValueProps from '../valueProps/ValueProps'
import SectionContent from '../sectionContent/SectionContent'
import BtnSectionContent from '../btnSectionCont/BtnSectionCont'
const Home = () => {
  return (
    <div>
      <AboveFold />
      <SectionHeading />
      <ValueProps />
      <SectionContent />
      <BtnSectionContent />
    </div>
  )
}

export default Home