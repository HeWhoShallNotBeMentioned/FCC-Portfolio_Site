//Putting projects on the page
(function() {
  let addHtml = '';
  const projectsObjects = [
    {
      dataTags:
        'All, React, vanilla-JS, JSX, geolocation, API-Inbound, Axios, create-react-app, Heroku',
      imageSrc: './images/weather.png',
      alt: 'Local Weather App',
      h4Title: 'Local Weather',
      pBodyText:
        'Application uses HTML5 geolocation and a weather API to give the weather in your current location. It also allows the user to switch between Celsius and Fahrenheit temps along with Meters/Sec and Miles/Hour for wind speed. Sunset and sunrise are calculated from Unix time. Wind direction is calculated based upon the retrieved degrees. There is ability on the backend to special CSS based on user latitude and longitude. This is currently set for Wilmington, NC. A pop-up will ask for permission to access your browser.Allow this or the api connection, and therefor the app, will not work.',
      webUrlLink: 'https://react-weather-app-wilm.herokuapp.com/',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/React_Weather_App',
      gitUrlLabel: 'GitHub',
    },
    {
      dataTags:
        'All, React, Node.js, NPM, JSX, Axios, React Router, API-Inbound, Firebase',
      imageSrc: './images/github.png',
      alt: 'Github Battle',
      h4Title: 'Github Battle',
      pBodyText:
        "There are 2 parts of this project. The first allows 2 people to put in their Github accounts and 'battle' with each other. The second part allows you to see the 30 most popular Github repos are along with the 30 top repos by language including JavaScript, Ruby, Java, CSS, and Python. Check out the app on the Website link below and battle your friends or see what is popular on Github.",
      webUrlLink: 'https://github-battle-8974e.firebaseapp.com/',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/TM_React_Fundamentals',
      gitUrlLabel: 'GitHub',
    },
    {
      dataTags:
        'All, React, PostgreSQL, Sequelize, Redux, Axios, JSX, socket.io, Express.js, NPM, Node.js, Webpack, Babel, Heroku',
      imageSrc: './images/ratquest.png',
      alt: 'Rat Quest',
      h4Title: 'Rat Quest',
      pBodyText:
        ' A group project from Fullstack Academy, Rat Quest is a learning gamified. Your challenge, if you choose to accept it, is to do JavaScript coding challenges. Completing a group of challenges and you get to move up a level. Move up enough levels your rat escapes the lab. Go to the website and play Rat Quest in single player or against a friend.',
      webUrlLink: 'https://rat-quest.herokuapp.com',
      webUrlLabel: 'Website',
      gitUrlLink: 'https://github.com/HeWhoShallNotBeMentioned/RatQuest',
      gitUrlLabel: 'GitHub',
    },
    {
      dataTags: 'All, vanilla-JS, Bootstrap, jQuery, AJAX, JSON, API-Inbound',
      imageSrc: './images/employee-directory.png',
      alt: 'Employee Directory',
      h4Title: 'Employee Directory',
      pBodyText:
        "12 random 'employees' are pulled from randomuser.me api. Their basic data is put into 'cards' that are displayed on the page. Each card is created with a modal with more employee detail. Once a modal is opened, arrow buttons are provided to allow seeing all employee  modals by scrolling. Going from last to first and vis-versa is supported. There is a search function that searches the 12 users on each key-up in the employee name and userlogin. The search also  brings back users when individual letters or the entire search is removed.",
      webUrlLink:
        'http://chrisunderwood.info/Employee_Directory_Project_5/index.html',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/Employee_Directory_Project_5',
      gitUrlLabel: 'Github',
    },
    {
      dataTags: 'All, vanilla-JS, IIFE, Google-fonts',
      imageSrc: './images/tic-tac-toe.png',
      alt: 'Tic-Tac-Toe',
      h4Title: 'Tic-Tac-Toe',
      pBodyText:
        'This game is a combination of the requirements for projects required by Free Code Camp and Team Treehouse Full Stack Tech Degree. It has the option for 2 human players or 1 human and 1 computer player. Names for the human players are customizable as are which player gets to be x or o. There are defaults in the system for each of these settings. The game default is for 2 human players.',
      webUrlLink: 'http://chrisunderwood.info/Tic_Tac_Toe/index.html',
      webUrlLabel: 'Website',
      gitUrlLink: 'https://github.com/HeWhoShallNotBeMentioned/FCC-Tic-Tac-Toe',
      gitUrlLabel: 'GitHub',
    },
    {
      dataTags: 'All, jQuery, Bootstrap, Google-fonts',
      imageSrc: './images/simon_game.jpg',
      alt: 'Simon Game',
      h4Title: 'Simon Game',
      pBodyText:
        "A JS version of the classic children's memory game. 4 different colors and matching sounds are played generated in random order by the game. The game starts with one color/sound and one is added until 20 where the game is won by the player.  In normal mode, if the player makes a mistake the computer  will repeat the steps so far until the player enters them in the right order. In strict mode, one mistake and the computer goes back to the first level and generates a new sequence.",
      webUrlLink: 'http://chrisunderwood.info/Simon_Game/index.html',
      webUrlLabel: 'Website',
      gitUrlLink: 'https://github.com/HeWhoShallNotBeMentioned/FCC_Simon_Game',
      gitUrlLabel: 'GitHub',
    },
    {
      dataTags: 'All, vanilla-JS, IIFE, Bootstrap',
      imageSrc: './images/calculator.png',
      alt: 'Calculator',
      h4Title: 'Calculator',
      pBodyText:
        'Basic 4 function (+, -, *, /) Javascript calculator. Calculations can be chained to each other and there is a clear button. Decimals are supported.',
      webUrlLink: 'http://chrisunderwood.info/Calculator/index.html',
      webUrlLabel: 'Website',
      gitUrlLink: 'https://github.com/HeWhoShallNotBeMentioned/FCC-Calculator',
      gitUrlLabel: 'GitHub',
    },
    {
      dataTags: 'All, vanilla-JS, API-Inbound, AJAX, Bootstrap, jQuery, JSON',
      imageSrc: './images/wikipedia.png',
      alt: 'Wikipedia App',
      h4Title: 'Wikipedia Viewer',
      pBodyText:
        'Application that allows a user to search the Wikipedia API. The user can click a button to be returned a random Wikipedia article or enter text in a search box to view a list of up to 10 Wikipedia articles. Articles have a title, summary (if provided), and a link to click for direct access to the article.',
      webUrlLink: 'http://chrisunderwood.info/Wikipedia_Viewer/index.html',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/FCC-Wikipedia_Viewer',
      gitUrlLabel: 'GitHub',
    },
    {
      dataTags: 'All, vanilla-JS, Bootstrap, Google-fonts',
      imageSrc: './images/timer.png',
      alt: 'Timer App',
      h4Title: 'Timer',
      pBodyText:
        'A countdown timer that shows days, hours, minutes, and seconds. Time inputed is done in minutes. It will accept partial minutes such as .5 for 30 seconds. A default time of 25 minutes is provided. When the timer is completed, another time may be entered without refreshing the page.',
      webUrlLink: 'http://chrisunderwood.info/Pomodoro_Timer/index.html',
      webUrlLabel: 'Website',
      gitUrlLink: 'https://github.com/HeWhoShallNotBeMentioned/FCC-timer',
      gitUrlLabel: 'Github',
    },
    {
      dataTags: 'All, vanilla-JS, Node.js, NPM, x-ray, json2csv',
      imageSrc: './images/web-scraping.jpg',
      alt: 'Content scraper',
      h4Title: 'Content scraper',
      pBodyText:
        ' This application pulls information about the latest shirts on the website www.shirts4mike.com. Data scraped is the shirt page url, shirt img url, shirt title, price, and the time the data was gathered. The data is pulled by x-ray npm module and processed into csv format by json2csv npm module. A file is created for data, if one has not been already created. There is an error message configured for when the system is unable to retrieve data. The message is printed to a seperate log file. A custom start procedure has been created: npm start. There is no website, as the application runs on the command line.',
      webUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/Content_Scraper_Project_6',
      webUrlLabel: 'Github',
      gitUrlLink: '',
      gitUrlLabel: '',
    },
    {
      dataTags: 'All, jQuery, vanilla-JS',
      imageSrc: './images/interactive-form.png',
      alt: 'interactive form',
      h4Title: 'Interactive Form',
      pBodyText:
        'Most projects have a form to take in user data. This form does that for a fictional JavaScript conference. Most fields have some sort of error checking with custom messages. The form is smart enough to know if you are signed up for one session that you cannot sign up for another session at the same time. Further shirt options are hidden until a size has been chosen.',
      webUrlLink:
        'http://chrisunderwood.info/Interactive_Form_Project_3/index.html',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/Interactive_Form_Project_3',
      gitUrlLabel: 'Github',
    },
    {
      dataTags: 'All, vanilla-JS',
      imageSrc: './images/pagination-filter.png',
      alt: 'Content and Pagination Filter',
      h4Title: 'Content and Pagination Filter',
      pBodyText:
        'This application counts the total number of students and creates the number of pages necessary to have 10 students per page with the remainder, if any, on the last page. There is also a full text search feature for searching the students and their associated data. If there are no students found in the search, a message tells you. The search completes on each key press. Search does not use pagination.',
      webUrlLink:
        'http://chrisunderwood.info/Pagination_&_Content_Filter_Project_2/index.html',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/Pagination_-Content_Filter_Project_2',
      gitUrlLabel: 'Github',
    },
    {
      dataTags: 'All, Gulp, Browser_Sync, NPM, Node.js',
      imageSrc: './images/gulp.png',
      alt: 'Gulp & Front End Site',
      h4Title: 'Gulp & Front End Site',
      pBodyText:
        'Using Gulp to put a front end project into production ready status. The website itself for this project is not the focus. Instead it is the build tool Gulp that takes center stage. Gulp installs our dependencies, minifies & concats out javascript, converts Sass to CSS, removes our old production files, creates CSS and JS maps for debugging in DevTools, optimize our images, move all the files to the specified production folder, and watch for changes to Sass so the page can be auto updated. Note that the production location is not in the current file structure but is created upon running the proper gulp commands. See the readme.md for more details.',
      webUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/Gulp_Font_End_Project_8',
      webUrlLabel: 'Github',
      gitUrlLink: '',
      gitUrlLabel: '',
    },
    {
      dataTags: 'All, XML, Google-fonts, XSL, XSLT',
      imageSrc: './images/xml2html.png',
      alt: 'XML',
      h4Title: 'Convert XML to HTML Project',
      pBodyText:
        'An intro to using XSL(T) to transform XML to HTML. There are multiple sorts/filters on the data: 1) On the select statement artists name Bob Dylan are excluded, 2) results are sorted by country and then artist, and 3) an if statement includes only those items with a price less than 10.',
      webUrlLink:
        'https://hewhoshallnotbementioned.github.io/XSLT_Project/cdcatalog.xml',
      webUrlLabel: 'Website',
      gitUrlLink: 'https://github.com/HeWhoShallNotBeMentioned/XSLT_Project',
      gitUrlLabel: 'Github',
    },
    {
      dataTags: 'All, Article, XML, XSL, XSLT',
      imageSrc: './images/xslt.jpg',
      alt: 'XML',
      h4Title: 'Using XML to Create Web Pages',
      pBodyText:
        'Today’s web applications are data driven. The two most common formats for sharing data are JSON and XML. In this article, I will be covering how to convert raw XML into HTML (and CSS) that can be consumed by any browser.',
      webUrlLink:
        'https://medium.com/@cunderwoodmn/using-xml-to-create-web-pages-541d91593104',
      webUrlLabel: 'Article',
      gitUrlLink: '',
      gitUrlLabel: '',
    },
    {
      dataTags: 'All, vanilla-JS',
      imageSrc: './images/random-quote-generator.png',
      alt: 'Random Quote Generator',
      h4Title: 'Random Quote Generator',
      pBodyText:
        'Program rotates an array of predefined quote objects with 2 required and 3 optional properties. The system knows to change the required output based upon which fields are available in each object. The objects are rotated every five seconds by the system or upon the button click. The quotes do not repeat until all the quotes are used each rotation. Math.random was used to generate the random number to pick the quote.',
      webUrlLink:
        'http://chrisunderwood.info/Quote_Generator_Project_1/index.html',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/Quote_Generator_Project_1',
      gitUrlLabel: 'Github',
    },

    {
      dataTags: 'All, Article, React Router, React',
      imageSrc: './images/ReactRouter4.jpeg',
      alt: 'React Router Logo',
      h4Title: 'React Router 4.x Parameters: Match, Location, & History',
      pBodyText:
        'While at Fullstack Academy we were introducted to React Router. I did not fully understand this package, especially the props that React Router can pass down. I wrote this article hoping to teach others what I have learned to give back to all of the learning I have done with the work others have provided. The article is published on Medium.',
      webUrlLink:
        'https://medium.com/@cunderwoodmn/react-router-4-x-parameters-9fc2854f10b3',
      webUrlLabel: 'Article',
      gitUrlLink: '',
      gitUrlLabel: '',
    },
    {
      dataTags: 'All, Article, GraphQL',
      imageSrc: './images/graphql.png',
      alt: 'GraphQL Logo',
      h4Title: 'So What is GraphQL Anyway?',
      pBodyText:
        'An article I wrote about the concepts around GraphQL. What it is. Why it was created. Why developers should care. The article is published on Medium. I wanted to learn more about GraphQL and strongly feel the best way to learn something is to teach it.',
      webUrlLink:
        'https://medium.com/@cunderwoodmn/so-what-is-graphql-anyway-b4367db3159e',
      webUrlLabel: 'Article',
      gitUrlLink: '',
      gitUrlLabel: '',
    },
    {
      dataTags: 'All, Bootstrap',
      imageSrc: './images/hank-greenberg.jpg',
      alt: 'Hank Greenberg',
      h4Title: 'Hank Greenberg Tribute Site',
      pBodyText:
        'Tribute site to Hank Greenberg. The site was created for the purpose of getting familiar with BootStrap 4. Set up the site with the proper CDN files. Uses various Bootstrap techniques including divs, wells, col-md-*, blockquote, container, container-fluid, and footer-copyright.',
      webUrlLink: 'http://chrisunderwood.info/Tribute_Site/index.html',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/FCC_Tribute_Site_Greenberg',
      gitUrlLabel: 'Github',
    },
    {
      dataTags: 'All, Bootstrap, Google-fonts, IIFE, vanilla-JS, WordCloud2.js',
      imageSrc: './images/portfolio.png',
      alt: 'Portfolio Site',
      h4Title: 'Portfolio Site',
      pBodyText:
        'The site was created to show case my development skills and was originally part of the Free Code Camp front end track. Structure of the page is done with Bootstrap and accentuated with CSS. The word cloud and project sorting buttons were adapted from "JavaScript and JQuery: Interactive Front-End Web Development".',
      webUrlLink: 'http://chrisunderwood.info/',
      webUrlLabel: 'Website',
      gitUrlLink:
        'https://github.com/HeWhoShallNotBeMentioned/FCC-Portfolio_Site',
      gitUrlLabel: 'Github',
    },
  ];

  projectsObjects.forEach(proj => {
    return (addHtml += `<div
    class="col-md-4 projects"
    data-tags='${proj.dataTags}'
    >
    <div class="card">
      <img
        class="card-img-top img-fluid"
        src=${proj.imageSrc}
        alt=${proj.alt}
      />
      <div class="card-block">
        <h4 class="card-title">${proj.h4Title}</h4>
        <p class="card-text">
        ${proj.pBodyText}
        </p>
        <a
          href=${proj.webUrlLink}
          class="card-link"
          target="_blank"
          >${proj.webUrlLabel}</a
        >
        ${
          proj.gitUrlLink.length > 5
            ? ` <a
          href=${proj.gitUrlLink}
          class="card-link"
          target="_blank"
          >${proj.gitUrlLabel}</a
        </a>`
            : ''
        }
    
      </div>
    </div>
    </div>`);
  });
  document.getElementById('addHTML').innerHTML = addHtml;

  //Interactive Buttons

  let $projects = $('.projects');
  let $buttons = $('#buttons');
  let tagged = {};

  $projects.each(function() {
    let project = this;
    let projectTags = $(this).data('tags');
    // console.log("projectTags", projectTags);
    if (projectTags) {
      projectTags.split(',').forEach(function(tagName) {
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(project);
      });
    }
  });

  function sortObject(obj) {
    var arr = [];
    var prop;
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arr.push({
          key: prop,
          value: obj[prop],
        });
      }
    }
    arr.sort(function(a, b) {
      // console.log("a key ", a["key"].toUpperCase()," b key ", b["key"].toUpperCase());
      if (a.key.toUpperCase() < b.key.toUpperCase()) return -1;
      if (a.key.toUpperCase() > b.key.toUpperCase()) return 1;
      else return 0;
    });
    // console.table(arr);
    return arr;
  }

  let sorted = sortObject(tagged);

  $.each(sorted, function(val, val2) {
    let key = Object.values(val).join('');
    let num = Object.keys(val2).length;
    $('<button/>', {
      text: val2.key + ' (' + val2.value.length + ')',
      class: 'myHover',
      click: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $projects
          .hide()
          .filter(val2.value)
          .show();
      },
    }).appendTo($buttons);
  });

  //Word Box
  let tagged2 = Object.entries(tagged);

  let list = tagged2.map(function(word) {
    let x = word[0];
    let y = word[1].length;
    if (x == 'All') {
      return ['All', 6];
    }
    return [x, y];
  });

  // console.log("list ", list);
  WordCloud(document.getElementById('cloud'), {
    list: list,
    color: 'random-light',
    backgroundColor: 'black',
    gridSize: 30,
    weightFactor: 8,
    fontFamily: 'Nova Slim',
  });
})();
