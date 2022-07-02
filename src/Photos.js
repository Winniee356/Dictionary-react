import React from "react";


export default function Photos(props) {
    console.log(props.photos);
    if (props.photos) {
        return (
            <section className="Photos" >
                <div className="row" >
                {props.photos.map(function(photo, index) {
                    return (
                        <div className="col-4" key={index} >
                    <img src={photo.src.landscape} className="img-fluid" />
                    </div>
                     ) 
                    })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}