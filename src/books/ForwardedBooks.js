import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ForwardedBooks() {
  const books = [
    {
      id: '1',
      bookName: 'ATWOOD',
      bookAuthor: 'Margaret Atwood',
      branch: 'Political fiction',
      semester: '3',
    },
    {
      id: '2',
      bookName: 'Quantum Roots',
      bookAuthor: 'Kyle Keyes',
      branch: 'Suspense',
      semester: '4',
    },
    {
      id: '3',
      bookName: 'World Ecos',
      bookAuthor: 'L. Page',
      branch: 'computer',
      semester: '5',
    },
    {
      id: '4',
      bookName: 'Java fist edition',
      bookAuthor: 'P. Lama',
      branch: 'computer',
      semester: '6',
    },
  ];
  return (
    <>
      <div className='card-panel'>
        <span className='card-title'>Re-doneted Books </span>
        <span class='new badge blue' data-badge-caption='Books'>
          4
        </span>
      </div>
      <div className='row'>
        {books.map((book) => (
          <div className='col s12 m6 l6' key={'book.id'}>
            <div class='card blue-grey darken-1 hoverable'>
              <div class='card-content white-text'>
                <span class='card-title'>{book.bookName}</span>
                <p>Author :- {book.bookAuthor}</p>
                <p>Branch :- {book.branch}</p>
                <p>Semester :- {book.semester}</p>
              </div>
              <div class='card-action '>
                <Link to={'viewbook/' + book.id}>
                  <a href='#'>Track</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className='col s12 m6 l6' key={'book.id'}>
          <div class='card blue-grey darken-1 hoverable'>
            <div class='card-content white-text'>
              <span class='card-title'>{'book.bookName'}</span>
              <p>Author :- {'book.bookAuthor'}</p>
              <p>Branch :- {'book.branch'}</p>
              <p>Semester :- {'book.semester'}</p>
            </div>
            <div class='card-action '>
              <Link to={'viewbook/' + 'book.id'}>
                <a href='#'>Track</a>
              </Link>
            </div>
          </div>
        </div>{' '}
        <div className='col s12 m6 l6' key={'book.id'}>
          <div class='card blue-grey darken-1 hoverable'>
            <div class='card-content white-text'>
              <span class='card-title'>{'book.bookName'}</span>
              <p>Author :- {'book.bookAuthor'}</p>
              <p>Branch :- {'book.branch'}</p>
              <p>Semester :- {'book.semester'}</p>
            </div>
            <div class='card-action '>
              <Link to={'viewbook/' + 'book.id'}>
                <a href='#'>Track</a>
              </Link>
            </div>
          </div>
        </div>{' '}
        <div className='col s12 m6 l6' key={'book.id'}>
          <div class='card blue-grey darken-1 hoverable'>
            <div class='card-content white-text'>
              <span class='card-title'>{'book.bookName'}</span>
              <p>Author :- {'book.bookAuthor'}</p>
              <p>Branch :- {'book.branch'}</p>
              <p>Semester :- {'book.semester'}</p>
            </div>
            <div class='card-action '>
              <Link to={'viewbook/' + 'book.id'}>
                <a href='#'>Track</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l6' key={'book.id'}>
          <div class='card blue-grey darken-1 hoverable'>
            <div class='card-content white-text'>
              <span class='card-title'>{'book.bookName'}</span>
              <p>Author :- {'book.bookAuthor'}</p>
              <p>Branch :- {'book.branch'}</p>
              <p>Semester :- {'book.semester'}</p>
            </div>
            <div class='card-action '>
              <Link to={'viewbook/' + 'book.id'}>
                <a href='#'>Track</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l6' key={'book.id'}>
          <div class='card blue-grey darken-1 hoverable'>
            <div class='card-content white-text'>
              <span class='card-title'>{'book.bookName'}</span>
              <p>Author :- {'book.bookAuthor'}</p>
              <p>Branch :- {'book.branch'}</p>
              <p>Semester :- {'book.semester'}</p>
            </div>
            <div class='card-action '>
              <Link to={'viewbook/' + 'book.id'}>
                <a href='#'>Track</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
