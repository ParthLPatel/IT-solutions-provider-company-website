// import { data } from 'jquery';
import React, { useState } from 'react';

const ContactPage = ()=>{

    const [data,setData] = useState({
        fname:'',
        lname:'',
        email:'',
        feedback:'',
    });

    const handleInputChange = (event)=>{
        const {name,value} = event.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })

    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        alert(
            `
            FirstName:${data.fname},
            LastName:${data.lname},
            Email:${data.email},
            Feedback:${data.feedback}
            `
        );
    }
    return(
        <React.Fragment>
        <div className='my-5'>
            <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                
                <form onSubmit={handleFormSubmit}>
                <div className="row">
                <div class="row">
                 <div class="col">
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                 </div>
                 <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                 </div>
                 </div>
                </div>
                <br />
                <div className="form-group">
                    <input type="email" name='email' value={data.email} onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    
                </div>

                <div className="form-group my-3">
                    <textarea className="form-control" name='feedback' onChange={handleInputChange} value={data.feedback} id="exampleInputFBQ" placeholder="Share your Feedback" />
                </div>
                <center>
                <button type="submit" className="btn btn-outline-success">Submit</button>
                </center>
                </form>
                
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}
export default ContactPage;