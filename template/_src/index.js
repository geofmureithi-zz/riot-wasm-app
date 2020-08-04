import Counter from './Counter.riot'
import {component} from 'riot'

component(Counter)(document.querySelector('#root'), {
  initial: 32
})