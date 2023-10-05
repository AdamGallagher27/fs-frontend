import React from 'react'
import SearchBar from './SearchBar'


// try render search bar component
describe('<SearchBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchBar />)
  })
})