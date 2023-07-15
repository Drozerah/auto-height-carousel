class AutoHeightCarousel  {

  carousel: HTMLElement
  items: NodeListOf<HTMLElement>
  offset: number

  constructor(carousel: HTMLElement) {
    this.carousel = carousel
    this.items = this.carousel.querySelectorAll('.item')
    this.offset = 20
  }

  setItemsMarginBottom(value: number = this.offset) {
    this.offset = value
    return this
  }

  setCarouselHeight () {
    const visibleItems: NodeListOf<HTMLElement> = this.carousel.querySelectorAll('[data-height]')
    const maxHeightItem = [...visibleItems].reduce((prev, current) => {
      return (Number(prev.dataset.height) > Number(current.dataset.height)) ? prev : current
    })
    this.carousel.style.height = `${Number(maxHeightItem.dataset.height) + this.offset}px`
  }

  getItemsVisibilty() {
    this.items.forEach((item, index) => {
      const {left: carousel_left, right: carousel_right} = this.carousel.getBoundingClientRect()
      const {left: item_left, right: item_right, height: item_height} = item.getBoundingClientRect()
      const ItemIsIntersecting = item_right < carousel_left || item_left > carousel_right ? false : true
      item.dataset.id = index.toString()
      item.dataset.is_visible = ItemIsIntersecting.toString()
      if (ItemIsIntersecting) {
        item.dataset.height = item_height.toString()
      } else {
        delete item.dataset.height
      }
    })
    this.setCarouselHeight()
  }

  init() {
    window.addEventListener('load', () => this.getItemsVisibilty())
    window.addEventListener('resize', () => this.getItemsVisibilty())
    this.carousel.addEventListener('scroll', () => this.getItemsVisibilty())
    return this
  }
}

export { AutoHeightCarousel }
