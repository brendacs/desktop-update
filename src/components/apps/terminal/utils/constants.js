export const config = {
  greetings: 'Last login: ' + new Date,
  height: '100%',
  name: 'interpreter',
  prompt: 'brendacs@Brendas-MBP-2020:~$ '
};

export const cmdData = {
  help: 'help\ncd\nls\npwd',
  ls: 'Education\nExperience\nProjects\nDocuments',
  pwd: '~/Brenda_Zhang/Desktop',
  sudo: 'zsh: sudo: permission denied'
};

export const subcmdData = {
  '../': {
    files: 'Education\nExperience\nProjects\nDocuments',
    folder: '',
    type: 'desktop'
  },
  desktop: {
    files: 'Education\nExperience\nProjects\nDocuments',
    folder: '',
    type: 'desktop'
  },
  documents: {
    files: 'Resume.pdf\nAbout.pdf\nMonk Mode.pdf\nNotion Board.pdf\nQuotes.pdf',
    folder: '/Documents',
    type: 'folder'
  },
  education: {
    files: 'Burton High School.jpg\nUC Berkeley.jpg\nCognitive Science Major.pdf',
    folder: '/Education',
    type: 'folder'
  },
  experience: {
    files: 'Adobe.jpg\nThe Climate Corporation.jpg\nStowk.jpg\nRegistria.png\nWeb Design DeCal.pdf\nAsian American Association.jpg\nFoundation or Letters.pdf',
    folder: '/Experience',
    type: 'folder'
  },
  projects: {
    files: 'Desktop.vue\nbrendacs.dev\nDiscord Stop Bot.js\nDevil\'s Advocate.html\nReferobot.js\nLiquefy Web App.js\nRolley.py\nCS Career Hackers.html\nPerks.Guide Redesign.js\nNewsworthy New Tab.html',
    folder: '/Projects',
    type: 'folder'
  }
};
