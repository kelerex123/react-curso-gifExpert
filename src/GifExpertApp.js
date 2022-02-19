import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
    
    const [categories, setCategories] =  useState(['One Punch'])

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

export default GifExpertApp;