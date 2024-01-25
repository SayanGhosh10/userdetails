import React from 'react'

function Users(props) {
    const handleImageError = (event) => {
        console.error('Image failed to load:', event.target.src);

        event.target.src = 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg';
    };

    return (
        <div onClick={() => props.handleButtonClick(props.element.id)} style={{ cursor: "pointer" }}>
            <div className="row g-0" style={{ height: "20vh", width: "30vw" }}>
                <div className="col-md-0">{props.element.id}</div>
                <div className="col-md-4">
                    <img src={props.element.avatar} className="img mx-3" alt="" style={{ width: "70%", borderRadius: "50%" }} onError={handleImageError} />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{props.element.profile.firstName}     {props.element.profile.lastName}</h5>
                        <p className="card-text">{props.element.jobTitle}</p>
                        <p className="card-text"><small className="text-body-secondary">{props.element.profile.email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
