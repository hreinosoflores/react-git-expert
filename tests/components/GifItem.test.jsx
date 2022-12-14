import { render, screen } from '@testing-library/react';
import React from 'react';
import { GifItem } from '../../src/components/GifItem';


// eslint-disable-next-line no-undef
describe('Pruebas en GifItem', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    // eslint-disable-next-line no-undef
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        // eslint-disable-next-line no-undef
        expect(container).toMatchSnapshot();
    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        screen.debug();
        const { src, alt } = screen.getByRole('img');
        // eslint-disable-next-line no-undef
        expect(src).toBe(url);
        // eslint-disable-next-line no-undef
        expect(alt).toBe(title);
    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        // eslint-disable-next-line no-undef
        expect(screen.getByText(title)).toBeTruthy();
    });
});