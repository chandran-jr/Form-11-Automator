import './App.css';
import Header from './Components/Header'
import {useState} from 'react';
import {PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import pdf from './form.pdf'
import check from './check.png';



function App() {


  const [name,setName] = useState("");
  const [empId,setEmpId] = useState("");
  const [company,setCompany] = useState("");
  const [gender,setGender] = useState("");
  const [fatherSpouse,setFatherSpouse] = useState("");
  const [father,setFather] = useState("");
  const [marital,setMarital] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [bankacc,setBankacc] = useState("");
  const [ifsc,setIfsc] = useState("");
  const [aadhar,setAadhar] = useState("");
  const [pan,setPan] = useState("");
  const [place,setPlace] = useState("");
  const [sign,setSign] = useState();

  const [day,setDay] = useState("");
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setSign(URL.createObjectURL(e.target.files[0]));
    }
  };


    async function modifyPdf() {

        const checkMark = check;
        const signImg = sign;
        const url = pdf;
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
      
        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
      
        const pages = pdfDoc.getPages()
        const firstPage = pages[0]
       // const { width, height } = firstPage.getSize()

        firstPage.drawText(name, {
          x: 415,
          y: 710,
          size: 10,
          font: helveticaFont,
          color: rgb(0, 0, 0),
        })

        firstPage.drawText(empId, {
            x: 455,
            y: 783,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(company, {
            x: 435,
            y: 760,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(gender, {
            x: 415,
            y: 653,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(day, {
            x: 395,
            y: 670,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(month, {
            x: 460,
            y: 670,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(year, {
            x: 515,
            y: 670,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          if(fatherSpouse === "Father") {
            const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
            const pngImage = await pdfDoc.embedPng(pngImageBytes)
            const pngDims = pngImage.scale(0.07)

            firstPage.drawImage(pngImage, {
                x: 115,
                y: 694,
                width: pngDims.width,
                height: pngDims.height
              })
          }
          else {
            const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
            const pngImage = await pdfDoc.embedPng(pngImageBytes)
            const pngDims = pngImage.scale(0.07)

            firstPage.drawImage(pngImage, {
                x: 196,
                y: 694,
                width: pngDims.width,
                height: pngDims.height
              })
          }

          firstPage.drawText(father, {
            x: 415,
            y: 687,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(marital, {
            x: 415,
            y: 638.5,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(email, {
            x: 415,
            y: 622.5,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(mobile, {
            x: 415,
            y: 609,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          const bankifsc = `${bankacc}, ${ifsc}`;

          firstPage.drawText(bankifsc, {
            x: 415,
            y: 407,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(aadhar, {
            x: 415,
            y: 388,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })
      
          firstPage.drawText(pan, {
            x: 415,
            y: 369,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(today, {
            x: 102,
            y: 265,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(place, {
            x: 102,
            y: 252,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          const signImageBytes = await fetch(signImg).then((res) => res.arrayBuffer())
          const signImage = await pdfDoc.embedPng(signImageBytes)
          const signDims = signImage.scale(0.16)

          firstPage.drawImage(signImage, {
              x: 480,
              y: 260,
              width: signDims.width,
              height: signDims.height
            })
       

    const pdfBytes = await pdfDoc.save();

    var blob = new Blob([pdfBytes], {type: "application/pdf"});
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${name} Form 11.pdf`;
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

        <div className="Card">
            <h2>Name</h2>
            <input required name="entry.1011270989" onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Employee ID</h2>
            <input required name="entry.419482644" onChange={(e) => setEmpId(e.target.value)} value={empId} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Company</h2>
            <input required name="entry.459872116" onChange={(e) => setCompany(e.target.value)} value={company} type="text" placeholder="Enter it here"/>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Gender</h2>
            <input required name="entry.1636074435" onChange={(e) => setGender(e.target.value)} value={gender} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Options: Male,Female,Transgender</span>
        </div>
        </div>

        <h3 Style="color:white;font-size:20px;text-align:center;margin-bottom: 10px;">Date of Birth</h3>

        <div className="birthday">

        <div className="birthCard">
            <h2>Day</h2>
            <input required onChange={(e) => setDay(e.target.value)} value={day} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
            <h2>Month (Number)</h2>
            <input required onChange={(e) => setMonth(e.target.value)} value={month} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
            <h2>Year</h2>
            <input required onChange={(e) => setYear(e.target.value)} value={year} type="number" placeholder="Enter it here"/>
        </div>

        
        <input Style="display:none;" name="entry.405382011" required value={`${day}-${month}-${year}`} type="text"/>
        <input Style="display:none;" name="entry.158974534" required value={today} type="text"/>
        </div>


        <div className="FatherSpouse">
            <div>
                <input Style="margin-bottom: 20px;" type="radio" id="Father" name="entry.1382278419" onChange={(e) => setFatherSpouse(e.target.value)} value="Father"/>
                <label Style="fontSize:15px; color:white; margin-left: 5px; margin-bottom: 20px;" for="Father">Father's Name</label><br/>
                <input Style="margin-bottom: 20px;" type="radio" id="Spouse" name="entry.1382278419" onChange={(e) => setFatherSpouse(e.target.value)} value="Spouse"/>
                <label Style="color:white; margin-left: 5px; margin-bottom: 20px;" for="Spouse">Spouse's Name</label><br/>
            </div>

        <div className="Card"> 
            <h2>Name of the selected person</h2>
            <input required name="entry.348738897" onChange={(e) => setFather(e.target.value)} value={father} type="text" placeholder="Enter it here"/>
        </div>

        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Marital Status</h2>
            <input required name="entry.418814276" onChange={(e) => setMarital(e.target.value)} value={marital} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">Options: Married, Unmarried, Divorce, Widow</span>
        </div>
        </div>

        <div className="Card">
            <h2>Email ID</h2>
            <input required name="entry.250229100" onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter it here"/>
        </div>

        <div className="tooltip">
        <div className="Card">
            <h2>Mobile Number</h2>
            <input required name="entry.1881575692" onChange={(e) => setMobile(e.target.value)} value={mobile} type="text" placeholder="Enter it here"/>
            <span className="tooltiptext">No country code needed</span>
        </div>
        </div>

        <div className="Card">
            <h2>Bank Account No.</h2>
            <input required name="entry.697789802" onChange={(e) => setBankacc(e.target.value)} value={bankacc} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>IFSC Code</h2>
            <input required name="entry.248146665" onChange={(e) => setIfsc(e.target.value)} value={ifsc} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Aadhar Number</h2>
            <input required name="entry.1518913305" onChange={(e) => setAadhar(e.target.value)} value={aadhar} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Pan Card No.</h2>
            <input name="entry.49499674" onChange={(e) => setPan(e.target.value)} value={pan} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Place</h2>
            <input name="entry.1784024502" onChange={(e) => setPlace(e.target.value)} value={place} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Upload Signature as Image (PNG)</h2>
            <input type="file" onChange={handleChange} />
        </div>

        <img Style="align-items:center;justify-content:center;" alt="" src={sign} />


        <div className="buttondiv">
        <button onClick={modifyPdf} type="submit" className="submitbutton">Submit</button>
        </div>


        </form>

      </div>

    </div>
  );
}

export default App;
