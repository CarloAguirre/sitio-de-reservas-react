import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardModel = ({img})=>{
    


  const path =  `../public/${img}.jpg`

  

    return (
      <Card style={{ width: '100%', marginBottom: '1.5rem' }}>
        <Card.Img variant="top" src={ path }/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p class="text-dark text-opacity-50">
                <span><i class="fa-solid fa-location-dot"></i></span>
                City, Country.
              </p>
          <hr />
          <Button variant="primary" 
          className='btn btn-light btn-outline-success p-3'
          style={{float: "left"}}
          >Reservar</Button>
        </Card.Body>
      </Card>
    );
}

export default CardModel;