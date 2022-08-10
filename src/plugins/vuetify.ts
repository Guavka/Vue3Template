// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Vuetify
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { type UserPlugin } from '~/types'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#e7e8ee',      //body
    "on-background": '#040d17', //main text
    surface: '#f2f8ff',         //main surface
    "on-surface": '#636a86',    //text in main surface
    "card": '#ffffff',          //card
    "on-card": "#040b36",       //text in card
    primary: "#4062ff",         //main color
    "on-primary": "ffffff",     //text on main color
    secondary: '#6476c9',
    "secondary-danger": 'bc785f',
    "on-secondary": '#ffffff',
    error: '#ff2a2a',
    success: '#01ca5d',
    info: '#5271ff',
  }
}
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#313a52',      //body
    "on-background": '#ffffff', //main text
    surface: '#131518',         //main surface
    "on-surface": '#a6a5a8',    //text in main surface
    "card": '#201f25',          //card
    "on-card": "#a6a5a8",       //text in card
    primary: "#236af3",         //main color
    "on-primary": "ffffff",     //text on main color
    secondary: '#6476c9',
    "secondary-danger": 'bc785f',
    "on-secondary": '#ffffff',
    error: '#ff2a2a',
    success: '#01ca5d',
    info: '#5271ff',
  }
}

export const themeNames = ['lightTheme', 'darkTheme']

export const install: UserPlugin = ({ app }) => {
  const vuetify = createVuetify(
    // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
    {
      theme:
      {
        defaultTheme: 'lightTheme',
        themes:
        {
          lightTheme,
          darkTheme
        }
      }
    }
  )
  app.use(vuetify)
}