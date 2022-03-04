import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    let wrapper = shallow(<GifGridItem title={title} url={url} />)
    beforeEach( () => {
        wrapper = shallow(<GifGridItem title={title} url={url}/>)
    })

    test('Se debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe tener un párrafo con el titulo - title', () => {

        const texto = wrapper.find('p').text().trim();

        expect(texto).toBe(title);

    })

    test('debe de tener una imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        //console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener animate_fadeIn', () => {

        const div = wrapper.find('div');
        expect(div.props().className.includes('animate__fadeIn')).toBe(true);

    })

})