import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('Prueba con <GifGrid />', () => {


    const catategory = "One Punch"
    //let wrapper = shallow(<GifGrid category={catategory} key={catategory}/>)

    // beforeEach( () => {
    //     //jest.clearAllMocks();
    //     wrapper = shallow(<GifGrid category={catategory} key={catategory}/>)
    // })

    test('debe hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
                data:[],
                loading:true
        })

        const wrapper = shallow(<GifGrid category={catategory} key={catategory}/>)
        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: 'AEA',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={catategory} key={catategory}/>)
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })

})