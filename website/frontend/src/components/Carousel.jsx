import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Carousel = () => {
  return (
    <MDBCarousel showControls showIndicators fade dark interval={4200} className="my-carousel" >
      <MDBCarouselItem
        className='w-100 d-block my-img'
        itemId={1}
        src='\media\keyfob-carousel.jpg'
        alt='...'
        
      >
        <h4>Key Fobs</h4>
        <h6>Can be placed on a key ring for convenient entry!</h6>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block my-img'
        itemId={2}
        src='\media\card-printable-carousel.jpg'
        alt='...'
      >
        <h4>Printable Cards</h4>
        <h6>Need Photo IDs? Cards that can be printed on!</h6>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block my-img'
        itemId={3}
        src='\media\card-carousel.jpg'
        alt='...'
      >
        <h4>Prox Cards</h4>
        <h6>Traditional, but nothing traditional about them!</h6>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Carousel;