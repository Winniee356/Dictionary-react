import React from "react";

export default function Photos(props) {
    console.log(props.photos);
    if (props.photos) {
        return (
            <section className="Photos" >
                {props.photos.map(function(photo, index) {
                    return <img src={photo.src.landscape} key={index} />;  
                    })}
            </section>
        );
    } else {
        return null;
    }
}