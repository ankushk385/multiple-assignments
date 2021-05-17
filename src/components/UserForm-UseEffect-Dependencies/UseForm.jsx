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

 

    const [countryOptions, setCountryOptions] = useState([])
    const [stateOptions, setStateOptions] = useState([])
    const [cityOptions, setCityOptions] = useState([])



    const { register, handleSubmit, watch } = useForm();

    const country = watch("country", false)
    const state = watch("state", false)
    const city = watch("city", false)



 
    useEffect(() => {
        
        setCountryOptions(list.map(val => val.country));
    }, [])

    
    useEffect(() => {
        
        const countryFromList = list.find(val => val.country === country);
        if(!countryFromList) {
            return
        }
     
        const states = countryFromList.states.map(val => val.name)
        setStateOptions(states)

    }, [country])

    useEffect(() => {
        list.forEach(val => {
           
            const states = val.states;
            const targetState = states.find(stateVal => stateVal.name === state);
            if (targetState) {
                
                setCityOptions(targetState.cities)
            }
        })
    }, [state])



    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="country-select">
                    <select  {...register('country')} id="country" name="country" >
                        <option >...select country...</option>
                        {
                         
                            countryOptions.map((value) => (
                                <option value={value}>{value}</option>
                            ))

                        }
                    </select>
                </div>

                {country && (
                    <div className="state-select">
                        <select {...register('state')} id="state" name="state">
                            <option name={false} value={false}>...select state</option>
                            {
                            stateOptions.map((value) => (
                                <option value={value}>{value}</option>
                            ))

                        }

                        </select>
                    </div>
                )
                }
                {state && (
                    <div className="city-select">
                        <select {...register('city')} id="city" name="city">
                            <option name={false} value={false}>...select city</option>
                            {
                            cityOptions.map((value) => (
                                <option value={value}>{value}</option>
                            ))

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
