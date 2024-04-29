// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jun-fajr', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jun-fajr/gitprofile', 'jun-fajr/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          // title: 'Yamaha Planning Production',
          // description:
          //   'Aplikasi Dashboard untuk monitoring Perencanaan Produksi, menggunakan Fastify & React',
          // imageUrl:
          //   'https://i.ibb.co/414Dvtn/Screenshot-2024-02-28-203404.png',
          // link: '',
        },
        // {
        //   title: 'MED-MAP',
        //   description:
        //     'MED-MAP is a consolidated platform helping the medical manufacturers and services providers to reach more customers in Southeast Asia, and get the local partners',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://www.med-map.org/',
        // },
      ],
    },
  },
  seo: {
    title: 'Junizar Fajri',
    description: 'Portfolio & CV',
    imageURL: 'https://avatars.githubusercontent.com/u/13750681?v=4',
  },
  social: {
    linkedin: 'junfajr',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    facebook: 'junfajr88',
    // instagram: '',
    youtube: 'junizarfajri', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    medium: 'jun.fajr',
    dev: 'junfajr',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    telegram: 'junfajr',
    website: 'https://jun-fajr.github.io',
    phone: '085277560006',
    email: 'jun-fajr@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1npSr_P_iEBtDzCys9qil9IhxUxMLvosZ/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'CodeIgniter',
    'WordPress',
    'JavaScript',
    'TypeScript',
    'Java',
    'Java Spring Boot',
    'React.js',
    'Next.JS',
    'Node.js',
    'Nest.JS',
    'Node-RED',
    'Fastify',
    'Framework7',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Git',
    'Docker',
    'Python',
    'Odoo',
    'Golang',
    'Ruby on Rails',
    'CSS',
    'Antd',
    'Tailwind',
    'MaterialUI',
    'MikroTik',
  ],
  experiences: [
    {
      company: 'Sky Corporation',
      position: 'Founder | Self-employed',
      from: 'Jan 2010',
      to: 'Now',
      companyLink: 'https://skycorp-id.github.io',
    },
    {
      company: 'PT. Azimuth Solusi Indonesia',
      position: 'Software Engineer',
      from: 'Jan 2023',
      to: 'Jan 2024',
      companyLink: 'https://azimuthsolusi.com',
    },
    {
      company: 'PT. Mandatech Mataram Mukti',
      position: 'Software Engineer',
      from: 'Sept 2022',
      to: 'Oct 2022',
      companyLink: 'https://mandatech.co.id',
    },
    {
      company: 'PT. Fungsitama Cipta Teknologi',
      position: 'Software Engineer',
      from: 'May 2022',
      to: 'Aug 2022',
      companyLink: 'https://fungsitama.com',
    },
     {
      company: 'PT. Amanah Karya Indonesia',
      position: 'Software Engineer',
      from: 'Mar 2022',
      to: 'Apr 2022',
      companyLink: 'https://office.amanahcorp.co.id/id',
    },
     {
      company: 'PT. Mandatech Mataram Mukti',
      position: 'Software Engineer',
      from: 'Feb 2021',
      to: 'Feb 2022',
      companyLink: 'https://mandatech.co.id',
    },
     {
      company: 'Karda',
      position: 'Software Engineer',
      from: 'August 2020',
      to: 'January 2021',
      companyLink: '',
    },
     {
      company: 'PT. Putri Adinda Pratama Wisata (Adinda Azzhra)',
      position: 'Web Developer',
      from: 'Jun 2020',
      to: 'Jul 2020',
      companyLink: 'https://adindaazzahra.id',
    },
    {
      company: 'PT. International Global Network (IGN)',
      position: 'Software Engineer',
      from: 'Jan 2020',
      to: 'Jun 2020',
      companyLink: 'https://internationalglobalnetwork.com',
    },
    {
      company: 'Mitrafor',
      position: 'Mobile Developer',
      from: 'Nov 2019',
      to: 'Dec 2019',
      companyLink: '',
    },
    {
      company: 'Geo Tech',
      position: 'Software Engineer',
      from: 'Feb 2019',
      to: 'Nov 2019',
      companyLink: '',
    },
    {
      company: 'PT. Arkana Solusi Digital',
      position: 'Odoo Developer',
      from: 'Apr 2018',
      to: 'Dec 2018',
      companyLink: 'https://arkana.co.id',
    },
    {
      company: 'PT. Zaya Management',
      position: 'IT Staff & Software Engineer',
      from: 'Jan 2017',
      to: 'Dec 2017',
      companyLink: '',
    },
     {
      company: 'Masjid Raudhatul Jannah RSUDZA',
      position: 'IT Staff',
      from: '2015',
      to: '2016',
      companyLink: '',
    },
     {
      company: 'Pesantren Ar-Rabwah Al-Islamy',
      position: 'Physics Teacher',
      from: '2012',
      to: '2012',
      companyLink: '',
    },
      {
      company: 'PIKE Aceh',
      position: 'IT Staff',
      from: '2009',
      to: '2009',
      companyLink: '',
    },
     {
      company: 'Fakultas Syariah dan Hukum - UIN Ar-RaniryA',
      position: 'Manager Warnet (Internet Cafe Manager)',
      from: '2008',
      to: '2008',
      companyLink: '',
    }
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Universitas Syiah Kuala',
      degree: 'S1 Teknik Elektro bidang komputer',
      from: '2005',
      to: '2010',
    },
    
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'jun.fajr', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3367790',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
