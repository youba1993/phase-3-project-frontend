import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function AddDonation({ categories }) {

    const [ donation, setDonation] = useState({
        categorie_id: 1,
        amount: 1,
        user_id: 1,
        comment: "" 
    })

    function hundleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setDonation({
            ...donation,
            [name]: value,
        });
    }
    
    function handleSubmit(e){
        const categorie_id = e.target[0].value
        const comment = e.target[1].value
        const amount = e.target[2].value
    
        fetch("http://localhost:9292/donations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                categorie_id: categorie_id ,
                comment: comment,
                amount: parseInt(amount),
                user_id: 1
            }),
          })
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col>
                <FloatingLabel controlId="floatingSelect">
                    <Form.Select aria-label="Floating label select example">
                        <option>Choose Categorie</option>
                        {categories.map((categorie) =>
                            <option name="categorie_id" value={categorie.id} key={categorie.id} onSelect={hundleChange}>{categorie.name}</option>
                        )}

                    </Form.Select>
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Comments"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Leave a comment here" name="comment" onChange={hundleChange} />
                </FloatingLabel>
                </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Amount" name="amount" onChange={hundleChange} />
                    </Col>
                    <Col>
                        <Button type="submit" variant="primary" > Donate </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default AddDonation;