import React from "react";
import {render, screen} from '@testing-library/react'
import Card from "./card.component";

const monster = {
  id: 1,
  name: 'lester',
  email: 'lester@example.com'
}

const { id, name, email } = monster

describe('The card component', () => {
  test('has correct name of monster', () => {
    render(<Card monster={monster} />)
    expect(screen.getByTestId('monster-name',{exact: true})).toHaveTextContent(name)
  })

  test('has correct email of monster', () => {
    render(<Card monster={monster} />)
    expect(screen.getByTestId('monster-email',{exact: true})).toHaveTextContent(email)
  })

  test('has correct img alt attribute', () => {
    render(<Card monster={monster} />)
    expect(screen.getByAltText(`monster ${name}`)).toHaveAttribute('src',`https://robohash.org/${id}?set=set2&size=180x180`)
  })
})

