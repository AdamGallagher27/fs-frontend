import React from 'react'
import ResultBox from './ResultBox'
import testProps from './testProps'

// try mount result box data with test props

describe('<ResultBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ResultBox countries={testProps} />)
  })
})