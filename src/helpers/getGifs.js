export const getGifs = async (category) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=CD819LUH3ORLyc0QGMmeGEr2WULKGm4W&limit=10&q=' + category;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map(img =>
        ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
    return gifs;
};
