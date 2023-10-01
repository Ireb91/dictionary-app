import React from "react";
import "./Photo.css";

export default function Photo(props) {
  if (props.photo) {
    return (
      <section className="photos">
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <div key={index} className="col-4">
                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
