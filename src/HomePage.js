import React from 'react';


function HomePage(props) {



    return (
        <div>
            <h1>Welcome to Plannr!</h1>
            <div className='Flex'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Destination</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Departure Date/Time</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Arrival Date/Time</label>
                </div>
            </div>
        </div>
    );
}

export default HomePage;