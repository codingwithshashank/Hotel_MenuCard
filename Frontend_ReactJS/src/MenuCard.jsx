import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import MyNavbar from './MyNavbar';
import Card from "react-bootstrap/Card"; // Added Card import
import axios from 'axios';

export default function MenuCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    menucard();
  }, []);

  function menucard() {
    axios.get("http://192.168.29.94:3000/menucard")
      .then(response => {
        let l = response.data.menucard;
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
        <Card.Header as="h1">Menu Card</Card.Header>
        <Card.Body>
          <Table>
            <thead> {/* Corrected from Thread to thead */}
              <tr>
                <th>menu_name</th>
                <th>menu_price</th>
                <th>group_name</th>
                <th>QTY</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.menu_name}</td>
                  <td>{item.menu_price}</td>
                  <td>{item.group_name}</td>
                  <td>{item.qty_type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
