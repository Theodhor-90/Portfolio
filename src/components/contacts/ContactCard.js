import React from 'react';

const ContactCard = (props) =>{
  return(
    <a
      className='contact-container flex between p-h-10'
      href={props.link} target='blank'>
      <div className='centralizer'>
        <img className={props.index===1 ? 'yahoo' : 'contact-image'} src={props.icon} alt='nothing' />
      </div>
      <div className='centralizer fh contact-text'>
        {props.text}
      </div>
    </a>
  )
}

export default ContactCard;
