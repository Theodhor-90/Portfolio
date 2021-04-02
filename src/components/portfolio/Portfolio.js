import React from 'react';
import Project from './Project';
import projects from './../../js/projects.js';
import makeTicket from './../../js/ticket';
let mainSelector;


class Portfolio extends React.Component{
  constructor(){
    super();
    this.state = { ticket: makeTicket()}
    this.newTicket = this.newTicket.bind(this);
  }

  newTicket(){
    console.log(this.state.ticket);
    this.setState({ ticket: makeTicket()});
  }

  componentDidMount(){
    mainSelector = document.querySelector('.portfolio');
    this.props.handleMount(mainSelector);
  }

  render(){
    return(
      <div className='portfolio v-padding-medium'>
        {projects.map(project =>
          <Project
            handleKey={this.props.handleKey}
            project={project}
            key={project.title}
            ticket={this.state.ticket}
            newTicket={this.newTicket}
            />
        )}
      </div>
    )
  }
}

export default Portfolio;
