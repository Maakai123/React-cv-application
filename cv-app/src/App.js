import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("")

  const [education, setEducation] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")


  const [position, setPosition] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  const [startDateExperience, setStartDateExperience] = useState("")
  const [endDateExperience, setEndDateExperience] = useState("")

  const [description,setDescription] = useState("")

  function deleteAll() {
    setInput("")
    setEmail("")
    setPhone("")
    setAddress("")
    setEducation("")
    setSchool("")
    setStartDate("")
    setEndDate("")
    setPosition("")
    setCompany("")
    setLocation("")
    setStartDateExperience("")
    setEndDateExperience("")
    setDescription("")
    
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1 className="cv">Your CV APP</h1>
        <CvInformation
          input={input}
          setInput={setInput}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          deleteAll={deleteAll}

        />
        <Education
          education={education}
          setEducation={setEducation}
          school={school}
          setSchool={setSchool}
          startDate={startDate}
          setStartDate = {setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          deleteAll={deleteAll}

        />





        <WorkExperience
        position={position}
        setPosition={setPosition}
        company={company}
        setCompany={setCompany}
        location={location}
        setLocation={setLocation}
        startDateExperience={ startDateExperience}
        setStartDateEx = {setStartDateExperience}
        endDateExperience={endDateExperience}
        setEndDateEx={setEndDateExperience}
        description={description} 
        setDescription={setDescription}
        deleteAll={deleteAll}/>
      </div>

      <ShowOutput
        input={input}
        email={email}
        phone={phone}
        education={education}
        address={address}
        school={school}
        startDate ={startDate}
        endDate={endDate}

        position={position}
        company={company}
        location={location}
        startDateExperience={startDateExperience}
        endDateExperience={endDateExperience}
        setEndDateEx={setEndDateExperience}
        description={description} 
        setDescription={setDescription}
      />
    </div>
  );
}




function CvInformation({ input, setInput, email, setEmail, phone, setPhone,address,setAddress,deleteAll }) {
  return (
    <div>
      <h1 className="general">GENERAL INFORMATION</h1>
      <div className="input-div">
        <label>Name</label>
        <input
          input
          type="text"
          placeholder="Enter your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      ,
      <div className="input-div">
        <label>Email</label>
        <input
          input
          type="email"
          placeholder="maakaiprincewill@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label>Phone</label>
        <input
          input
          type="tel"
          placeholder="+2348133452389"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label>Address</label>
        <input input type="text" placeholder="Nigeria"
        value={address}
        onChange={(e) => setAddress(e.target.value)} />
      </div>
      
    </div>
  );
}

function Education({ education, setEducation,school,setSchool,startDate, setStartDate, endDate, setEndDate,deleteAll}) {
  return (
    <div>
      <h1 className="general">EDUCATION EXPERIENCE</h1>

      <div className="input-div">
        <label>Qualification</label>
        <input
          input
          type="text"
          placeholder="Enter your qualification"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </div>

      <div className="input-div">
        <label>School</label>
        <input input type="email" placeholder="Enter name of school" 
        value={school}
        onChange={(e) => setSchool(e.target.value)}/>
      </div>

      <div className="input-div">
        <label>Start Date</label>
        <input input type="text"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)} />
      </div>

      <div className="input-div">
        <label>End Date</label>
        <input input type="text"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)} />
      </div>
    </div>
  );
}




function WorkExperience({position,setPosition,company,setCompany,location,setLocation,startDateExperience,setStartDateEx, endDateExperience,
  setEndDateEx,description,setDescription,deleteAll}) {
  return (
    <div>
      <h1 className="general">WORK EXPERIENCE</h1>

      <div className="input-div">
        <label>Position</label>
        <input input type="text" placeholder="Enter your Position" 
         value={position}
         onChange={(e) => setPosition(e.target.value)}/>
      </div>

      <div className="input-div">
        <label>Company</label>
        <input input type="email" placeholder="Enter name of company"
        value={company}
        onChange={(e) => setCompany(e.target.value)} />
      </div>

      <div className="input-div">
        <label>Location</label>
        <input input type="text" placeholder="Enter location" 
        value={location}
        onChange={(e) => setLocation(e.target.value)}/>
      </div>

      <div className="input-div">
        <label>Start Date</label>
        <input input type="text" 
        value={startDateExperience}
        onChange={(e) => setStartDateEx(e.target.value)}/>
      </div>

      <div className="input-div">
        <label>End Date</label>
        <input input type="text"
        value={endDateExperience}
        onChange={(e) => setEndDateEx(e.target.value)} />
      </div>

      <div className="input-div">
        <label>Description</label>
        <textarea
          type="text"
          placeholder="Type here..."
          className="description-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <button className="button" onClick={deleteAll}>Delete Everything</button>
    </div>
  );
}

function ShowOutput({ input, email, phone, education,address,school,startDate,endDate,position,company,location,
  startDateExperience,endDateExperience,description}) {
  return (
    <div className="main">
      <h1>CV DEATILS</h1>

      <div className="sub">
        <h2>GENERAL INFORMATION</h2>
        <label>Name: {input}</label>
        <label>Email: {email}</label>
        <label>Phone: {phone}</label>
        <label>Address: {address}</label>

        <h2>EDUCATION EXPERIENCE</h2>
        <label>Qualification:  {education}</label>
        <label>School: {school}</label>
        <label>Start Date: {startDate}</label>
        <label>End Date: {endDate}</label>

        <h2>WORK EXPERIENCE</h2>
        <label>Position: {position}</label>
        <label>Company: {company}</label>
        <label>Location:{location}</label>
        <label>Start Date:{startDateExperience}</label>
        <label>End Date:{endDateExperience}</label>

        <h2>DESCRIPTION : {description}</h2>
      </div>
    </div>
  );
}
