import { render, screen } from '@testing-library/react';
import React from 'react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


// eslint-disable-next-line no-undef
jest.mock('../../src/hooks/useFetchGifs');

// eslint-disable-next-line no-undef
describe('Pruebas en GifGrid', () => {
    const category = 'One Punch';
    // eslint-disable-next-line no-undef
    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        screen.debug();
        // eslint-disable-next-line no-undef
        expect(screen.getByText('Cargando...'));
        // eslint-disable-next-line no-undef
        expect(screen.getByText(category));
    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        screen.debug();
        // eslint-disable-next-line no-undef
        expect(screen.getAllByRole('img').length).toBe(2);

    });

});