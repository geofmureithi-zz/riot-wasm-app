import App from './Rust.riot'
import {component} from 'riot'

component(App)(document.querySelector('#root'), {
  message: 'Hello there'
})