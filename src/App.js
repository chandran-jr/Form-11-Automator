import './App.css';
import Header from './Components/Header'
import {useState} from 'react';
import { PDFDocument } from 'pdf-lib'


function App() {


  const [name,setName] = useState("");
  const [empId,setEmpId] = useState("");
  const [company,setCompany] = useState("");
  const [father,setFather] = useState("");
  const [gender,setGender] = useState("");
  const [marital,setMarital] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [bankacc,setBankacc] = useState("");
  const [ifsc,setIfsc] = useState("");
  const [aadhar,setAadhar] = useState("");
  const [pan,setPan] = useState("");

  async function fillForm() {

    console.log("fillForm called");
    console.log(name);
    const formUrl = 'https://shielded-eyrie-92960.herokuapp.com/https://github.com/chandran-jr/Genie11/blob/main/PFForm11.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(formPdfBytes)

    const form = pdfDoc.getForm()

    const nameField = form.getTextField('Name of the member')

    nameField.setText(name)

    const pdfBytes = await pdfDoc.save()

    var blob = new Blob([pdfBytes], {type: "application/pdf"});
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "myFileName.pdf";
    link.click();

  }  

  return (
    <div className="App">
    
    <div className="app__header">
    <Header/>
    </div>

     <div className="Cards">

     <iframe title="form11" name="hidden_iframe" Style="display: none" id="hidden_iframe"></iframe>

    <form method="POST" target="hidden_iframe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdO_gQPp0kuOlx-zmlljqzwK0IUlghiJnVV0sF5CzaYlvhsHg/formResponse">

     <div className="tooltip">
        <div className="Card">
            <h2>Name</h2>
            <input required name="entry.1011270989" onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Your Full Name</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Employee ID</h2>
            <input required name="entry.419482644" onChange={(e) => setEmpId(e.target.value)} value={empId} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Employee ID given by the company</span>
        </div>
        </div>


        <div className="tooltip">
        <div className="Card">
            <h2>Company</h2>
            <input required name="entry.459872116" onChange={(e) => setCompany(e.target.value)} value={company} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Company you work for</span>
        </div>
        </div>


        <div className="tooltip">
        <div className="Card">
            <h2>Father's Name</h2>
            <input required name="entry.348738897" onChange={(e) => setFather(e.target.value)} value={father} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Your father's Full Name</span>
        </div>
        </div>


        <div className="tooltip">
        <div className="Card">
            <h2>Gender</h2>
            <input required name="entry.1636074435" onChange={(e) => setGender(e.target.value)} value={gender} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Male/Female/Transgender</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Marital Status</h2>
            <input required name="entry.418814276" onChange={(e) => setMarital(e.target.value)} value={marital} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Married/Unmarried/Divorce/Widow</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Email ID</h2>
            <input required name="entry.250229100" onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter it here"/>
            <span className="tooltiptext">Your main Email</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Mobile Number</h2>
            <input required name="entry.1881575692" onChange={(e) => setMobile(e.target.value)} value={mobile} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">No country code needed</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Bank Account No.</h2>
            <input required name="entry.697789802" onChange={(e) => setBankacc(e.target.value)} value={bankacc} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Your primary bank acc</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>IFSC Code</h2>
            <input required name="entry.248146665" onChange={(e) => setIfsc(e.target.value)} value={ifsc} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">IFCS Code of the bank acc you entered</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Aadhar No</h2>
            <input required name="entry.1518913305" onChange={(e) => setAadhar(e.target.value)} value={aadhar} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Should contain 12 digits</span>
        </div>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Pan Card No.</h2>
            <input name="entry.49499674" onChange={(e) => setPan(e.target.value)} value={pan} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Enter if Available</span>
        </div>
        </div>

        <div className="buttondiv">
        <button onClick={fillForm} type="submit" className="submitbutton">Submit</button>
        </div>

        </form>

      </div>

    </div>
  );
}

export default App;
