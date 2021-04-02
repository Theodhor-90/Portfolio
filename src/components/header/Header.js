import React from 'react';
import NavRight from './NavRight';

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      sun: false,
      burger: false
    }
    this.updateSun = this.updateSun.bind(this);
    this.updateBurger = this.updateBurger.bind(this);
    this.scanWidth = this.scanWidth.bind(this);
  }

  scanWidth(){
    if(this.state.burger && window.innerWidth > 950){
      this.setState({ burger: false });
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.scanWidth)
  }

  updateBurger(){
    this.setState({ burger: !this.state.burger});
  }

  updateSun(){
    let middle = this.state.sun;
    middle = !middle;
    this.changeColor();
    this.setState({ sun: middle });
  }

  changeColor(){
    if(this.state.sun){
      document.documentElement.style
    .setProperty('--back', 'white');
    document.documentElement.style
    .setProperty('--regular', 'black');
  } else {
    document.documentElement.style
    .setProperty('--back', 'black');
    document.documentElement.style
    .setProperty('--regular', 'white');
  }
  }
  render(){
    return(
      <div className={`nav-container ${this.state.burger ? 'burger-active' : ''}`}>
        <div className='navbar flex between fw fh absolute'>
          <div className='navbar-left flex fh'>
            <div className='centralizer dancing-bold'>Theodhor Shyti</div>
          </div>
          <NavRight
            navbarKeys={this.props.navbarKeys}
            cN='navbar-right flex fh'
            handleKey={this.props.handleKey}
            updateSun={this.updateSun}
            sun={this.state.sun} />
          <div
            className={`burger flex column ${this.state.burger ? 'burger-active' : ''}`}
            onClick={this.updateBurger}>
            <div className='line-1'></div>
            <div className='line-2'></div>
            <div className='line-3'></div>
          </div>
        </div>
        <NavRight
          navbarKeys={this.props.navbarKeys}
          cN='nav-mobile flex around fw fh absolute'
          handleKey={this.props.handleKey}
          updateSun={this.updateSun}
          sun={this.state.sun} />
      </div>
    )

  }
}

export default Header;
