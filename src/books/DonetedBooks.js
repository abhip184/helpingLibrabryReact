import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function DonetedBooks(props) {
  const back = () => {
    props.history.goBack();
  };
  return (
    <>
      <div className="card-panel">
        <span className="card-title">Doneted Books </span>
        <span class="new badge indigo" data-badge-caption="Books">4</span>
      </div>
    <div className="row">
    <div className="col s12 m12 l12" key={"book.id"}>
    <Link to={"donate"} className=" btn indigo white-text" style={{width:"100%"}}>Donate new books</Link>
</div>
      <div className="col s12 m6 l6" key={"book.id"}>
        <div class="card blue-grey darken-1 hoverable">
          <div class="card-content white-text">
            <span class="card-title">{"book.bookName"}</span>
            <p>Author :- {"book.bookAuthor"}</p>
            <p>Branch :- {"book.branch"}</p>
            <p>Semester :- {"book.semester"}</p>
          </div>
          <div class="card-action ">
            <Link to={"viewbook/" + "book.id"}>
              <a href="#">Track</a>
            </Link>
          </div>
        </div>
      </div>
    
      <div className="col s12 m6 l6" key={"book.id"}>
        <div class="card blue-grey darken-1 hoverable">
          <div class="card-content white-text">
            <span class="card-title">{"book.bookName"}</span>
            <p>Author :- {"book.bookAuthor"}</p>
            <p>Branch :- {"book.branch"}</p>
            <p>Semester :- {"book.semester"}</p>
          </div>
          <div class="card-action ">
            <Link to={"viewbook/" + "book.id"}>
              <a href="#">Track</a>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
