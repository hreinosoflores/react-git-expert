import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AddCategory } from '../../src/components/AddCategory';

// eslint-disable-next-line no-undef
describe('Pruebas en AddCategory', () => {
    // eslint-disable-next-line no-undef
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        screen.debug();
        // eslint-disable-next-line no-undef
        expect(input.value).toBe('Saitama');

    });

    // eslint-disable-next-line no-undef
    test('debe de llamar el onNewCategory si input tiene valor', () => {
        const inputValue = 'Saitama';
        // eslint-disable-next-line no-undef
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // eslint-disable-next-line no-undef
        expect(input.value).toBe('');
        // eslint-disable-next-line no-undef
        expect(onNewCategory).toHaveBeenCalled();
        // eslint-disable-next-line no-undef
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // eslint-disable-next-line no-undef
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    // eslint-disable-next-line no-undef
    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        // eslint-disable-next-line no-undef
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        // eslint-disable-next-line no-undef
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        // eslint-disable-next-line no-undef
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});