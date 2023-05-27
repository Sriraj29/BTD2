import React from 'react'
// import Download from './Download';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const Report = (props) => {
  // const{fname, lname, age, gender, mriImage}=props;
  console.log(props);
  // useEffect(() => {
  
  // }, [props])
  const exportPDF=()=>{
    const input=document.getElementById("pdfdata")
    html2canvas(input,{logging:true, letterRendering:1, useCORS:true}).then(canvas=>{
    const imgWidth=210;
    const imgHeight=canvas.height*imgWidth/canvas.width;
    const imgData=canvas.toDataURL("img/png");
    const pdf=new jsPDF('p','mm','a4');
    pdf.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
    pdf.save("report.pdf")
    })
    
  }
  
  return (
    <div className='report'>
      <div className='pdf-data' id="pdfdata">
        <p>first name:{props.firstname}</p>
        <p>last name:{props.lastname}</p>
        <p>gender:{props.gender}</p>
        <p>age:{props.age}</p>
        {<img src={props.mriImage} alt="Mri scan"/>}
        <br></br>
        <br></br>
      </div>
      <div>
        <button onClick={()=>exportPDF()}>Download PDF</button>
      </div>
    </div>

    

  )
}

export default Report