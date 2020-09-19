import React from "react";
import Layout from "../../components/Layout/Layout";

function About() {
  return (
    <div>
      <Layout>
        <div className="container">
          <h1>Despre acest site:</h1>
          <p>
            Proiect realizat in cadrul cursului JavaScript Advanced - React din
            cadrul Telecom Academy
          </p>
          <p>Tehnologii utilizate:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>ReactRouter</li>
            <li>Redux</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}

export default About;
