import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
 const MediaCard = ({imageUrl,title,body}) => {
    return (
        <div style={{alignItem:'center',width:'500px',margin:'0 auto',marginTop:'20px'}}>
            <Card style={{ width: '18rem',textAlign: 'center' }}>
  <Card.Img variant="top" src={imageUrl} />
    <Card.Title>{title}</Card.Title>
  <Card.Body>
    <Card.Text>
        {body}
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}
export default MediaCard