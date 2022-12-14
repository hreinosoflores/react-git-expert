import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// eslint-disable-next-line no-undef
describe('Pruebas en el hook useFetchGifs', () => {

    // eslint-disable-next-line no-undef
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images:imagenes, isLoading } = result.current;
        console.log(result);
        // eslint-disable-next-line no-undef
        expect(imagenes.length).toBe(0);
        // eslint-disable-next-line no-undef
        expect(isLoading).toBeTruthy();
    });

    // eslint-disable-next-line no-undef
    test('debe de retornar arreglo de imagenes y isLoading en false',async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(
            // eslint-disable-next-line no-undef
            ()=>expect(result.current.images.length).toBeGreaterThan(0),           
        );
        const { images:imagenes, isLoading } = result.current;


        // eslint-disable-next-line no-undef
        expect(imagenes.length).toBeGreaterThan(0);
        // eslint-disable-next-line no-undef
        expect(isLoading).toBeFalsy();
    });


});