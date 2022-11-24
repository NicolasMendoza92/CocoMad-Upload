import React from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Aos from 'aos';
import "./cardHome.css"
import "aos/dist/aos.css";

export const PromoCards = () => {

    const history = useHistory();

    const verCardMaizena = () => {
        history.push(`/detalle/61f1681adcc64fb31149ef17`)
        window.scrollTo(0, 100);
    }
    const verCardCoco = () => {
        history.push(`/detalle/61f1686cdcc64fb31149ef19`)
        window.scrollTo(0, 100);
    }

    useEffect(() => {
        Aos.init({ duration: 1100 });
    }, []);


    return (
        <div className="m-3 row">
            <div data-aos="fade-up" className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                <Card onClick={verCardMaizena} className="bg-dark text-white mb-2 container-photo-home">
                    <Card.Img className='promo-bestseller' src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1669287044/cocoMAD/clasicos%20/ALFAJOR_MAIZENA_shz0we.png" alt="Card image" />
                    <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                        <div className="overlay">
                            <Card.Title className="titulo-card-home">ALFAJORES DE MAIZENA</Card.Title>
                            <Card.Text className='text-card-home'>
                                x 6 a 7.50 € - x 12 a 14.50 €
                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div data-aos="fade-up" className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                <Card onClick={verCardCoco} className="bg-dark text-white mb-2 container-photo-home">
                    <Card.Img className='promo-bestseller' src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1669287044/cocoMAD/clasicos%20/ALFAJOR_COCO_lhvwkg.png" alt="Card image" />
                    <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                        <div className="overlay">
                            <Card.Title className="titulo-card-home">ALFAJORES DE COCO</Card.Title>
                            <Card.Text className='text-card-home'>
                                x 6 a 7.50 € - x 12 a 14.50 €
                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    )
}