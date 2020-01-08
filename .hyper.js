'use strict'

module.exports = {
  config: {
    webGLRenderer: false,
    shell: '/usr/local/bin/fish',
    fontSize: 14,
    lineHeight: 1.2,
    fontWeight: 'normal',
    fontWeightBold: 'normal',
    fontFamily: 'Fira Mono',
    cursorShape: 'BLOCK',
    cursorColor: '#34febb',
    selectionColor: 'rgba(33, 40, 54, .5)'
  },
  plugins: [
    'hypercwd',
    'hyper-hide-title',
    'hyper-electron-highlighter'
  ],
  localPlugins: [
    // 'hyper-tailwind-dark'
    // 'hyper-geist'
  ]
}
