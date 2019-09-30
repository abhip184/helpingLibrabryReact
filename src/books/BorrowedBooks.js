import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function BorrowedBooks() {
    return (
        <>
        <div className="card-panel ">
        <span className="card-title ">Borrowed Books </span>
        <span class="new badge red" data-badge-caption="Books">4</span>
      </div>

      <div className="col s12 m12 l12" key={"book.id"}>
      <Link to={"books"} className=" btn indigo white-text" style={{width:"100%"}}>Search new books</Link>
        <div class="card blue-grey darken-1 hoverable">
          <div class="card-content white-text">
            <span class="card-title">{"book.bookName"}</span>
            <p>Author :- {"book.bookAuthor"}</p>
            <p>Branch :- {"book.branch"}</p>
            <p>Semester :- {"book.semester"}</p>
          </div>
          <div class="card-action ">
            <Link to={"viewbook/" + "book.id"}>
              <a href="#">View Details</a>
              <a href="#">Re Donate</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="col s12 m12 l12" key={"book.id"}>
        <div class="card blue-grey darken-1 hoverable">
          <div class="card-content white-text">
            <span class="card-title">{"book.bookName"}</span>
            <p>Author :- {"book.bookAuthor"}</p>
            <p>Branch :- {"book.branch"}</p>
            <p>Semester :- {"book.semester"}</p>
          </div>
          <div class="card-action ">
            <Link to={"viewbook/" + "book.id"}>
            <a href="#">View Details</a>
              <a href="#">Re Donate</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col s12 m12 l12" key={"book.id"}>
        <div class="card blue-grey darken-1 hoverable">
          <div class="card-content white-text">
            <span class="card-title">{"book.bookName"}</span>
            <p>Author :- {"book.bookAuthor"}</p>
            <p>Branch :- {"book.branch"}</p>
            <p>Semester :- {"book.semester"}</p>
          </div>
          <div class="card-action ">
            <Link to={"viewbook/" + "book.id"}>
            <a href="#">View Details</a>
              <a href="#">Re Donate</a>
            </Link>
          </div>
        </div>
      </div>
    </>
    )
}
