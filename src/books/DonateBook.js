
import React,{useState, useEffect} from 'react';

const DonateBook = (props) => {
    const [sem,setSem] = useState(null)
    const [name,setName] = useState(null)
    const [pub, setPub] = useState(null)
    const [subject, setSubject] = useState(null)
    const [author,setAuthor] = useState(null)
    const [branch,setBranch] = useState(null)
    const back = () => {
        props.history.goBack();
      };
      useEffect(()=>{
        window.M.AutoInit();
      },false)

      const handleBookSubmit = (e) => {
        e.preventDefault();
        console.log(sem,name,pub,author,branch,subject);
        
      }
    return (
        <div className="container">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card z-depth-0">
            <div className="card-content">
              <div className="card-panel">
                <span className="card-title">
                  {" "}
                  <div className="btn-flat white black-text" onClick={back}>
                    <i class="material-icons" style={{ fontSize: "25px" }}>
                      arrow_back
                    </i>
                  </div>{" "}
                  Donate Book
                </span>
              </div>
              
              <div className="card-panel right-align">

              <div class="row">
    <form class="col s12" onSubmit={handleBookSubmit}>
      <div class="row">
        <div class="input-field col s6">
          <input id="bookName" type="text" class="validate" onChange={(e)=>{setName(e.target.value)}} />
          <label for="first_name">Book Name</label>
        </div>
        <div class="input-field col s6">
          <input id="subject" type="text" class="validate" onChange={(e)=>{setSubject(e.target.value)}} />
          <label for="last_name">Subject</label>
        </div>
        <div class="input-field col s6">

        <select onChange={(e)=>{setBranch(e.target.value)}}>
      <option value="" disabled selected>Select Branch</option>
      <option value="computer">Computer</option>
      <option value="electrical">Electrical</option>
      <option value="mechanical">Mechanical</option>
    </select>
    </div>
    <div class="input-field col s6">
    <select onChange={(e)=>{setSem(e.target.value)}}>
      <option value="" disabled selected>Select Semester</option>
      <option value="1">Semester 1</option>
      <option value="2">Semester 2</option>
      <option value="3">Semester 3</option>
    </select>
    </div>

    <div class="input-field col s6">
          <input id="pub" type="text" class="validate" onChange={(e)=>{setPub(e.target.value)}}/>
          <label for="pub">Book Publisher</label>
        </div>
        <div class="input-field col s6">
          <input id="author" type="text" class="validate" onChange={(e)=>{setAuthor(e.target.value)}} />
          <label for="author">Book Auther</label>
        </div>
    </div>
    <button class="btn waves-effect waves-light indigo " type="submit">Submit
    <i class="material-icons right">send</i>
  </button>
      </form>

      
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default DonateBook;