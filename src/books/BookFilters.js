import React, { useState } from 'react';


const BookFilters = () => {
    const handleFilterSubmit = (e) =>{
        console.log("form sumited");
        console.log(sem,branch,name);
        e.preventDefault();
    }
    const [sem,setSem] = useState(null)
    const [name,setName] = useState(null)
    const [branch,setBranch] = useState(null)
     

    return (
        <div className="right-align card-panel">
             <form onSubmit={handleFilterSubmit}>
             <div class="input-field">
          <input id="bookName" type="text" class="validate" onChange={(e)=>{setName(e.target.value)}} />
          <label for="bookName">Book name</label>
        </div>
    <select onChange={(e)=>{setBranch(e.target.value)}} id="branch">
      <option value="" disabled selected>Select Branch</option>
      <option value="computer">Computer</option>
      <option value="electrical">Electrical</option>
      <option value="mechanical">Mechanical</option>
    </select>
    <select onChange={(e)=>{setSem(e.target.value)}} id="sem">
      <option value="" disabled selected>Select Semester</option>
      <option value="1">Semester 1</option>
      <option value="2">Semester 2</option>
      <option value="3">Semester 3</option>
    </select>
    <button class="btn waves-effect waves-light indigo " type="submit">Submit
    <i class="material-icons right">send</i>
  </button>
  
    </form>
        </div>
    );
};

export default BookFilters;