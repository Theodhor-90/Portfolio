import React from 'react';
import Intro from './Intro';
let mainSelector

class Main extends React.Component{

  componentDidMount(){
    mainSelector = document.querySelector('.home');
    this.props.handleMount(mainSelector);
  }

  render(){
    return(
      <div className='home'>
        <Intro />
        <div className='main flex column-mobile around fw'>
          <div className='half mobile' onClick={() => this.props.handleKey('portfolio')}>
            <div className='click'> My Projects</div>
            <div className='half-row proj-1'>

            </div>
            <div className='half-row proj-2'>

            </div>

          </div>
          <div className='half mobile flex between column'>
            <div className='half-col flex skills-1' onClick={() => this.props.handleKey('skills')}></div>
            <div className='half-col flex contacts' onClick={() => this.props.handleKey('contact')}>
              <div className='inside centralizer'>Get in touch</div>
              <div className='inside-2'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
