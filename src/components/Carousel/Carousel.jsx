import React, { useState, useEffect } from 'react';
import { CgChevronDoubleRight, CgChevronDoubleLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import { ContentCarousel, 
        SingleItemCarousel, 
        ItemsCarousel, 
        ContentPoints, 
        Arrow,
        ContentTextSlide,
        ContentImageSlide
    } from './CarouselStyles';

const data = [
    {
        title: 'Wireless HeadPhones',
        cta: '50% Desc',
        img_url: 'girlhead.png',
        id: 1
    },
    {
        title: 'Smarth Watch',
        cta: '40% Desc',
        img_url: 'girlhead.png',
        id: 2
    },
    {
        title: 'PS 5 lite',
        cta: '20% Desc',
        img_url: 'girlhead.png',
        id: 3
    },
]

const Carousel = () => {

    const withCarousel =  data.length > 0 ? (data.length - 1) * 160 : 0;

    const [currentPosition, setCurrentPosition] = useState(withCarousel)
    const [ currentId, setCurrentId ] = useState(0);

    useEffect(() => {

        const changePositionSlide = ( id) => {
    
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
            <Arrow 
                onClick={ handleSlideArrow  } 
                left={'10px'}
                id='arrowLeft'
            >
                <CgChevronDoubleLeft />
            </Arrow>
            <ItemsCarousel position={currentPosition}>
                    {
                        data.map(slide => (
                            <SingleItemCarousel key= {slide.id}>
                                <ContentTextSlide>
                                    <span>{slide.cta}</span>
                                    <h3>{slide.title}</h3>
                                    <Link to='/'>Comprar</Link>
                                </ContentTextSlide>
                                <ContentImageSlide>
                                    <img src={require(`../../Assets/image/${slide.img_url}`)} alt="" />
                                </ContentImageSlide>
                            </SingleItemCarousel>
                        ))
                    }
            </ItemsCarousel>
            <Arrow 
                onClick={ handleSlideArrow } 
                right={'10px'}
                id='arrowRight'
            >
                <CgChevronDoubleRight />
            </Arrow>

            <ContentPoints>
                <span onClick={handlePosition} id='0' className='point active' ></span>
                <span onClick={handlePosition} id='1' className='point' ></span>
                <span onClick={handlePosition} id='2' className='point' ></span>
                
            </ContentPoints>
        </ContentCarousel>  
    )
}

export default Carousel
