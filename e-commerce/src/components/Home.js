import React from "react";
import { Button, Table } from "react-bootstrap";

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

      <div>
        <h1 style={{ textAlign: "center" }}>Tours</h1>

        {Home_array.map((item) => (
          <Table>
            <tbody>
              <tr>
                <td>{item.date}</td>
                <td>{item.city}</td>
                <td>{item.venue}</td>
                <td>
                  <Button>Buy Tickets</Button>
                </td>
              </tr>{" "}
            </tbody>
          </Table>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
