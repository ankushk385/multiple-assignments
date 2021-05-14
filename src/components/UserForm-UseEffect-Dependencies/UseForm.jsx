import React,{useEffect,useState} from 'react'
import {useForm} from 'react-hook-form';
import './styles.css'
const UseForm = () => {

    const list = [
        {
            country: 'India', states: [
                {
                    name: 'Punjab', cities: [
                        'Mohali', 'Jalandhar'
                    ]
                },
                {
                    name: 'Delhi', cities: [
                        'lajpatnagar', 'delhi-6'
                    ]
                }
            ]
        },
        {
            country: 'Usa', states: [
                {
                    name: 'Chicago', cities: [
                        'fargo', 'dallas'
                    ]
                },
                {
                    name: 'Texas', cities: [
                        'austin', 'housten'
                    ]
                }
            ]
        }
    ]

    const getCountry = (data)=>{
        let arr = []
       data.map((value)=>(
        arr.push(value.country)
       ));
       setCountryOptions(arr)
    }
  

const [countryOptions, setCountryOptions] = useState([])
const [stateOptions, setStateOptions] = useState([])
const [cityOptions, setCityOptions] = useState([])

const [country, setCountry] = useState()
const [state, setState] = useState()
const [city, setCity] = useState()

const {register,handleSubmit,watch} = useForm();

const selectedCurrentCountry = watch("country",false)
const selectedCurrentState = watch("state",false)
const selectedCurrentCity = watch("city",false)



useEffect(()=>{
    getCountry(list)
setCountry(selectedCurrentCountry);
}
,[country])

const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  
    return (
        <div  className="form-container">
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="country-select">
           <select  {...register('country')}  id="country" name="country" >
           <option >...select country...</option>
               {
                   countryOptions.map((value)=>(
                       <option value={value.country}>{value.country}</option>
                   ))
               
               }
           </select>
           </div>
           
        {selectedCurrentCountry && (
            <div className="state-select">
                 <select {...register('state')} id="state" name="state">
                 <option name={false} value={false}>...select state</option>
                   
                    
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
