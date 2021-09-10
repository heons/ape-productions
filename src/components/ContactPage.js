import React from 'react'
import { Row, Col } from 'react-bootstrap';


const ContactPage = ({ zIndex }) => {
    const pageStyle = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        zIndex: zIndex,
    };
    
    return (
        <div
            className='PagePaddingTop'
            style={pageStyle}
        >
            <Row>
                <Col xs={12}>
                    <h1>서울특별시 마포구 양화진길 6, 6층</h1>
                </Col>
                <Col xs={12}>
                    <h1>+82-10-8487-2110</h1>
                </Col>
                <Col xs={12}>
                    <h1>+82-10-4642-8321</h1>
                </Col>
                <Col xs={12}>
                    <h1>apeproductionskr@gmail.com</h1>
                </Col>
            </Row>
        </div>
    )
}
        
export default React.memo(ContactPage);
        