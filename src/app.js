import React from 'react';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Main from './components/Main';
import Contact from './components/contacts/Contact';
let toChange, previous, navElArray;

class App extends React.Component{
  constructor(){
    super();
    this.state={
      navbarKeys : {
        home: true,
        portfolio: false,
        skills: false,
        contact: false
      }
    }
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount(){
    previous = document.querySelector('.home');
    navElArray = document.querySelectorAll('.nav-el');
  }

  componentDidUpdate(){
    previous.classList.remove('zoom-out');
    previous.classList.add('zoom-in');
    setTimeout(() => toChange.classList.add('zoom-out'), 10);
  }

  handleKey(entry,prev){
    this.handlePrev();
    const middle = this.state.navbarKeys;
    Object.keys(middle).forEach(key => {
      middle[key] = false;
    })
    middle[entry] = true;
    navElArray.forEach(navEl => navEl.classList.remove('disabled'));
    if(entry === 'home'){
      navElArray[0].classList.add('disabled');
      navElArray[4].classList.add('disabled');
    } else if(entry === 'portfolio'){
      navElArray[1].classList.add('disabled');
      navElArray[5].classList.add('disabled');
    } else if(entry === 'skills'){
      navElArray[2].classList.add('disabled');
      navElArray[6].classList.add('disabled');
    } else {
      navElArray[3].classList.add('disabled');
      navElArray[7].classList.add('disabled');
    }
    setTimeout(() => this.setState({ navbarKeys : middle}), 610);
  }

  handleMount(entry){
    toChange = entry;
    previous = toChange;
  }

  handlePrev(){
    previous.classList.remove('zoom-out');
    previous.classList.add('zoom-in');
  }


  render(){
    return(
      <div>
        <Header handleKey={this.handleKey} navbarKeys={this.state.navbarKeys}/>
        {this.state.navbarKeys.home ?
          <Main handleKey={this.handleKey} handleMount={this.handleMount}/>
        :
        this.state.navbarKeys.portfolio ?
          <Portfolio handleKey={this.handleKey} handleMount={this.handleMount}/>
        :
        this.state.navbarKeys.skills ?
          <Skills handleKey={this.handleKey} handleMount={this.handleMount}/>
        :
          <Contact handleMount={this.handleMount}/>
        }
      </div>
    )
  }
}

export default App;
