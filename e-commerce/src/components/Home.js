import React from "react";
import { Button } from "react-bootstrap";

const Home_array = [
  {
    id: 1,
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIFFY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    id: 6,
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "grey",
          height: "100%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>
          <strong>The Generics</strong>
        </h1>
        <Button variant="outline-info ">Get our latest Album</Button>
      
        <Button
          style={{
            display: "block",
            border: "2px solid #56CCF2",
            borderRadius: "50%",
            padding: "10px",
            fontSize: "30px",
            fontWeight: 200,
            margin: "30px auto",
            background: "inherit",
            color: "#56CCF2",
          }}
        >
          ►
        </Button>
      </div>

      <h1 style={{ textAlign: "center" }}>Tours</h1>
      <div style={{ boxSizing: "border-box" }}>
        <ul
          style={{
            listStyle: "none",
            padding: "10px",
            marginLeft: "20%",
            marginRight: "20%",
            marginBottom: "10%",
          }}
        >
          {Home_array.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid black",
              }}
            >
              <div style={{ width: "12%" }}>{item.date}</div>
              <div style={{ width: "25%" }}>{item.city}</div>
              <div style={{ width: "50%" }}>{item.venue}</div>
              <Button style={{ width: "20%" }}>Buy Tickets</Button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Home;
