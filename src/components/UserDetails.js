import React from 'react'

function UserDetails(props) {
    const handleImageError = (event) => {
        console.error('Image failed to load:', event.target.src);

        event.target.src = 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg';
    };

    return (
        <div>
            <div className="card mx-5" style={{ width: "30rem", backgroundColor:"#EAF0F1" }}>
                <img src={props.element.avatar} className="card-img-top" alt="..." onError={handleImageError} />
                <div className="card-body">
                    <h1 className="card-title">{props.element.profile.firstName}     {props.element.profile.lastName}</h1>
                    <h3 className="card-text">User Name : {props.element.profile.username}</h3>
                    <h5 className="card-text">Email : {props.element.profile.email}</h5>
                    <p className="card-text">Job Title : {props.element.jobTitle}</p>
                    <p className="card-text">Bio : {props.element.Bio}</p>
                    <p className="card-text">Created At : {props.element.createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
