import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BookList = ({books}) => {
    return(
        <div className="row">
        {    
        books && books.map(book => {
        return (
            <div className="col s12 m3 l4" key={book.id}>
      <div class="card blue-grey darken-1 hoverable">
        <div class="card-content white-text">
          <span class="card-title">{book.bookName}</span>
          <p>Author :- {book.bookAuthor}</p>
          <p>Branch :- {book.branch}</p>
          <p>Semester :- {book.semester}</p>
        </div>
        <div class="card-action ">
          <Link to={"viewbook/"+ book.id}>
          <a href="#">Borrow</a>
          </Link>
        </div>
      </div>
    </div>
            );
    })}
    </div>
    )
};

export default BookList;