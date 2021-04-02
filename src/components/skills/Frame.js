import React from 'react';

const Frame = (props) =>{
  return(
    <div className={`frame-container ${props.entry}`}>
      <div className='frame-top'></div>
      <div className='frame-bottom flex between column'>
        <div className='frame-line'></div>
        <div className='frame-line'></div>
        <div className='frame-line'></div>
        <div className='frame-line'></div>
      </div>
    </div>
  )
}

export default Frame;
