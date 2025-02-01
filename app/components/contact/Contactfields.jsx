"use client"
import {useState } from 'react'
import FormInput from './FormInput'

const Contactfields = () => {
   const [send , setSend] = useState(false);
   const [success , setSuccess] = useState('');
   const [values, setValues] = useState({
      yourname: "",
      email: "",
      subject: "",
      message: "",
    });
  
    const inputs = [
      {
        id: 1,
        name: "yourname",
        type: "text",
        placeholder: "Your Name",
        errorMessage:
          "Your Name should be 3-16 characters and shouldn't include any special character!",
        label: "Your Name",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "subject",
        type: "text",
        placeholder: "Subject",
        label: "Subject",
      },
      {
        id: 4,
        name: "message",
        type: "text",
        placeholder: "Message",
        errorMessage:
          "Message should be min 5 characters!",
        label: "Message",
        pattern: "^.{5,200}$",
        required: true,
      }
    ];
  
   const handleSubmit = async (e) => {
      e.preventDefault();
      const formdata = new FormData(e.target);
      console.log(Object.fromEntries(formdata));
      setSend(true);
      setSuccess('The data has been sent successfully.');

      // try {
      //    const response = await fetch('your_api_endpoint_url', {
      //       method: 'POST',
      //       body: formdata,
      //    });

      //    if (!response.ok) {
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //    }

      //    const responseData = await response.json();
      //    console.log('API response:', responseData);
      // } catch (error) {
      //    console.error('API error:', error);
      // }

    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    
  return (
     <form onSubmit={handleSubmit}>
        <div className="row g-3">
           {inputs.map((inputdata) => (
              <div className={(inputdata.id == 1 || inputdata.id == 2 ? "col-md-6" : "col-12")} key={inputdata.id}>
                 <FormInput
                    {...inputdata}
                    value={values[inputdata.name]}
                    onChange={onChange}
                 />
              </div>
           ))}
         
           <div className="col-12">
              <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
              <p className='mt-3 text-success text-capitalize'><strong>{success}</strong></p>
           </div>
        </div>
     </form>
  )
}

export default Contactfields