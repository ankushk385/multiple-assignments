import axios from 'axios';

export const GetData = async (END_POINT) => {
    let response ;
    
   
    let API_BASE = "https://disease.sh/v3/covid-19/";
    
      response = await axios.get(API_BASE + END_POINT);
       
    
  
    return { data : response.data,message: "data arrived" };
  };