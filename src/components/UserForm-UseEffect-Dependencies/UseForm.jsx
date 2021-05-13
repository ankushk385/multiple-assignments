import React,{useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import './styles.css'
const UseForm = () => {

let statesIndia = ["punjab","delhi","jammu"];
let statesUsa = ["new York","new Jersy","los Angles"];
let cityIndia = ["mohali","pathankot","manali"];
let cityUsa = ["los santos","vice city","sanandreas"];


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
                                <option value={false} name={false}>...select city</option>
                                {
                                   selectedCurrentState==='punjab' || selectedCurrentState==='delhi' || selectedCurrentState==='jammu' ? (cityIndia.map((key)=>(
                                    <option name={key} value={key} >{key}</option>
                                ))): (cityUsa.map((key)=>(
                                    <option name={key} value={key} >{key}</option>
                                )))
                                }
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
