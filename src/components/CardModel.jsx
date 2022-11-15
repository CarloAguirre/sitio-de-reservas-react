import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardModel = ({img})=>{
    

  const path =  `../public/${img}.jpg`

  
    return (
      <Card style={{ width: '100%', marginBottom: '1.5rem' }}>
        <Card.Img variant="top" src={ path }/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className='text-dark text-opacity-50 fw-semibold'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p class="text-dark text-opacity-50 fw-semibold">
                <span><i class="fa-solid fa-location-dot me-2"></i></span>
                City, Country.
              </p>
          <hr />
          <Button variant="primary" 
          className='btn btn-light btn-outline-success p-3'
          style={{float: "left"}}
          >Reservar</Button>
          <div class="d-flex justify-content-end">
            <p class="text-dark text-opacity-50 me-3 fw-semibold">$45.000</p>
            <p class="text-success ms-4 fw-bold fs-5">$180.000</p>
          </div>
        </Card.Body>
      </Card>
    );
}

export default CardModel;