import React from "react";

const BookDetails = props => {
  console.log(props.match.params.id);
  console.log(props);

  const back = () => {
    props.history.goBack();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card ">
            <div className="card-content">
              <div className="card-panel">
                <span className="card-title">
                  {" "}
                  <div className="btn-flat white black-text" onClick={back}>
                    <i class="material-icons" style={{ fontSize: "25px" }}>
                      arrow_back
                    </i>
                  </div>{" "}
                  System programming
                </span>
              </div>
              <div className="card-panel">
                <span className="blue-text text-darken-2">
                  Book information
                </span>
                <blockquote>Author: </blockquote>
                <blockquote>Semester: </blockquote>
                <blockquote>Publisher: </blockquote>
                <blockquote>Subject: </blockquote>
                <blockquote>Branch: </blockquote>
                <blockquote>Uploaded on: </blockquote>
              </div>
              <div className="card-panel">
                <span className="blue-text text-darken-2">
                  Donor information
                </span>
                <blockquote>Name: </blockquote>
                <blockquote>Email: </blockquote>
                <blockquote>Mobile: </blockquote>
                <blockquote>Total books donoted: </blockquote>
              </div>
            </div>
            <div className="card-action indigo ">
              <a href="#" className="white-text">
                This is a link
              </a>
              <a href="#" className="white-text">
                This is a link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
