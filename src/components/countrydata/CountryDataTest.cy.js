import React from 'react'
import CountryData from './CountryData'
import testProps from './testProps'

// try mount country data with test props

describe('<CountryData />', () => {
  it('renders', () => {
    cy.mount(<CountryData country={testProps} />)
  })
})