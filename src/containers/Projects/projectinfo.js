const myProjects = [
  {
    name: 'Kegged.',
    github: 'https://github.com/kegged/client',
    deploy: 'http://174.138.43.93/',
    description: 'A social media app driven by user activity to discuss and discover breweries and brews around North Carolina.',
    techStack: 'Vue.js, Vuex, Nuxt, Vue Stack Grid, Element UI, Firebase, Axios, JWT, bcrypt, Sequelize, Supertest, Mocha, Chai, Express.js',
    tag: 'VUE.JS',
    siteImage: require('../../assets/images/projects/kegged.png'),
    logoImage: require('../../assets/images/logos/keg.png')
  },
  {
    name: 'Garlic',
    github: 'https://github.com/paulz92/garlic',
    deploy: 'https://paulz92.github.io/garlic/',
    description: 'Your all in one app for recipe seaching, shopping lists, grocery store locations, and reviews.',
    techStack: 'JavaScript, jQuery, HTML5, CSS3, Materialize, Edamam Recipe API, Google Maps API (Places Library), Firebase',
    tag: 'JQUERY',
    siteImage: require('../../assets/images/projects/garlic.png'),
    logoImage: require('../../assets/images/logos/garlic.png')
  },
  {
    name: 'Torq',
    github: 'https://github.com/try-torq/client',
    deploy: 'http://167.99.6.76/',
    description: "Designed with Pinterest's UI in mind, Torq is an app for car enthusiasts to create profiles, post about cars, and comment on other posts.",
    techStack: 'React.js, Next.js, Redux, SASS, Webpack, JWT, bcrypt, Material UI, Mongoose, MongoDB, Google Cloud',
    tag: 'REACT.JS',
    siteImage: require('../../assets/images/projects/torq.png'),
    logoImage: require('../../assets/images/projects/torq.png')
  },
  {
    name: 'My Portfolio',
    github: 'https://github.com/paulz92/Portfolio',
    deploy: 'https://github.com/paulz92/Portfolio',
    description: "Had to include this one! The site you're currently on, a huge enhancement of my basic portfolio, built with React. Could also pass as a Colorado travel agency.",
    techStack: 'React.js, Material UI, CSS3, CSS Modules, React Stack Grid',
    tag: 'REACT.JS',
    siteImage: require('../../assets/images/projects/portfolio.png')
  },
  {
    name: 'NHL News Scraper',
    github: 'https://github.com/paulz92/News-Scraper',
    deploy: 'https://nhl-news-scraper-pz.herokuapp.com/',
    description: 'A web app that lets users scrape, view, and leave comments on the latest NHL.com news articles.',
    techStack: 'Node.js, MongoDB, Mongoose, Express.js, Handlebars.js, Materialize, Cheerio, HTML5, CSS3, JavaScript',
    tag: 'VANILLA JS',
    siteImage: require('../../assets/images/projects/scraper.png'),
    logoImage: require('../../assets/images/logos/hockey.png')
  },
  {
    name: 'Bamazon',
    github: 'https://github.com/paulz92/Bamazon',
    description: 'A node.js and MySQL app for customers to view items and place orders, managers for inventory control, and supervisors to track department sales and revenue.',
    techStack: 'Node.js, MySQL, JavaScript, NPM packages inquirer and console.table',
    tag: 'NODE.JS',
    siteImage: require('../../assets/images/projects/bamazon.png')
  },
  {
    name: 'Eat-Da-Burger',
    github: 'https://github.com/paulz92/burger',
    deploy: 'https://eat-da-burger-pzhw.herokuapp.com/',
    description: 'A burger logger utilizing MySQL, Node, Express, Handlebars and a homemade ORM which follows the MVC design pattern.',
    techStack: 'Node.js, MySQL, Express.js, Handlebars.js, Bootstrap, JawsDB, JavaScript, HTML5, CSS3',
    tag: 'NODE.JS',
    siteImage: require('../../assets/images/projects/burger.png'),
    logoImage: require('../../assets/images/logos/burger.png')
  },
  {
    name: 'Sports Trivia',
    github: 'https://github.com/paulz92/TriviaGame',
    deploy: 'https://paulz92.github.io/TriviaGame/',
    description: 'A simple 10 question trivia quiz to test your knowledge of various sports, players, and stats.',
    techStack: 'JavaScript, jQuery, HTML5, CSS3, Google Fonts',
    tag: 'JQUERY',
    siteImage: require('../../assets/images/projects/trivia.png'),
    logoImage: require('../../assets/images/logos/trivia.png')
  },
  {
    name: 'Crystal Collector',
    github: 'https://github.com/paulz92/week-4-game',
    deploy: 'https://paulz92.github.io/week-4-game/',
    description: 'A simple numbers game - click crystals to determine crystal values and use math to reach the target score.',
    techStack: 'JavaScript, jQuery, HTML5, CSS3, Google Fonts',
    tag: 'JQUERY',
    siteImage: require('../../assets/images/projects/crystal.png'),
    logoImage: require('../../assets/images/logos/crystal.png')
  },
  {
    name: 'Train Schedule',
    github: 'https://github.com/paulz92/Firebase-Train-Schedule',
    deploy: 'https://paulz92.github.io/Firebase-Train-Schedule/',
    description: 'A fictional train schedule where user can add trains and view trains added by other users. Remove and add as you please.',
    techStack: 'JavaScript, jQuery, HTML5, CSS3, Bootstrap, Google Fonts, Firebase, Moment.js',
    tag: 'JQUERY',
    siteImage: require('../../assets/images/projects/train.png'),
    logoImage: require('../../assets/images/logos/train.png')
  },
  {
    name: 'Gif Generator',
    github: 'https://github.com/paulz92/GifTastic',
    deploy: 'https://paulz92.github.io/GifTastic/',
    description: 'You guessed it - this app generates gifs. Users can click buttons to retrieve Gifs from Giphy API, and can add new buttons as well.',
    techStack: 'JavaScript, jQuery (AJAX), HTML5, CSS3, Bootstrap, Google Fonts, Giphy API',
    tag: 'VANILLA JS',
    siteImage: require('../../assets/images/projects/gif.png'),
    logoImage: require('../../assets/images/logos/gif.png')
  },
  {
    name: 'Hockey Hangman',
    github: 'https://github.com/paulz92/Hangman-Game',
    deploy: 'https://paulz92.github.io/Hangman-Game/',
    description: "My first JavaScript app. I purposely left the original code in tact so that I can reference my improvement as a developer. Play hockey hangman! Enjoy the bugs, cherish the bugs!",
    techStack: 'JavaScript, HTML5, CSS3, Google Fonts',
    tag: 'VANILLA JS',
    siteImage: require('../../assets/images/projects/hangman.png'),
    logoImage: require('../../assets/images/logos/hangman.png')
  }
]

export default myProjects;