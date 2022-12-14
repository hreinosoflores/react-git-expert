import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { GifExpertApp } from '../src/GifExpertApp';


// eslint-disable-next-line no-undef
describe('pruebas en GifExpertApp', () => {
    // eslint-disable-next-line no-undef
    test('should first', () => {        
        const { container } = render(<GifExpertApp />);
        screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        // eslint-disable-next-line no-undef
        expect(container).toMatchSnapshot();
    });
});