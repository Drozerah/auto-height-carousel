import './style.scss'
import { AutoHeightCarousel as myCarousel } from '../lib/AutoHeightCarousel.js'

let carousel = document.querySelector('#carousel') as HTMLElement
new myCarousel(carousel)
  .setItemsMarginBottom(8)
  .init()
  
