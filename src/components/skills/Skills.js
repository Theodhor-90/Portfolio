import React from 'react';
import MainSkill from './MainSkill';
import Frame from './Frame';
import Tool from './Tool';
import addresses from './../../js/skillsAddress.js';
import tools from './../../js/toolsAddress.js';

const monitor = require('./../../Assets/Footer/monitor.png');
const tablet = require('./../../Assets/Footer/tablet.jpg');
const smartphone = require('./../../Assets/Footer/smartphone.png');

let mainSelector;

class Skills extends React.Component{
  constructor(){
    super();
    this.changeTablet = this.changeTablet.bind(this);
    this.changeDesktop = this.changeDesktop.bind(this);
    this.changePhone = this.changePhone.bind(this);
  }
  selectors = {};
  componentDidMount(){
    this.selectors.section = document.querySelectorAll('.frame-section')[1];
    this.selectors.choices = document.querySelectorAll('.choice');
    mainSelector = document.querySelector('.skills');
    this.props.handleMount(mainSelector);
  }

  selectFrame(index){
    this.selectors.choices.forEach(choice => choice.classList.remove('selected-frame'));
    this.selectors.choices[index].classList.add('selected-frame');
  }

  changeTablet(){
    this.selectors.section.classList.remove('phone');
    this.selectors.section.classList.add('tablet');
    this.selectFrame(1);
  }
  changeDesktop(){
    this.selectors.section.classList.remove('tablet','phone');
    this.selectFrame(0);
  }
  changePhone(){
    this.selectors.section.classList.remove('tablet');
    this.selectors.section.classList.add('phone');
    this.selectFrame(2);
  }

  render(){
    return(
      <div className='skills flex column-reverse-mobile between fw zoom-in'>
        <div className='skills-left mobile flex column-reverse-mobile column between'>
          <div onClick={() => this.props.handleKey('portfolio')} className='centralizer v-margin-mobile flex-wrapper fw'>
            <div className='centralizer centralized project-link'>
            </div>
            <div className='frame-section'></div>
          </div>
          <div className='flex v-margin-mobile between column fw'>
            <div className='centralizer v-padding-small centralized'>
              <img alt='nothing' src={monitor} className='choice selected-frame' onClick={this.changeDesktop}/>
              <img alt='nothing' src={tablet} className='choice' onClick={this.changeTablet}/>
              <img alt='nothing' src={smartphone} className='choice' onClick={this.changePhone}/>
            </div>
            <div className='frame-section v-padding-medium flex around'>
              <div className='frames-container flex'>
                <div className='centralizer frame-click absolute'>Click on one of the icons above </div>
                <Frame entry='first' />
                <Frame entry='second'/>
                <Frame entry='third' />
              </div>
            </div>
          </div>
        </div>
        <div className='skills-right mobile flex column between'>
          <div className='centralizer v-margin-mobile column fw'>
            <div className='skills-title centralizer centralized'>
              Techstack
            </div>
            <div className='v-padding-medium fw flex around flex-wrapper'>
              {addresses.map(address =>
                <MainSkill
                  key={address.skill}
                  text={address.skill}
                  image={address.address}
                />
              )}
            </div>
          </div>
          <div className='centralizer v-margin-mobile flex-wrapper fw'>
            <div className='skills-title centralizer centralized'>
              Additional tools
            </div>
            {tools.map(tool =>
              <Tool
                key={tool.tool}
                text={tool.tool}
                image={tool.address}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
