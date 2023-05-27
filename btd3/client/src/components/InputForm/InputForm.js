import React,{ useState } from "react";
// import "./PatientDetails.css";
// import Button from "@mui/material/Button";
import Report from "../Report/Report"
import "./InputForm.css";

function InputForm() {
  // const[inputData, setInputData]=useState({    
  //   fname:"",
  //   lname:"",
  //   age:"",
  //   gender:"",
  //   mriImage:"",
  // });

  const[fname, setFname]=useState("");
  const[lname, setLname]=useState("");
  const[gender, setGender]=useState("");
  const[age, setAge]=useState("");
  const[image, setImage]=useState("");
  const[submit, setSubmit]=useState(false);
  const [errors, setErrors] = useState({});



  // const handleInputFname=(e)=>{
  //   debugger;
  //   const {firstname}=(e.target.value);
  //   setInputData(inputData.fname,firstname
  //   );
  // };

  // const handleInputLname=(e)=>{
  //   const {lastname}=(e.target.value);
  //   setInputData(...inputData.lname,lastname
  //   );
  // };

  // const handleInputAge=(e)=>{
  //   debugger;
  //   const {ageVal}=(e.target);
  //   setInputData((prev)=>({...prev,age:ageVal,
  //   }));
  // };

  // const handleRadioChange=(e)=>{
  //   const {value}=(e.target);
  //   setInputData((prev)=>({...prev,gender:value,
  //   }));
  // };

  // const handlePhotoChange=(e)=>{
  //   setInputData((prev)=>({...prev,mriImage: URL.createObjectURL(e.target.files[0]),
  //   }));
  // };

  const handleFname=(e)=>{
    setFname(e.target.value);
  }

  const handleLname=(e)=>{
    setLname(e.target.value);
  }

  const handleRadioChange=(e)=>{
    setGender(e.target.value);
  }

  const handleAge=(e)=>{
    setAge(parseInt(e.target.value));
  }
// console.log("image");
  const handleImage=(e)=>{
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(validateForm()){
      // props.onSubmit({firstname:fname},{lastname:lname},{gender:gender},{age:age},{mriImage:selectImage});
      // console.log("submit");
      setSubmit(true);
      
    } 
      
    // console.log(inputData);   

  };

  const validateForm=()=>{
    const errors={};
    let isValid=true;

    if(!fname.trim()){
      errors.fname="First name is required"
      isValid=false;
    }

    if(!lname.trim()){
      errors.lname="Last name is required"
      isValid=false;
    }
    debugger;

    if (age==="") {
      debugger;
      errors.age = "Age is required";
      isValid = false;
    // } else if (isNaN(age)) {
    //   errors.age = "Age must be a number";
    //   isValid = false;
    } else if (parseInt(age) <= 0) {
      errors.age = "Age must be a positive number";
      isValid=false;
    }

    if (!gender) {
      errors.gender = "Gender is required";
      isValid = false;
    }

    if (!image) {
      errors.image = "Image is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;

    }


  

  // if(submit){
  //   return<Report fname={fname} lname={lname} age={age} gender={gender} image={selectImage}/>
  // }

  return (
   <>
    {submit===true?<Report firstname={fname}lastname={lname} gender={gender} age={age} mriImage={image}/>:

    <form className="card" onSubmit={handleSubmit}>
      <h1 className="heading">Patient Details</h1>

      <label className="label1"> First Name: </label>
      <input type="text" name="fname" value={fname} onChange={handleFname}/>
      <br></br>
      {errors.fname && <span className="error">{errors.fname}</span>}
      <br></br>

      <label className="label2"> Last Name: </label>
      <input type="text" name="lname" value={lname} onChange={handleLname}/>
      <br></br>
      {errors.lname && <span className="error">{errors.lname}</span>}
      <br></br>

      <label>
        Age:</label><input
          type="number"
          name="age"
          value={age}
          onChange={handleAge}
        />
      <br></br>
      {errors.age && <span className="error">{errors.age}</span>}
      
      <br></br>

      <label className="gender"> Gender: 
      <label>
      <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={handleRadioChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={handleRadioChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Others"
            checked={gender === "Others"}
            onChange={handleRadioChange}
          />
          Others
        </label>
        {errors.gender && <span className="error">{errors.gender}</span>}
        </label>              
      <br></br>

      <div className="file">
      <label>Select an image:</label>
      <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleImage}/>
      </div>
      <br></br>
      {errors.image && <span className="error">{errors.image}</span>}
      <br></br>
      <br></br>
      <button className="gen-rep" type="submit" >GENERATE REPORT</button>

      <br></br>
    </form>
}
    </>
  );
}

export default InputForm;
