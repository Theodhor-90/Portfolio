import React from 'react';

const MainSkill = (props) =>{
  return(
  <div className='third quarter-mobile centralizer'>
    <div className='flip-container centralizer circular v-margin-small'>
      <div className='flip'>
        <div className='flip-image-container centralizer fw fh'>
          <img alt='nothing' src={props.image} className='fw fh' />
        </div>
        <div className='flip-text centralizer fw fh'>{props.text}</div>
      </div>
    </div>
  </div>
  )
}

export default MainSkill;
