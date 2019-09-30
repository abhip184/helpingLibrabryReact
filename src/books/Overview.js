import React, { Component } from 'react'
import DonetedBooks from './DonetedBooks';
import BorrowedBooks from './BorrowedBooks';
import ForwardedBooks from './ForwardedBooks';
import Notifications from './Notifications';

export default class Overview extends Component {

    componentDidMount() {
        window.M.AutoInit();
     }
    render() {
        return (
            <div className="row">
                <div className="col l3">
                <Notifications/>
                </div>
                <div className="col l6">
                <DonetedBooks/>
                <ForwardedBooks/>
                </div>
                <div className="col l3">
                <BorrowedBooks/>
                </div>
            </div>
        )
    }
}
