/// <reference types="cypress" />

const file = '../../dist/index.html'
describe('Auto Height Carousel', () => {
  beforeEach(() => {
    cy.visit(file)
    cy.get('.loader')
    .should('not.exist')
  })
  it('displays h1 tag with text of "Auto Height Carousel"', () => {
    cy.wait(800)
    cy.get('h1').should('have.text', 'Auto Height Carousel')
  })
  it('have HTMLElement with the id of #carousel', () => {
    cy.wait(800)
    cy.get('#carousel').should('exist')
  })  
  it('#carousel contains 9 elements with the class of .item', () => {
    cy.wait(800)
    cy.get('#carousel')
    .find('.item')
    .should('have.length', 9)
  })  
  it('#carousel items have data-id attributs', () => {
    cy.wait(800)
    cy.get('#carousel')
    .find('.item')
    .should('have.attr', 'data-id')
  })  
  it('#carousel items have data-is_visible attributs', () => {
    cy.wait(800)
    cy.get('#carousel')
    .find('.item')
    .should('have.attr', 'data-is_visible')
  })
  it('#carousel items with [data-is_visible="true"] also have "data-height" attributs', () => {
    cy.wait(800)
    cy.get('#carousel')
    .find('[data-is_visible="true"]')
    .should('have.attr', 'data-height')
  })
  it('#carousel items with [data-is_visible="false"] do not have "data-height" attributs', () => {
    cy.wait(800)
    cy.get('#carousel')
    .find('[data-is_visible="false"]')
    .should('not.have.attr', 'data-height')
  })
  it('#carousel height is resized on horizontal scroll', () => {
    let carouselHeight = 0
    cy.wait(800)
    cy.get('#carousel').scrollTo('right', { duration: 500 }).wait(500).then($carousel => {carouselHeight = $carousel[0].offsetHeight})
    cy.get('#carousel').scrollTo('left', { duration: 2000 }).then(($carousel) => expect(carouselHeight).to.be.gt($carousel[0].offsetHeight))
  })
})
