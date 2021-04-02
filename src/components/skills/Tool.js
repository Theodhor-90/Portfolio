import React from 'react';

const Tool =(props) =>{
  return(
    <div className='quarter centralizer'>
      <div className='tool-container circular v-margin-medium'>
        <div className='tool-image-container fw fh'>
          <img className='fw fh circular' alt='nothing' src={props.image} />
        </div>
        <div className='tool-text-container centralizer column fw fh'>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default Tool;
