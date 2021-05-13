import React from 'react';
import {Bar} from 'react-chartjs-2'
import {useState,useEffect} from 'react';
import json from './MOCK_DATA.json'

const get50 = (data)=>{
    return data.slice(0,100);
    
}

    

const Chartjs = () => {
    const [age, setAge] = useState([])
    const [salary, setSalary] = useState([])
    const [jsonData, setJsonData] = useState(get50(json))
 

    useEffect(() => {
       setData()
       
    }, [])

    const setData = ()=>{
        const empsalary = jsonData.map((item)=>{
            return item.salary
        })
        setSalary(empsalary)
        const empage = jsonData.map((item)=>{
            return item.age
        })
        setAge(empage)

     
       
    }
   

   const data = { labels: age,
    datasets: [{
        label: 'Total salary',
        data: salary,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }
    ]
   
}



    return (
        <div>
           <Bar data={data} width={1000} height={600} 
           />
    
          
        </div>
    )
}

export default Chartjs
