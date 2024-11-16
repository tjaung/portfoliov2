import React from 'react'
import Honeycomb from './HoneyComb'

const SkillCard = ({title, skills}) => {

  return (
    <div className='flex flex-col items-center md:items-start justify-center md:justify-between md:flex-row'>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <Honeycomb items={skills} />
      </div>
    </div>
  )
}

export default SkillCard
