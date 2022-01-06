import React, { useEffect } from 'react'

import { ContentListCategories, SingleCategory } from './ListCategoriesStyles';

const Categories = [
    {
        title: 'En Stock',
        slug: 'en-stock',
        id: 0
    },
    {
        title: 'Pronto',
        slug: 'pronto',
        id: 1
    },
    {
        title: 'A Pedido',
        slug: 'a-pedido',
        id: 2
    },
]

const ListCategories = () => {

    useEffect( () => {
        ChangeCategory(0)
    }, [] )

    // handle click on single categorie 

    const HandleCategories = (e) => {
        const id = parseInt(e.target.id);

        ChangeCategory(id)
    }

    const ChangeCategory = (id) => {
        const singleCategory = document.querySelectorAll('.singleCategory');
        
        singleCategory.forEach( (category) => parseInt(category.id) === id 
            ? category.classList.add('categoryActive') 
            : category.classList.remove('categoryActive')
        )
    }

    return (
        <ContentListCategories>
            {
                Categories.map( (category) => (
                    <SingleCategory onClick={HandleCategories} key={category.id} className='singleCategory' id={category.id}>
                        {category.title}
                    </SingleCategory>
                ))
            }
            
        </ContentListCategories>
    )
}

export default ListCategories
