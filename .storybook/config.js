import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon)
// Find all files in src directory that end in stories.js
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(file => req(file))
}

configure(loadStories, module)