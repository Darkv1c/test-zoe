import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'
import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Resutls from '../../src/pages/results'
import { MemoryRouter } from 'react-router';

describe('Results', () => {
    let container: HTMLElement
    beforeEach(async () => {         
        await act(async () => {container = render(
            <MemoryRouter initialEntries={['/results?income=90000']}>
                <Resutls/>
            </MemoryRouter>
        ).container})
     })
    
     it('Should show more agents on "Show more" click', async () => {
         await waitFor(async () => {
             expect(screen.getByText(/Show more/i)).toBeInTheDocument()
         })
         let showMore = await screen.findByText(/Show more/i)
         let cardList = container.getElementsByClassName('card-list')[0]
         expect(cardList.childElementCount).toBe(3)
         fireEvent(showMore, new MouseEvent('click', {
             bubbles: true,
             cancelable: true,
         })
         )
         expect(cardList.childElementCount).toBe(6)
     })
     it('Should show less agents on "Show Less" click', async () => {
         await waitFor(async () => {
             expect(screen.getByText(/Show more/i)).toBeInTheDocument()
         })
         let showLess = await screen.findByText(/Show less/i)
         let showMore = await screen.findByText(/Show more/i)
         let cardList = container.getElementsByClassName('card-list')[0]
         fireEvent(showMore, new MouseEvent('click', {
             bubbles: true,
             cancelable: true,
         })
         )
         expect(cardList.childElementCount).toBe(6)
         fireEvent(showLess, new MouseEvent('click', {
             bubbles: true,
             cancelable: true,
         })
         )
         expect(cardList.childElementCount).toBe(3)
     })
})