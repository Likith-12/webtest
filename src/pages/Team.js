import React from "react";
import Footer from "../components/Footer";
import Member from "../components/Member";
import "./css/team.scss";

const Team = () => {
  firestore
    .collection("events")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot)
      querySnapshot.forEach((element) => {
        var data = element.data();
        console.log(data)
      });
    });
  const teams = [
    
    "Abhinave M S",
    "Aditya Sri Yerram", 
    "Amalkrishna A S",
    "Athul",
    "Bichu S Kumar",
    "Chirag Khurana",
    "Harish Haroon",
    "J Sivsankar",
    "Jiyad Jaleel",
    "Joshua",
    "Jyochith P Anil",
    "Kalyani Menon",
    "Naazni",
    "Nandhana Vasudevan",
    "P Anantha Padmanabhan",
    "P Sandra",
    "Rajath V",
    "Razeen Arif",
    "Rebecca Jacob",
    "Sai Krishna",
    "Saianivesh",
    "Sandhra M Lal",
    "Sanil Mishra",
    "Sanjana D V",
    "Shivang Manoj Kumar",
    "Sidharth C P",
    "Sohul Rajeev",
    "Sudarshan M",
    "T V Nithin",
    "Vysakh Vinod Nair"

  ]
  return (
    <div className='wrapper'>
      <h1>TEAM</h1>

      <div className="outer-container">
        <h2><span>SENIOR</span> <span> EXECUTIVES</span></h2>
        <div className="grid-container">
          {
            teams.map((team) => <Member title={team} img__path={`https://keen-kirch-aeb81f.netlify.app/exec-b20/${team.split(' ').join('_')}.jpg`} color="green" />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
