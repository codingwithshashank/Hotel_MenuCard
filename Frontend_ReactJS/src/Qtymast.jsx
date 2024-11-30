import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import MyNavbar from './MyNavbar';
import Card from "react-bootstrap/Card"; // Added Card import
import axios from 'axios';

export default function Qtymast() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fg();
  }, []);

  function fg() {
    axios.get("http://192.168.29.94:3000/qtymast")
      .then(response => {
        console.log(response.data.qtymast)
        let l = response.data.qtymast;
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
        <Card.Header as="h1">QTY Master</Card.Header>
        <Card.Body>
          <Table>
            <thead> 
              <tr>
                <th>Qid</th>
                <th>Qty_type</th>
              </tr>
            </thead>
            <tbody>
            {data.map((val) => {
  return (
    <tr>
      <td>{val.qid}</td>
      <td>{val.qty_type}</td>
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
