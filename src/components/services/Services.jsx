import React from 'react'

const Services = () => {
    return (
        <>
            <h1 className="section-2-heading">
                Paypal is for everyone who pays or gets paid
            </h1>

            <div className="services">

                <div className="service">
                    <i className="fas fa-user-tie"></i>
                    <h3 className="service-heading">Individual</h3>
                    <p className="service-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, laboriosam?
                    </p>
                    <button className="service-btn">
                        Learn More
                    </button>
                </div>

                <div className="service">
                    <i className="fas fa-briefcase"></i>
                    <h3 className="service-heading">Business</h3>
                    <p className="service-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, laboriosam?
                    </p>
                    <button className="service-btn">
                        Learn More
                    </button>
                </div>

                <div className="service">
                    <i className="far fa-handshake"></i>
                    <h3 className="service-heading">Partners</h3>
                    <p className="service-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, laboriosam?
                    </p>
                    <button className="service-btn">
                        Learn More
                    </button>
                </div>


            </div>


        </>
    )
}

export default Services