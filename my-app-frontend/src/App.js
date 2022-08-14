import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import './App.css';
import Categorie from "./components/Categorie";
import Donation from "./components/Donation";
import Header from './components/Header';
import User from './components/User';
import Table from 'react-bootstrap/Table';
import { Accordion } from "react-bootstrap";
import AddDonation from './components/AddDonation';

function App() {

  const [categories, setCategories] = useState([]);
  const [donations, setDonations] = useState([]);

        // get categories
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((categorie) => setCategories(categorie));
  }, [])

  function userName(username) {
    return username
  }

    // get donations 
  useEffect(() => {
    fetch("http://localhost:9292/donations")
      .then((r) => r.json())
      .then((donation) => setDonations(donation));
  }, [])

  function handleDeleteDonation(id) {
    const updatedDonations = donations.filter((donation) => donation.id !== id);
    setDonations(updatedDonations);
  }

  function onUpdateDonation(updatedDonation){
    const updatedDonations = donations.map((donation) => {
      if (donation.id === updatedDonation.id) {
        return updatedDonation;
      } else {
        return donation;
      }});
      setDonations(updatedDonations);
  }

  return (
    <div className="App">
      <Header />

          {/* fetch a user name */}
      <User userName={userName} />

          {/* render categories from server data */}
      <Accordion defaultActiveKey="0">
        {categories.map((categorie) =>
          <Categorie key={categorie.id} categorie={categorie} />
        )}
      </Accordion>

          {/* form to submit a donation */}
      <br></br>
      <p>---------------------------------</p>
      <h2>Take action</h2>
      <AddDonation categories={categories} />
      <p>---------------------------------</p>
      <br></br>

          {/* render donations in a table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Categorie</th>
            <th>Amount</th>
            <th>Comment</th>
            <th></th>
          </tr>
        </thead>
        {donations.map((donation) =>
          <Donation key={donation.id} donation={donation} userName={userName} categories={categories} handleDeleteDonation={handleDeleteDonation} onUpdateDonation={onUpdateDonation} />
        )}
      </Table>

    </div>
  );
}

export default App;
