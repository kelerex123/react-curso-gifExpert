import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs', () => {

    test('debe de traer 10 elemetos', async() => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);

    })

    test('debe de traer un array vacio al no mandar argumentos', async() => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })


})