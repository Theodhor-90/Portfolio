import React from 'react';
import Ticket from './Ticket';

const Project = (props) =>{
  return(
    <div className='centralizer column p-25 fw'>
      <div className='dancing-bold centralizer fw'>
        {props.project.title}
      </div>
      <div className='project-container p-10 flex column-phone'>
        <div className='image-container centralizer'>
          {props.project.link ?
            <img alt='nothing' src={props.project.image} className='project-image phone-image'/> :
            <Ticket ticket={props.ticket} columns={[0,1,2,3,4,5,6,7,8]}/>
          }
        </div>
        <div className='project-content flex column between row-phone phone-content'>
          <div className='project-description phone-text centralizer v-margin-small centralized'>
            {props.project.description}
          </div>
          <div className='links-container phone-links flex around centralized column-phone'>
          {props.project.link ?
            <a href={props.project.link} target='blank' className='centralizer no-default project-link-s'>Demo</a>
            :
            <div className="centralizer project-link-s" onClick={props.newTicket}>New</div>
          }
            <div onClick={() => props.handleKey('contact')} className='centralizer project-link-s'>Ask for code</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
