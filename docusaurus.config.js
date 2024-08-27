

// const code_themes = {
//   light: require('prism-react-renderer/themes/github'),
//   dark: require('prism-react-renderer/themes/vsDark'),
// };

// /** @type {import('@docusaurus/types').Config} */
// const meta = {
//   title: 'Support Docs - Vue.ai',
//   tagline: 'Vue support',
//   url: 'https://support.vue.ai/',
//   baseUrl: '/',
//   favicon: '/favicon.ico',
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },
//   organizationName: 'Vue.ai',
// };

// /** @type {import('@docusaurus/plugin-content-docs').Options[]} */
// const docs = [
//   // {
//   //   id: 'cli',
//   //   path: 'docs/cli',
//   //   routeBasePath: '/cli',
//   // },
//   // {
//   //   id: 'plugin-sdk',
//   //   path: 'docs/plugin-sdk',
//   //   routeBasePath: '/plugin-sdk',
//   //   versions: {
//   //     current: {
//   //       label: '1.x.x',
//   //     },
//   //   },
//   // },

//   // Web UI Kits
//   {
//     id: 'Content-Manager',
//     path: 'docs/Content-Manager',
//     routeBasePath: '/Content-Manager/',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   {
//     id: 'Partners',
//     path: 'docs/Partners',
//     routeBasePath: '/partners/',
//     breadcrumbs:false,
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   {
//     id: 'Data-set',
//     path: 'docs/Data-set',
//     routeBasePath: '/Data-set',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   {
//     id: 'Dataset-concept',
//     path: 'docs/Dataset-concept',
//     routeBasePath: '/Dataset-concept',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   {
//     id: 'Workflow-concepts',
//     path: 'docs/Workflow-concepts',
//     routeBasePath: '/Workflow-concepts',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   // {
//   //   id: 'react-ui-kit',
//   //   path: 'docs/react-ui-kit/',
//   //   routeBasePath: '/react-ui-kit',
//   //   versions: {
//   //     current: {
//   //       label: '1.x.x',
//   //     },
//   //   },
//   // },
//   {
//     id: 'Integration',
//     path: 'docs/Integration',
//     routeBasePath: '/Integration',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },

//   {
//     id: 'Administration',
//     path: 'docs/Account',
//     routeBasePath: '/Account',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },

//   {
//     id: 'faq',
//     path: 'docs/faq',
//     routeBasePath: '/faq',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
  
//   // {
//   //   id: 'angular-ui-kit',
//   //   path: 'docs/angular-ui-kit',
//   //   routeBasePath: '/angular-ui-kit',
//   //   versions: {
//   //     current: {
//   //       label: '1.x.x',
//   //     },
//   //   },
//   // },


//   // Web Core
//   {
//     id: 'Connectors-Manager',
//     path: 'docs/Connectors-Manager',
//     routeBasePath: '/Connectors-Manager',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   {
//     id: 'SSO',
//     path: 'docs/SSO',
//     routeBasePath: '/SSO',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   // React Web Core
//   {
//     id: 'Document-Manager',
//     path: 'docs/Document-Manager',
//     routeBasePath: '/Document-Manager',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },

//   // Mobile Core
//   // {
//   //   id: 'android-core',
//   //   path: 'docs/android-core',
//   //   routeBasePath: '/android-core',
//   //   versions: {
//   //     current: {
//   //       label: '1.x.x',
//   //     },
//   //   },
//   // },
//   {
//     id: 'Digital-Experience-Manager',
//     path: 'docs/Digital-Experience-Manager',
//     routeBasePath: '/Digital-Experience-Manager',
//     versions: {
//       current: {
//         label: '1.x.x',
//       },
//     },
//   },
//   // {
//   //   id: 'ios-core',
//   //   path: 'docs/ios-core',
//   //   routeBasePath: '/ios-core',
//   //   versions: {
//   //     current: {
//   //       label: '1.x.x',
//   //     },
//   //   },
//   // },
//   {
//     id: 'Audience-Manager',
//     path: 'docs/Audience-Manager',
//     routeBasePath: '/Audience-Manager',
//     versions: {
//       current: {
//         label: '0.5.x',
//       },
//     },
//   },
//   {
//     id: 'Taxonomy',
//     path: 'docs/Taxonomy',
//     routeBasePath: '/Taxonomy',
//     versions: {
//       current: {
//         label: '0.5.x',
//       },
//     },
//   },
//   {
//     id: 'Automation',
//     path: 'docs/Automation',
//     routeBasePath: '/Automation',
//     versions: {
//       current: {
//         label: '0.5.x',
//       },
//     },
//   },

//   // Mobile UI Kits
//   // {
//   //   id: 'android',
//   //   path: 'docs/android',
//   //   routeBasePath: '/android',
//   //   versions: {
//   //     current: {
//   //       label: '0.14.x',
//   //     },
//   //   },
//   // },
//   // {
//   //   id: 'flutter',
//   //   path: 'docs/flutter',
//   //   routeBasePath: '/flutter',
//   //   versions: {
//   //     current: {
//   //       label: '0.7.x',
//   //     },
//   //   },
//   // },
//   // {
//   //   id: 'ios',
//   //   path: 'docs/ios',
//   //   routeBasePath: '/ios',
//   //   versions: {
//   //       current: {
//   //         label: '1.33.x',
//   //       },
//   //     },
//   //   },
//   //   {
//   //     id: 'react-native',
//   //     path: 'docs/rn-ui-kit',
//   //     routeBasePath: '/react-native',
//   //     versions: {
//   //       current: {
//   //         label: '1.4.x',
//   //       },
//   //     },
//   //   },
//   ];

//   /** @type {import('@docusaurus/plugin-content-docs').Options} */
//   const defaultSettings = {
//     // breadcrumbs: true,
//     // editUrl: 'https://github.com/dyte-in/docs/tree/main/',
//     // showLastUpdateTime: true,
//     // remarkPlugins: [
//     //   [require('@docusaurus/remark-plugin-npm2yarn'), {
//     //     sync: true
//     //   }],
//     // ],
//     // sidebarPath: require.resolve('./sidebars-default.js'),
//   };

//   /**
//    * Create a section
//    * @param {import('@docusaurus/plugin-content-docs').Options} options
//    */
//   function create_doc_plugin({
//     sidebarPath = require.resolve('./sidebars-default.js'),
//     ...options
//   }) {
//     return [
//       '@docusaurus/plugin-content-docs',
//       /** @type {import('@docusaurus/plugin-content-docs').Options} */
//       ({
//         ...defaultSettings,
//         sidebarPath,
//         ...options,
//       }),
//     ];
//   }

//   const {
//     webpackPlugin
//   } = require('./plugins/webpack-plugin.cjs');
//   const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
//   const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

//   const plugins = [
//     tailwindPlugin,
//     ...docs_plugins,
//     webpackPlugin,
//     [
//       '@docusaurus/plugin-client-redirects',
//       {
//         createRedirects(path) {
//           return undefined; // Return a falsy value: no redirect created
//         },
//       },
//     ],
//   ];

//   const fs = require('fs');
//   const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
//   const course1HTML = fs.readFileSync('./src/snippets/course1.html', 'utf-8');
//   const DataHTML = fs.readFileSync('./src/snippets/data.html', 'utf-8');
//   const AutomationHTML = fs.readFileSync('./src/snippets/Automation.html', 'utf-8');
//   const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');
//   const intHTML = fs.readFileSync('./src/snippets/int.html', 'utf-8');
//   const account = fs.readFileSync('./src/snippets/Account.html', 'utf-8');
//   const customerHTML = fs.readFileSync('./src/snippets/customer.html', 'utf-8');

//   /** @type {import('@docusaurus/types').Config} */
//   const config = {
//     ...meta,
//     plugins,

//     trailingSlash: false,
//     themes: ['@docusaurus/theme-live-codeblock'],
//     clientModules: [require.resolve('./src/client/define-ui-kit.js')],

//     presets: [
//       [
//         '@docusaurus/preset-classic',
//         /** @type {import('@docusaurus/preset-classic').Options} */
//         ({
//           docs: {
//             path: 'docs/guides',
//             id: 'guides',
//             routeBasePath: '/guides',
//             ...defaultSettings,
//           },
//           blog: false,
//           theme: {
//             customCss: [
//               require.resolve('./src/css/custom.css'),
//               require.resolve('./src/css/api-reference.css'),
//             ],
//           },
//           sitemap: {
//             ignorePatterns: ['/tags/**'],
//           },
//           googleTagManager: {
//             containerId: 'GTM-MXRHJT4S',
//           },
//         }),
//       ],
//     ],

//     themeConfig:
//       /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//       ({
//         image: '/img/bloxlight.png',
//         colorMode: {
//           defaultMode: 'light',
//         },
//         docs: {
//           sidebar: {
//             hideable: true,
//           },
//         },
//         navbar: {
//           logo: {
//             href: '/',
//             src: '/logo/new-D.png',
//             srcDark: '/logo/new-w.png',
//             alt: 'Vue.ai Logo',
//             height: '32px',
//             width: '119px',
//           },
//           items: [
//             // {
//             //   label: 'Guides',
//             //   to: 'guides',
//             //   className: 'guides-top-header',
//             // },
//             {
//               label: 'Automation Hub',
//               type: 'dropdown',
//               className: 'dyte-dropdown',
//               items: [{
//                 type: 'html',
//                 value: AutomationHTML,
//                 className: 'dyte-dropdown',
//               }, ],
//             },
//             {
//               label: 'Customer Hub',
//               type: 'dropdown',
//               className: 'dyte-dropdown',
//               items: [{
//                 type: 'html',
//                 value: customerHTML,
//                 className: 'dyte-dropdown',
//               }, ],
//             },
//             // {
//             //   label: 'Customer Hub',
//             //   type: 'dropdown',
//             //   className: 'dyte-dropdown',
//             //   items: [{
//             //     type: 'html',
//             //     value: sdksHTML,
//             //     className: 'dyte-dropdown',
//             //   }, ],
//             // },
//             {
//               label: 'Data Hub',
//               type: 'dropdown',
//               className: 'dyte-dropdown',
//               items: [{
//                 type: 'html',
//                 value: DataHTML,
//                 className: 'dyte-dropdown',
//               }, ],
//             },
            
//             {
//               label: 'Resources',
//               type: 'dropdown',
//               className: 'dyte-dropdown',
//               items: [{
//                 type: 'html',
//                 value: resourcesHTML,
//                 className: 'dyte-dropdown',
//               }, ],
//             },
//             {
//               label: 'Administration',
//               type: 'dropdown',
//               className: 'dyte-dropdown',
//               items: [{
//                 type: 'html',
//                 value: account,
//                 className: 'dyte-dropdown',
//               }, ],
//             },
//             {
//               type: 'search',
//               position: 'right',
//             },
         
          
//           ],
//         },
//         footer: {
//           links: [
//             // Footer links...
//           ],
//           copyright: 'A product of MAD Street Den',
//         },
//         prism: {
//           theme: code_themes.light,
//           darkTheme: code_themes.dark,
//           additionalLanguages: [
//             'dart',
//             'ruby',
//             'groovy',
//             'kotlin',
//             'java',
//             'swift',
//             'objectivec',
//           ],
//           magicComments: [{
//               className: 'theme-code-block-highlighted-line',
//               line: 'highlight-next-line',
//               block: {
//                 start: 'highlight-start',
//                 end: 'highlight-end'
//               },
//             },
//             {
//               className: 'code-block-error-line',
//               line: 'highlight-next-line-error',
//             },
//           ],
//         },
//         // algolia: {
//         //   appId: 'HL0HSV62RK',
//         //   apiKey: '72ebf02146698733b7114c7b36da0945',
//         //   indexName: 'docs',
//         //   contextualSearch: true,
//         //   searchParameters: {},
//         // },
//       }),

//     webpack: {
//       jsLoader: (isServer) => ({
//         loader: require.resolve('swc-loader'),
//         options: {
//           jsc: {
//             parser: {
//               syntax: 'typescript',
//               tsx: true,
//             },
//             target: 'es2017',
//           },
//           module: {
//             type: isServer ? 'commonjs' : 'es6',
//           },
//         },
//       }),
//     },
//   };

//   module.exports = config;

const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'Support Docs - Vue.ai',
  tagline: 'Vue support',
  url: 'https://support.vue.ai/',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  organizationName: 'Vue.ai',
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  // Your existing docs configuration...
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  // Your existing default settings...
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const {
  webpackPlugin
} = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(path) {
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
  function cspHeadersPlugin() {
    return {
      name: 'csp-headers-plugin',
      configureWebpack(config, isServer, utils) {
        return config;
      },
      async postBuild({ outDir }) {
        const fs = require('fs');
        const path = require('path');
        
        // Add CSP headers to all HTML files
        const htmlFiles = fs.readdirSync(outDir).filter(file => file.endsWith('.html'));
        htmlFiles.forEach(file => {
          const filePath = path.join(outDir, file);
          let content = fs.readFileSync(filePath, 'utf8');
          const cspMetaTag = `<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self' https://app.vue.ai">`;
          content = content.replace('</head>', `${cspMetaTag}</head>`);
          fs.writeFileSync(filePath, content, 'utf8');
        });
      },
    };
  },
];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const course1HTML = fs.readFileSync('./src/snippets/course1.html', 'utf-8');
const DataHTML = fs.readFileSync('./src/snippets/data.html', 'utf-8');
const AutomationHTML = fs.readFileSync('./src/snippets/Automation.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');
const intHTML = fs.readFileSync('./src/snippets/int.html', 'utf-8');
const account = fs.readFileSync('./src/snippets/Account.html', 'utf-8');
const customerHTML = fs.readFileSync('./src/snippets/customer.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-MXRHJT4S',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/bloxlight.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/new-D.png',
          srcDark: '/logo/new-w.png',
          alt: 'Vue.ai Logo',
          height: '32px',
          width: '119px',
        },
        items: [
          {
            label: 'Automation Hub',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: AutomationHTML,
              className: 'dyte-dropdown',
            }, ],
          },
          {
            label: 'Customer Hub',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: customerHTML,
              className: 'dyte-dropdown',
            }, ],
          },
          {
            label: 'Data Hub',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: DataHTML,
              className: 'dyte-dropdown',
            }, ],
          },
          
          {
            label: 'Resources',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: resourcesHTML,
              className: 'dyte-dropdown',
            }, ],
          },
          {
            label: 'Administration',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [{
              type: 'html',
              value: account,
              className: 'dyte-dropdown',
            }, ],
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          // Footer links...
        ],
        copyright: 'A product of MAD Street Den',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
        magicComments: [{
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {
              start: 'highlight-start',
              end: 'highlight-end'
            },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
