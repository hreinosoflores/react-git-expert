import { getGifs } from '../../src/helpers/getGifs';

// eslint-disable-next-line no-undef
describe('Pruebas en getGifs', () => {
    // eslint-disable-next-line no-undef
    test('debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('one punch');
        console.log(gifs);
        // eslint-disable-next-line no-undef
        expect(gifs.length).toBeGreaterThan(0);
        // eslint-disable-next-line no-undef
        expect(gifs[0]).toEqual({
            // eslint-disable-next-line no-undef
            id: expect.any(String),
            // eslint-disable-next-line no-undef
            title: expect.any(String),
            // eslint-disable-next-line no-undef
            url: expect.any(String)
        });
    });
});