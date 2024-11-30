import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import MyNavbar from './MyNavbar';
import Card from "react-bootstrap/Card"; // Added Card import
import axios from 'axios';



export default function MyMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fg();
  }, []);

  function fg() {
    axios.get("http://192.168.29.94:3000/menu")
      .then(response => {
        console.log(response.data.menu)
        let l = response.data.menu;
        setData(l);
      })
      .catch(error => {
        console.error("There was an error fetching the menu data!", error);
      });
  }

  return (
    <>
      <MyNavbar /> {/* Corrected from Navb to MyNavbar */}
      <Card>
        <Card.Header as="h1">MY MENU</Card.Header>
        <Card.Body>
          <Table>
            <thead> 
              <tr>
                <th>mid</th>
                <th>menu_name</th>
                <th>menu_price</th>
                <th>gid</th>
                <th>date</th>
                <th>qid</th>
              </tr>
            </thead>
            <tbody>
            {data.map((val) => {
  return (
    <tr>
                <td>{val.mid}</td>
                <td>{val.menu_name}</td>
                <td>{val.menu_price}</td>
                <td>{val.gid}</td>
                <td>{val.date}</td>
                <td>{val.qid}</td>
    </tr>
  );
})}

            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
