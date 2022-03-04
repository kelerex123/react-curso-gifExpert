import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import PropTypes from 'prop-types';


export const GifExpertApp = ({defaultCategories = []}) => {
    
    // const [categories, setCategories] =  useState(['One Punch'])
    const [categories, setCategories] =  useState(defaultCategories)


    // const handleAdd = () => {
    //     //setCategories([...categories , 'HunterXHunter']);  //1ra forma
    //     setCategories( cats => [...categories, 'HunterXHunter']);   //2da forma
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( (cat) => 
                        (<GifGrid category={cat} key={cat} />)
                    )
                    
                }
            </ol>

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default GifExpertApp;