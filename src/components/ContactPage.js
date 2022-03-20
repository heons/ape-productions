import React from 'react'
import { Row, Col } from 'react-bootstrap';


const ContactPage = ({ zIndex }) => {
    const pageStyle = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        zIndex: zIndex,
    };

    const imgStyle = {
        width: '30px',
        height: '30px',
        margin: '20px',
        border: '2px solid white',
        borderRadius: '25%',
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
                <Col xs={12}>
                    <a href="https://www.instagram.com/ape.kr/" target="_blank" rel="noreferrer">
                        <img
                            src={`${process.env.PUBLIC_URL}/icon_instagram.png`}
                            alt="instagram"
                            style={imgStyle}
                        ></img>
                    </a>
                    <a href="https://open.kakao.com/o/snmiM4yd" target="_blank" rel="noreferrer">
                        <img
                            src={`${process.env.PUBLIC_URL}/icon_kakao.png`}
                            alt="kakao"
                            style={imgStyle}
                        ></img>
                    </a>
                </Col>
            </Row>
        </div>
    )
}
        
export default React.memo(ContactPage);
        