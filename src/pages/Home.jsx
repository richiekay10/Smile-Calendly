import React from "react";
import "../styles/App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section class="jumbotron jumbotron-fluid showcase">
        <div class="showcase_inner">
          <h1>SMILE CALENDLY</h1>
          <p>
            Easy scheduling <br />
            ahead.
          </p>
          <Button variant="outline-primary" as={Link} to="/Register">
            Join!
          </Button>
        </div>
      </section>
    </>
  );
}

export default Home;
