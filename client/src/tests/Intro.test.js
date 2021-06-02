import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

import Intro from '../components/Intro'


afterEach(cleanup)


test('Intro is in the document', ()=>{
    render(<Intro>Test</Intro>)
    expect(screen.getByTestId('doudou-intro')).toBeInTheDocument()
})

test('Intro contains child', () => {
    render(<Intro>Bonjour</Intro>)
    expect(screen.getByTestId('doudou-intro')).toHaveTextContent('Bonjour')
})

test('Intro has class intro centered', ()=> {
    render(<Intro>Test</Intro>)
    expect(screen.getByTestId("doudou-intro")).toHaveClass("intro centered")
})