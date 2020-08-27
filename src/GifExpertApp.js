import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory';
import {GifGrid} from './componets/GifGrid'

export const GifExpertApp = ()=>{    

    const [categories,setCategorias] = useState(['Samurai X']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}  />
            <hr/>
            <ol>                
                {
                    categories.map(category =>
                        <GifGrid 
                            category={category} 
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    )    
}

