import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {


    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target: {value} });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })


    test('no debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
        
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola desde la prueba'
        const input = wrapper.find('input');

        //Simular el inputChange
        input.simulate('change', { target: {value} });

        //Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //SetCategories debe ser llamado
        expect(setCategories).toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )

        //El valor del input debe de estar ''
        expect(input.prop('value').trim()).toBe("");

    })

})