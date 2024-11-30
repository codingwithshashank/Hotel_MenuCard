import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import MyNavbar from './MyNavbar';
import Card from "react-bootstrap/Card"; 
import axios from 'axios';

export default function MyFoodgroup() {
  const [data, setData] = useState([]);
  const [fd, setFg] = useState(""); // Initialize as empty string
  const [fid, setId] = useState(""); // Initialize as empty string

  useEffect(() => {
    fetchFoodGroups(); // Call the function to fetch food groups
  }, []);

  function getFid(id) {
    setId(id);
    del(id); // Call del with the passed id directly
  }

  function del(fid) {
    axios.delete("http://192.168.29.94:3000/delfoodgroup", {
      data: { "id": fid }
    })
      .then(response => {
        console.log(response.data);
        alert(response.data.message);
        fetchFoodGroups(); // Refresh the list after deletion
      })
      .catch(error => {
        console.error("There was an error deleting the food group!", error);
      });
  }

  function fetchFoodGroups() {
    axios.get("http://192.168.29.94:3000/food_group")
      .then(response => {
        console.log(response.data.foodgroup);
        let l = response.data.foodgroup;
        setData(l); // Store fetched data in state
      })
      .catch(error => {
        console.error("There was an error fetching the food groups!", error);
      });
  }

  const getName = (e) => {
    setFg(e.target.value); // Set the food group name
  }

  function add() {
    if (fd.trim() === "") { // Check if input is empty
      alert("Please enter a valid food group name.");
      return;
    }
    
    axios.put("http://192.168.29.94:3000/addfoodgroup", {  //zo method[put,add...] api me use hua wo use karna
      "group_name": fd // Use the food group name
    })
      .then(response => {
        console.log(response.data);
        fetchFoodGroups(); // Refresh the list after adding
        alert("Food group created successfully!");
        setFg(""); // Clear input after adding
      })
      .catch(error => {
        console.error("There was an error adding the food group!", error);
      });
  }

  return (
    <>
      <MyNavbar />
      <Card>
        <Card.Header as="h1">Food Groups</Card.Header>
        <Card.Body>
          <input 
            type='text' 
            value={fd} // Bind value to state
            onChange={getName} 
            placeholder="Enter food group name" 
          />
          <Button variant="success" onClick={add}>Add Group</Button>
          <Table>
            <thead> 
              <tr>
                <th>Gid</th>
                <th>Group Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val) => (
                <tr key={val.gid}>
                  <td>{val.gid}</td>
                  <td>{val.group_name}</td>
                  <td>
                    <Button variant="danger" onClick={() => getFid(val.gid)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
