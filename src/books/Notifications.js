import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Notifications() {
  return (
    <>
      <div className="card-panel">
        <span className="card-title">Book Requests</span>
        <span class="new badge green" data-badge-caption="Notifications">4</span>

      </div>
        <div className="row">
          <ul class="collection ">
            
            <li class="collection-item z-depth-0">
              <div className="card horizontal">
              <div class="card-content">
                Mark requested the <Link>economic enginnering </Link> book Mark requested this 
                <div class="secondary-content">
                 <div className=" btn-small indigo white-text">Approve</div>
                 <div className=" btn-small red white-text">Decline</div>

                </div>
              </div>
              </div>
              <div className="card horizontal">
              <div class="card-content">
                Mark requested the <Link>economic enginnering </Link> book Mark requested this 
                <div class="secondary-content">
                 <div className=" btn-small indigo white-text">Approve</div>
                 <div className=" btn-small red white-text">Decline</div>
                </div>
              </div>
              </div>
              <div className="card horizontal">
              <div class="card-content">
                Mark requested the <Link>economic enginnering </Link> book Mark requested this 
                <div class="secondary-content">
                 <div className=" btn-small indigo white-text">Approve</div>
                 <div className=" btn-small red white-text">Decline</div>
                </div>
              </div>
              </div>
            </li>
          </ul>
        </div>
    </>
  );
}
