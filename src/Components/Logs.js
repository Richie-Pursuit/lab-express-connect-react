import React from 'react';
import { useState , useEffect} from "react";
import Log from "./Log";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

const Logs = () => {
    const [logs , setLogs] = useState([])

   useEffect(()=> {
    axios
    .get(`${API}/logs`)
    .then((res) => setLogs(res.data))
    .catch(err => console.log(err))
    }, [])

 return(
    <div >
    <section>
      <table>
        <thead>
          <tr>
            <th></th>
            
          </tr>
        </thead>
        <tbody className='table'>
          {logs.map((log, index) => {
            return <Log key={index} log={log} index={index} />;
          })}
        </tbody>
      </table>
    </section>
  </div>
 )
}

export default Logs;