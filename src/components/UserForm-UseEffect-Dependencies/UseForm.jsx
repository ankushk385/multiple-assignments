import React,{useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import './styles.css'
const UseForm = () => {

let statesIndia = ["punjab","delhi","jammu"];
let statesUsa = ["new york","new jersey"];
let citiesJammu = ["gandhinagar","lal chownk"];
let citiesPunjab = ["mohali","pathankot"]
let citiesDelhi = ["new delhi","lajpathnagar"]
let citiesnewYork = ["los santos","vice city","sanandreas"]
let citiesnewJersey = ["newark","hampshire"]

const {register,handleSubmit,watch} = useForm();

const selectedCurrentCountry = watch("country",false)
const selectedCurrentState = watch("state",false)
const selectedCurrentCity = watch("city",false)


const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

console.log(selectedCurrentCountry);
console.log(selectedCurrentState);
console.log(selectedCurrentCity);

    return (
        <div  className="form-container">
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="country-select">
           <select  {...register('country')}  id="country" name="country" >
           <option >...select country...</option>
               <option value="india" name="india">INDIA</option>
               <option value="usa"  name="usa">USA</option>
           </select>
           </div>
           
        {selectedCurrentCountry && (
            <div className="state-select">
                 <select {...register('state')} id="state" name="state">
                 <option name={false} value={false}>...select state</option>
                    {
                        selectedCurrentCountry==='india' ? (statesIndia.map((key)=>(
                            <option name={key} value={key} >{key}</option>
                        ))) : (statesUsa.map((key)=>(
                            <option name={key} value={key} >{key}</option>
                        )))
                        
                    }
                    
                </select>
            </div>
        ) 
    }
    
    {selectedCurrentState && (
                        <div className="city-select">
                            <select {...register('city')} name="city">
                               
                                {(() => {

switch (selectedCurrentState) {

   case 'punjab':

       return (

        citiesPunjab.map((key)=>(
            <option name={key} value={key} >{key}</option>
            ))

       )

   case 'delhi':

       return (

        citiesDelhi.map((key)=>(
            <option name={key} value={key} >{key}</option>
            ))

       )

       case 'jammu':

        return (
 
            citiesJammu.map((key)=>(
                <option name={key} value={key} >{key}</option>
                ))
 
        )
        case 'new york':

        return (
 
            citiesnewYork.map((key)=>(
                <option name={key} value={key} >{key}</option>
                ))
 
        )
        case 'new jersey':

        return (
 
            citiesnewJersey.map((key)=>(
                <option name={key} value={key} >{key}</option>
                ))
 
        )

   default:

       return (

        <option value={false} name={false}>...select city</option>

       )
}
})()}
                  
                            </select>
                        </div>
                            
                        )
                    }
        <button type="submit">submit</button>
        </form>
       
        </div>
    )
}

export default UseForm
