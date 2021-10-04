import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData2.JSON')
            .then(res => res.json())
            .then(data => setHomeServices(data));
    }, [])
    return (
        <div>
            <div className="bg-info mb-3 p-2">
                <h1>Welcome To <span className="text-light">The Dance Soul</span></h1>
                <h2>We're offering you the best Services and affordable courses.</h2>
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    homeServices.map(homeService => <HomeService homeService={homeService}></HomeService>)
                }
            </Row>
        </div>
    );
};

export default Home;