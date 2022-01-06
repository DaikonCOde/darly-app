import React, { useState, useEffect } from 'react';
import { CgChevronDoubleRight, CgChevronDoubleLeft } from 'react-icons/cg';

import { ContentCarousel, SingleItemCarousel, ItemsCarousel, ContentPoints, Arrow } from './CarouselStyles';

const data = [
    {
        title: 'Hola mundo',
        id: 1
    },
    {
        title: 'Hola mundo 2',
        id: 2
    },
    {
        title: 'Hola mundo 3',
        id: 3
    },
]

const Carousel = () => {

    const withCarousel =  data.length > 0 ? (data.length - 1) * 160 : 0;

    const [currentPosition, setCurrentPosition] = useState(withCarousel)
    const [ currentId, setCurrentId ] = useState(0);

    useEffect(() => {

        const changePositionSlide = ( id) => {
            console.log(currentId);
    
            const withCarousel = (data.length - 1) * 160;
            const position = withCarousel - ( id  * 320 );
    
            
            setCurrentPosition(position)
        }
    
        const activePoints = (id) => {
            const points = document.querySelectorAll('.point');
    
            points.forEach( point => (parseInt(point.id) === id 
                ? point.classList.add('active')
                : point.classList.remove('active')
            ));
        }

        //  Change of carousel 
        changePositionSlide(currentId)
        
        
        // Change style points

        activePoints(currentId)


    }, [ currentId ])

    //  HANDLE ARROW 
    const handleSlideArrow = (e) => {

        const idArrow = e.target.id;

        if (idArrow === 'arrowRight') {
            
            currentId === data.length - 1 ? setCurrentId(0) : setCurrentId( currentId + 1)
        
        }

        if (idArrow === 'arrowLeft') {
            
            currentId === 0 ? setCurrentId(data.length - 1) : setCurrentId( currentId - 1);

        }
    }

    const handlePosition = (e) => {
        const id = parseInt(e.target.id);

        setCurrentId(id);

    }


    return (
        <ContentCarousel >
            <ItemsCarousel position={currentPosition}>
                <Arrow 
                    onClick={ handleSlideArrow  } 
                    left={'10px'}
                    id='arrowLeft'
                >
                    <CgChevronDoubleLeft />
                </Arrow>
                    {
                        data.map(item => (
                            <SingleItemCarousel key= {item.id}>
                                {item.title}
                            </SingleItemCarousel>
                        ))
                    }
                <Arrow 
                    onClick={ handleSlideArrow } 
                    right={'10px'}
                    id='arrowRight'
                >
                    <CgChevronDoubleRight />
                </Arrow>
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
