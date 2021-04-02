const projects = [
  {
    title: 'Covid19 live updates',
    image: require('./../media/covid-app.png'),
    link: 'https://www.theodhorshyti.com/covid19/index.html',
    description: 'An app made mainly using React and Bulma, responsive for all screen sizes. A single API call is made while loading and the rest of data is manipulated using JS. The data displayed is up to date.'
  },
  {
    title: 'PokeReact',
    image: require('./../media/Poker-react.jpg'),
    link: 'https://www.theodhorshyti.com/PokeReact/index.html',
    description: 'Made with React, this game has all the featuers of a classic videopoker, including auto-hold on winning cards and a bonus stage that can be triggered.'
  },
  {
    title: 'Pokermachine',
    image: require('./../media/poker-6.png'),
    link: 'https://www.theodhorshyti.com/poker.html',
    description: 'A game made with pure Vanilla Js, CSS3 and HTML5, simulating a poker slot machine. Is possible to inrease and decrease the bet amount, and to swap 0-5 cards from the original draw. React-version also available'
  },
  {
    title: 'Bingo Ticket',
    ticket: true,
    image: '',
    link: false,
    description: 'A function that returns 15 numbers between 1-90, at least one number and max. 3 numbers for each column of 10,distributed evenly between 3 rows (Javascripts and Algorithms) '
  },
  {
    title: 'Artmapper',
    image: require('./../media/artmapper-2.png'),
    link: 'https://art-mapper.herokuapp.com/',
    description: 'A full stack application made using React on the front-end and Node.js/MongoDB on the back-end. Built with Webpack and Express with 2 other collegues, the app is deployed on Heroku. '
  },
  {
    title: 'Bingo',
    image: require('./../media/bingo-3.png'),
    link: 'https://www.theodhorshyti.com/bingo.html',
    description: 'A game made with Vanilla JS, where a bingo extraction is simulated. The user has to pick 3 out of 15 tickets, and competes against the computer, which will have the remaining 12 tickets. Game under revision (Switching to React)'
  },

]

export default projects;
