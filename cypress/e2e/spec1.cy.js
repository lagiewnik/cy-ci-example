/// <reference types="cypress" />

describe('Example site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('h1', 'cypress-workshop-ci-example').should('be.visible')
    cy.wait(1999)
  })

  it('navigates to README', () => {
    cy.visit('/')
    cy.contains('a', 'README').click()
    cy.location('pathname').should('equal', '/README/')
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
