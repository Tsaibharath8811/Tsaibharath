import Carousel from 'react-bootstrap/Carousel';



function Cursole() {
    return (
        <div>
            
            <Carousel fade variant="dark" style={{marginTop:"10px"}}>
                <Carousel.Item style={{background:"red"}}>
                    <img
                    style={{marginLeft:"20px",width:"450px", height:"300px"}}
                        className="d-block w-10"
                        src="./3m.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>3 million</h1>
                        <p>Our Web App Reached 3m Mile Stone</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{background:"pink"}}>
                    <img
                        style={{ marginLeft:"500px",width:"750px",height:"300px"}}
                        className="d-block w-10"
                        src="./images.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{marginRight:"600px"}}>
                        <h3>Coupons</h3>
                        <p>Use "First100" And enjoy 100rs/- Discount on first book :).</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{marginLeft:"850px",width:"400px",height:"300px"}}
                        className="d-block w-10"
                        src="./pay.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{marginRight:"700px"}}>
                        <h3>Payment</h3>
                        <p>Use SBI Credit Card And Get 5% Offer</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );

}

export default Cursole;