import React from 'react'
import { render } from '@testing-library/react'
import axiosMock from 'axios'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import App from '../src/App'

jest.mock('axios')

describe('<App />', () => {
  it('fetches data', async () => {
    axiosMock.get.mockResolvedValueOnce(
      {
        data: {
          results: [{ url: 'http://localhost:3001/persons/1', name: 'Loid Forger', id: 1 }]
        }
      }
    )
    await act(async () => {
      render(<App />)
    })
  })
})
