import './scss/style.scss'
import { AutoHeightCarousel } from '../lib/AutoHeightCarousel.js'

const carousel:AutoHeightCarousel = new AutoHeightCarousel(document.querySelector('#carousel') as HTMLElement)
carousel
  .setItemsMarginBottom(8)
  .init()
