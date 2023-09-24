import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './form.css'
const Form=()=>{
    const [user, setUser]=useState(
        {
            patient_name: '', Age: '', Gender: '', Type_addiction: '', Dura_addiction: '', Location: ''
        }
    )
    let name,value
    const data=(e)=>{
        name= e.target.name;
        value=e.target.value;
        setUser({...user, [name]:value});
        
    }
    const getdata=async(e)=>{
        const {  patient_name, Age, Gender, Type_addiction, Dura_addiction, Location}=user;
        e.preventDefault();
        const options={
 
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                patient_name, Age, Gender, Type_addiction, Dura_addiction, Location
            })
        }
const res = await fetch('https://input-3cb2b-default-rtdb.firebaseio.com/UserData.json',
options
)
console.log (res)
if(res){
    alert("message sent")
}
else{
    alert("error occured")
}
    }
    return (
        <>
        <NavBar/>
        <h1 className='header'>
            Enter Your Kendra Data
        </h1>
        <div className='form'>
            <div className='container'>
                <form method='POST'>          
                      <input type='text' name='patient_name' placeholder='patient_name' aria-autocomplete='off' value={user.patient_name} required onChange={data}/>
                    <input type='number' name='Age' placeholder='Age' aria-autocomplete='off' value={user.age} required onChange={data}/>
                   
                  

          <select id="Gender" name='Gender' onChange={data} value={user.Gender}>
          <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
           
          </select>
          <select id="State" name='State' onChange={data} value={user.State}>
          <option value="">State</option>
            <option value="Bihar">Bihar</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Odisha">Odisha</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Telangana">Telangana</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Kerala">Kerala</option>
            <option value="Delhi">Delhi</option>
            <option value="Punjab">Punjab</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Meghalaya">Meghalaya</option>

            <option value="Tripura">Tripura</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Manipur">Manipur</option>
           
           
          </select>
                   
                   
                   
                   
                     <select id="Type_addiction" name='Type_addiction' onChange={data} value={user.Type_addiction}>
                     <option value="">Type of addiction</option>
            <option value="Heroin">Heroin</option>
            <option value="Cocaine">Cocaine</option>
            <option value="Alcohol">Alcohol</option>
            <option value="Prescription Drugs">Prescription Drugs</option>
            <option value="Tobacco">Tobacco</option>
            <option value="Methamphetamine">Methamphetamine</option>

           
          </select>
                   
                   
                   
                   
                    <input type='Dura_addiction' name='Dura_addiction' placeholder='Dura_addiction' aria-autocomplete='off' value={user.Dura_addiction} required onChange={data}/>
                    <input type='Location' name='Location' placeholder='Location' aria-autocomplete='off' value={user.Location} required onChange={data}/>
                   <button onClick={getdata}> Submit</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Form