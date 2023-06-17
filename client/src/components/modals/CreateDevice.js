import React, { useContext, useState } from 'react';
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap'
import {Context} from '../../index'

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description:'', number: Date.now()}])
    }
    
    const removeProperty = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form>
                        <Dropdown>
                            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map((type) => 
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='mt-3'>
                            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map((brand) => 
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            className='mt-3'
                            placeholder='Write name of the device'
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='Write price of the device'
                            type='number'
                        />
                        <Form.Control
                            className='mt-3'
                            type='file'
                        />
                        <hr/>
                        <Button
                            variant='outline-dark'
                            onClick={addInfo}
                        >
                            Add new property
                        </Button>
                        {
                            info.map(i => 
                                <Row key={i.number} className='mt-3'>
                                    <Col md={4}>
                                        <Form.Control
                                            placeholder='Write name of the property'
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control
                                            placeholder='Write description of the property'
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Button 
                                            variant='outline-danger' 
                                            onClick={() => removeProperty(i.number)}
                                        >
                                            Delete
                                        </Button>
                                    </Col>
                                </Row>)
                        }
                    </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={onHide}>Add</Button>
            </Modal.Footer>
    </Modal>
    );
};

export default CreateDevice;