import React,{useState,useEffect} from 'react'
// import { GetData} from '../../common/util';
import ReactApexChart from 'react-apexcharts'
import Axios from 'axios';

const ApexChart = () => {
  const [data, setData] = useState();
  const [dates, setDates] = useState([])
  const [cases, setCases] = useState([])
  const [recoveredCases, setRecoveredCases] = useState([])

  const getData = async ()=>{
      const Url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=30';
      Axios.get(Url).then((res)=> {
        const data = res.data; 
        setData(data)
       } );  

  }
  useEffect(() => {
      getData();
     

  }, [])

 const getValues = ()=>{
   setDates(Object.keys(data?.cases));
   setCases(Object.values(data?.cases));
   setRecoveredCases(Object.values(data?.recovered));

 }

  const series =  [{
      name: 'Total cases',
      data: cases 
    }, {
      name: 'Total recovered',
      data: recoveredCases
    }];
    const options = {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: dates
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    };
  return (
      <div className="chart-container">
      <h2>using live api data display total corona cases and recover cases in the world on apex chart </h2>
           <ReactApexChart options={options} series={series} type="area" height={350} />
           <button onClick={getValues}>click</button>
</div>


  )
}
export default ApexChart;