import React, { useState } from 'react'
import { ContentCarousel, SingleItemCarousel, ItemsCarousel, ContentPoints } from './CarouselStyles';

const data = [
    {
        title: 'Hola mundo',
        id: '1'
    },
    {
        title: 'Hola mundo 2',
        id: '2'
    },
    {
        title: 'Hola mundo 3',
        id: '3'
    },
]

const Carousel = () => {

    const withCarousel =  data.length > 0 ? (data.length - 1) * 160 : 0;

    const [currentPosition, setCurrentPosition] = useState(withCarousel)


    const handlePosition = (e) => {
        const id = e.target.id;

        const points = document.querySelectorAll('.point');

        
        //  Change of carousel 
        const withCarousel = (data.length - 1) * 160;
        const position = withCarousel - ( id  * 320 );
        
        setCurrentPosition(position)

        // Change style points
        points.forEach( point => (point.id === id 
            ? point.classList.add('active')
            : point.classList.remove('active')
        ));

    }

    return (
        <ContentCarousel >
            <ItemsCarousel position={currentPosition}>
                {
                    data.map(item => (
                        <SingleItemCarousel key= {item.id}>
                            {item.title}
                        </SingleItemCarousel>
                    ))
                }
            </ItemsCarousel>

            <ContentPoints>
                <span onClick={handlePosition} id='0' className='point active' ></span>
                <span onClick={handlePosition} id='1' className='point' ></span>
                <span onClick={handlePosition} id='2' className='point' ></span>
                
            </ContentPoints>
        </ContentCarousel>  
    )
}

export default Carousel
