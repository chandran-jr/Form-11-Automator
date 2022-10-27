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
  const [provident,setProvident] = useState("");
  const [pension,setPension] = useState("");
  const [uan,setUan] = useState("");
  const [scheme,setScheme] = useState("");
  const [ppo,setPpo] = useState("");
  const [international,setInternational] = useState("");
  const [country,setCountry] = useState("");
  const [passport,setPassport] = useState("");
  const [sign,setSign] = useState();

  const [day,setDay] = useState(""); //for birthday
  const [month,setMonth] = useState(""); //for birthday
  const [year,setYear] = useState(""); //for birthday

  const [exitDay,setExitDay] = useState(""); //job exit Day
  const [exitMonth,setExitMonth] = useState(""); //job exit Day
  const [exitYear,setExitYear] = useState(""); //job exit Day

  const [fromDay,setFromDay] = useState(""); //passport validity Day
  const [fromMonth,setFromMonth] = useState(""); //passport validity Day
  const [fromYear,setFromYear] = useState(""); //passport validity Day

  const [toDay,setToDay] = useState(""); //passport validity Day
  const [toMonth,setToMonth] = useState(""); //passport validity Day
  const [toYear,setToYear] = useState(""); //passport validity Day

  const [ap,setAp] = useState(""); //prev pf acc number
  const [hyd,setHyd] = useState(""); //prev pf acc number
  const[estCode,setEstCode] = useState(""); //prev pf acc number
  const [extn,setExtn] = useState(""); //prev pf acc number
  const [pfno,setPfno] = useState(""); //prev pf acc number

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

        firstPage.drawText(name, {
          x: 390,
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
            x: 390,
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
            x: 390,
            y: 687,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(marital, {
            x: 390,
            y: 638.5,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(email, {
            x: 390,
            y: 622.5,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(mobile, {
            x: 390,
            y: 609,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          const bankifsc = `${bankacc}, ${ifsc}`;

          firstPage.drawText(bankifsc, {
            x: 390,
            y: 407,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })

          firstPage.drawText(aadhar, {
            x: 390,
            y: 388,
            size: 10,
            font: helveticaFont,
            color: rgb(0, 0, 0),
          })
      
          firstPage.drawText(pan, {
            x: 390,
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

          if(provident === "Yes") {
            const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
            const pngImage = await pdfDoc.embedPng(pngImageBytes)
            const pngDims = pngImage.scale(0.04)

            firstPage.drawImage(pngImage, {
                x: 442,
                y: 596,
                width: pngDims.width,
                height: pngDims.height
              })
          }
          else {
            const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
            const pngImage = await pdfDoc.embedPng(pngImageBytes)
            const pngDims = pngImage.scale(0.04)

            firstPage.drawImage(pngImage, {
                x: 520,
                y: 596,
                width: pngDims.width,
                height: pngDims.height
              })
          }

          if(pension === "Yes") {
            const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
            const pngImage = await pdfDoc.embedPng(pngImageBytes)
            const pngDims = pngImage.scale(0.04)

            firstPage.drawImage(pngImage, {
                x: 442,
                y: 583,
                width: pngDims.width,
                height: pngDims.height
              })
          }
          else {
            const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
            const pngImage = await pdfDoc.embedPng(pngImageBytes)
            const pngDims = pngImage.scale(0.04)

            firstPage.drawImage(pngImage, {
                x: 520,
                y: 583,
                width: pngDims.width,
                height: pngDims.height
              })
          }

          const signImageBytes = await fetch(signImg).then((res) => res.arrayBuffer())
          const signImage = await pdfDoc.embedPng(signImageBytes)
          const signDims = signImage.scale(0.16)

          firstPage.drawImage(signImage, {
              x: 480,
              y: 260,
              width: signDims.width,
              height: signDims.height
            })
       

            firstPage.drawText(uan, {
              x: 390,
              y: 554,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(exitDay, {
              x: 405,
              y: 520,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })
  
            firstPage.drawText(exitMonth, {
              x: 470,
              y: 520,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })
  
            firstPage.drawText(exitYear, {
              x: 535,
              y: 520,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(scheme, {
              x: 390,
              y: 503,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(ppo, {
              x: 390,
              y: 487,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            if(international === "Yes") {
              const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
              const pngImage = await pdfDoc.embedPng(pngImageBytes)
              const pngDims = pngImage.scale(0.04)
  
              firstPage.drawImage(pngImage, {
                  x: 442,
                  y: 474,
                  width: pngDims.width,
                  height: pngDims.height
                })
            }
            else {
              const pngImageBytes = await fetch(checkMark).then((res) => res.arrayBuffer())
              const pngImage = await pdfDoc.embedPng(pngImageBytes)
              const pngDims = pngImage.scale(0.04)
  
              firstPage.drawImage(pngImage, {
                  x: 520,
                  y: 474,
                  width: pngDims.width,
                  height: pngDims.height
                })
            }


            firstPage.drawText(country, {
              x: 390,
              y: 463,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })
            
            firstPage.drawText(passport, {
              x: 390,
              y: 450,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(`${fromDay}/${fromMonth}/${fromYear} to ${toDay}/${toMonth}/${toYear}`, {
              x: 390,
              y: 439,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(ap, {
              x: 372,
              y: 537,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(hyd, {
              x: 396,
              y: 537,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(estCode, {
              x: 436,
              y: 537,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(extn, {
              x: 492,
              y: 537,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

            firstPage.drawText(pfno, {
              x: 523,
              y: 537,
              size: 10,
              font: helveticaFont,
              color: rgb(0, 0, 0),
            })

    const pdfBytes = await pdfDoc.save();

    // Downloading PDF automatically
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
            <h2>Day (DD)</h2>
            <input required onChange={(e) => setDay(e.target.value)} value={day} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
            <h2>Month (MM)</h2>
            <input required onChange={(e) => setMonth(e.target.value)} value={month} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
            <h2>Year (YYYY)</h2>
            <input required onChange={(e) => setYear(e.target.value)} value={year} type="number" placeholder="Enter it here"/>
        </div>

        
        <input Style="display:none;" name="entry.405382011" required value={`${day}-${month}-${year}`} type="text"/>
        <input Style="display:none;" name="entry.158974534" required value={today} type="text"/>
        </div>


        <div className="FatherSpouse">

          <h2 Style="margin-bottom:15px;color:white;">Name of Father / Spouse</h2>

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
            <h2>Bank Account Number</h2>
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
            <h2>Pan Card Number</h2>
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

        <div className="FatherSpouse">
        <h2 Style="margin-bottom:15px;color:white;">Whether earlier a member of Employees ‘Provident Fund Scheme 1952</h2>

        <div>
          <input Style="margin-bottom: 20px;" type="radio" id="Yes" name="entry.2018860065" onChange={(e) => setProvident(e.target.value)} value="Yes"/>
          <label Style="fontSize:15px; color:white; margin-left: 5px; margin-bottom: 20px;" for="No">Yes</label><br/>
          <input Style="margin-bottom: 20px;" type="radio" id="No" name="entry.2018860065" onChange={(e) => setProvident(e.target.value)} value="No"/>
          <label Style="color:white; margin-left: 5px; margin-bottom: 20px;" for="No">No</label><br/>
        </div>

        </div>

        <div className="FatherSpouse">
        <h2 Style="margin-bottom:15px;color:white;">Whether earlier a member of Employees ‘Pension Scheme ,1995 </h2>

        <div>
          <input Style="margin-bottom: 20px;" type="radio" id="Yes" name="entry.1433124112" onChange={(e) => setPension(e.target.value)} value="Yes"/>
          <label Style="fontSize:15px; color:white; margin-left: 5px; margin-bottom: 20px;" for="No">Yes</label><br/>
          <input Style="margin-bottom: 20px;" type="radio" id="No" name="entry.1433124112" onChange={(e) => setPension(e.target.value)} value="No"/>
          <label Style="color:white; margin-left: 5px; margin-bottom: 20px;" for="No">No</label><br/>
        </div>

        </div>

        <h2 Style="margin-bottom:15px;margin-top:20px;color:white;">If any of the above 2 answers are Yes, it is mandatory to fill up all the remaining questions</h2>

        <div className="Card">
            <h2>Universal Account Number</h2>
            <input name="entry.1564645040" onChange={(e) => setUan(e.target.value)} value={uan} type="text" placeholder="Enter it here"/>
        </div>

        <h2 Style="margin-left:34%;margin-bottom:15px;margin-top:20px;color:white;">Previous PF account number</h2>

      <div className="birthday">

        <div className="birthCard">
          <h2>AP</h2>
          <input required onChange={(e) => setAp(e.target.value)} value={ap} type="text" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
           <h2>HYD</h2>
           <input required onChange={(e) => setHyd(e.target.value)} value={hyd} type="text" placeholder="Enter it here"/>
        </div>

      <div className="birthCard">
          <h2>EST.CODE</h2>
          <input required onChange={(e) => setEstCode(e.target.value)} value={estCode} type="text" placeholder="Enter it here"/>
      </div>

      </div>

      <div className="birthday">

      <div className="birthCard">
          <h2>EXTN</h2>
          <input required onChange={(e) => setExtn(e.target.value)} value={extn} type="text" placeholder="Enter it here"/>
      </div>

      <div className="birthCard">
          <h2>PF NUMBER</h2>
          <input required onChange={(e) => setPfno(e.target.value)} value={pfno} type="text" placeholder="Enter it here"/>
      </div>

      <input Style="display:none;" name="entry.240466885" required value={`${ap} ${hyd} ${estCode} ${extn} ${pfno}`} type="text"/>
      </div>

        <h2 Style="margin-left:27%;margin-bottom:15px;margin-top:20px;color:white;">Date of exit from previous employment </h2>

        <div className="birthday">

        <div className="birthCard">
            <h2>Day (DD)</h2>
            <input required onChange={(e) => setExitDay(e.target.value)} value={exitDay} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
            <h2>Month (MM)</h2>
            <input required onChange={(e) => setExitMonth(e.target.value)} value={exitMonth} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
            <h2>Year (YYYY)</h2>
            <input required onChange={(e) => setExitYear(e.target.value)} value={exitYear} type="number" placeholder="Enter it here"/>
        </div>

        
        <input Style="display:none;" name="entry.318591230" required value={`${exitDay}-${exitMonth}-${exitYear}`} type="text"/>
        </div>

        <div className="Card">
            <h2>Scheme Certificate Number (if Issued )</h2>
            <input name="entry.2085523964" onChange={(e) => setScheme(e.target.value)} value={scheme} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Pension Payment Order Number (if Issued)</h2>
            <input name="entry.1663452673" onChange={(e) => setPpo(e.target.value)} value={ppo} type="text" placeholder="Enter it here"/>
        </div>

        <div className="FatherSpouse">
        <h2 Style="margin-bottom:15px;color:white;">International Worker</h2>

        <div>
          <input Style="margin-bottom: 20px;" type="radio" id="Yes" name="entry.1509082637" onChange={(e) => setInternational(e.target.value)} value="Yes"/>
          <label Style="fontSize:15px; color:white; margin-left: 5px; margin-bottom: 20px;" for="No">Yes</label><br/>
          <input Style="margin-bottom: 20px;" type="radio" id="No" name="entry.1509082637" onChange={(e) => setInternational(e.target.value)} value="No"/>
          <label Style="color:white; margin-left: 5px; margin-bottom: 20px;" for="No">No</label><br/>
        </div>

        </div>

        <div className="Card">
            <h2>If yes, State Country Of Origin</h2>
            <input name="entry.1673241747" onChange={(e) => setCountry(e.target.value)} value={country} type="text" placeholder="Enter it here"/>
        </div>

        <div className="Card">
            <h2>Passport Number</h2>
            <input name="entry.183067661" onChange={(e) => setPassport(e.target.value)} value={passport} type="text" placeholder="Enter it here"/>
        </div>


        <h2 Style="margin-left:38%;margin-bottom:15px;margin-top:20px;color:white;">Validity of Passport</h2>

        <h2 Style="margin-left:46%;margin-bottom:15px;margin-top:20px;color:white;">From</h2>

        <div className="birthday">

        <div className="birthCard">
          <h2>Day (DD)</h2>
          <input required onChange={(e) => setFromDay(e.target.value)} value={fromDay} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
           <h2>Month (MM)</h2>
           <input required onChange={(e) => setFromMonth(e.target.value)} value={fromMonth} type="number" placeholder="Enter it here"/>
        </div>

      <div className="birthCard">
          <h2>Year (YYYY)</h2>
          <input required onChange={(e) => setFromYear(e.target.value)} value={fromYear} type="number" placeholder="Enter it here"/>
      </div>


      <input Style="display:none;" name="entry.525328653" required value={`${fromDay}-${fromMonth}-${fromYear}`} type="text"/>
      </div>

      <h2 Style="margin-left:48%;margin-bottom:15px;margin-top:20px;color:white;">To</h2>

      <div className="birthday">

        <div className="birthCard">
          <h2>Day (DD)</h2>
          <input required onChange={(e) => setToDay(e.target.value)} value={toDay} type="number" placeholder="Enter it here"/>
        </div>

        <div className="birthCard">
           <h2>Month (MM)</h2>
           <input required onChange={(e) => setToMonth(e.target.value)} value={toMonth} type="number" placeholder="Enter it here"/>
        </div>

      <div className="birthCard">
          <h2>Year (YYYY)</h2>
          <input required onChange={(e) => setToYear(e.target.value)} value={toYear} type="number" placeholder="Enter it here"/>
      </div>


      <input Style="display:none;" name="entry.1995738681" required value={`${toDay}-${toMonth}-${toYear}`} type="text"/>
      </div>


        <div className="buttondiv">
        <button onClick={modifyPdf} type="submit" className="submitbutton">Submit</button>
        </div>


        </form>

      </div>

    </div>
  );
}

export default App;
