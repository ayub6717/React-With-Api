import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function DataFetching() {
    const url = 'https://backend.amaderservice.com/api/gettrending'

    const [data, setData] = useState([])
  
    useEffect(() => {
      axios.get(url).then(json => setData(json.data))
    }, [])
  
    const renderTable = () => {
      return data.map(user => {
        return (
          <tr>
            <td> <img src={user.image} alt="" style={{ borderRadius: "10px", width:'100px', boxShadow: `1px 3px 1px #33669A` }} /></td>
            <td>{user.service_type_icon}</td>
            <td>{user.updated_at}</td> 
            <td>{user.main_catagory_id}</td> 
          </tr>
        )
      })
    }
    return (
        <div>
          <h1 id="title">API Table</h1>
          <table id="users"> 
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      );
}
 
export default DataFetching;