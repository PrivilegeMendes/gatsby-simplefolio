import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Privilege Mendes', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Privilege',
  subtitle: "I'm an aspiring innovator",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quote.png',
    title: 'Quote Generator',
    info: 'This was an interesting project as an introduction to Web development and languages CSS and Javascript',
    info2: 'The site randomly generates a list of my favourite quotes. Check it out!',
    url: 'https://privilegemendes.github.io/quote-generator',
    repo: 'https://github.com/privilegemendes/quote-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'This is an interesting project as an introduction to using React and node.js. For the backend I am hosting the site using AWS Amplify.',
    info2:
      'Robofriends just has cards of friends with a search bar, nothing special. I should improve it soon',
    url: 'https://master.ds1pce5n1gs3k.amplifyapp.com/',
    repo: 'https://github.com/privilegemendes/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://linkedin.com/in/privilegemendes',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/privilegemendes',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/privilegemendes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
