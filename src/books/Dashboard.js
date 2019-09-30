import React, { Component } from 'react';
import BookList from './BookList';
import BookFilters from './BookFilters';

class Dashboard extends Component {

    state = {
      books: [
        {id:"1",bookName:"Maths",bookAuthor:"Abhi",branch:"computer",semester:"3"},
        {id:"2",bookName:"Android",bookAuthor:"Urvashi",branch:"computer",semester:"4"},
        {id:"3",bookName:"C language",bookAuthor:"Avni",branch:"computer",semester:"5"},
        {id:"4",bookName:"Java",bookAuthor:"Amee",branch:"computer",semester:"6"},
    ],
    total:4
}
    componentDidMount() {
       window.M.AutoInit();
    }

    handleFilters = (sem,branch, e=null) => {
        if(e)
        e.preventDefault();
        console.log(sem,branch,e.target.value);
    }

    render() {
        const bookList = this.state.books.length ? (
            <div className="row">
                <div className="col s12 m3 l3">
                <div className="card z-depth-0">
                    <div class="card-content">
                    <div className="card-panel">
             <span class="card-title"><b>Apply Filters</b></span>
            </div>
             <BookFilters handleFilters={this.handleFilters} />
            </div>
        </div>
                </div>
                <div className="col s12 l9 m9">
                <div className="card z-depth-0">
                    <div class="card-content">
                    <div className="card-panel">
             <span class="card-title center"><b>Book List</b></span>
             </div>

  
            <BookList books={this.state.books}/>
            </div>
        </div>
                </div>
            </div>
       ):("no books found")
        return (
            <div>
                {bookList}
            </div>
        );
    }
}


export default Dashboard;