/// <reference types="cypress" />

describe('Example site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('h1', 'cypress-workshop-ci-example').should('be.visible')
  })

  it('navigates to README', () => {
    cy.visit('/')
    cy.contains('a', 'README').click()
    cy.location('pathname').should('equal', '/README/')
    cy.wait(3000)
  })

  it('goes directly to README', () => {
    cy.visit('/README')
    cy.contains('h2', 'README')
  })

  it('redirects to README/', () => {
    cy.visit('/README/')
    cy.contains('h2', 'README')
  })

  afterEach(() => {
    //wait for finished video redering
    cy.wait(1000)
  })
})
