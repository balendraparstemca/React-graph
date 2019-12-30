import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './App.css'; //Import here your file style

const gridExamplesPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="8">.col-md-8</MDBCol>
    <MDBCol md="4">.col-md-4</MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default gridExamplesPage