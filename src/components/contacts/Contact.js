import React from 'react';
import contacts from './../../js/contacts.js';
import ContactCard from './ContactCard';
let mainSelector;


class Contact extends React.Component{

  componentDidMount(){
    mainSelector = document.querySelector('.contact');
    this.props.handleMount(mainSelector);
  }

  render(){
    return(
      <div className='contact flex around column'>
        {contacts.map(contact =>
          <ContactCard
            key={contact.text}
            text={contact.text}
            icon={contact.icon}
            index={contact.index}
            link={contact.link}
          />
        )}
      </div>
    )
  }
}

export default Contact;
