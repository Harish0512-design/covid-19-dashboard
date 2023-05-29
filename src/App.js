import { useEffect, useState } from "react";

function App() {
const [data,setData] = useState([]);
useEffect(()=>{
  fetch('https://data.covid19india.org/data.json').then(
    res=>res.json()
  ).then(jsondata=>setData(jsondata.statewise))
},[])
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className="text-center p-3">Covid-19 Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
        <table className="table mt-2">
          <thead className="thead bg-info text-light">
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recoverd</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdate</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item=>{
              return(
                <tr>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default App;
