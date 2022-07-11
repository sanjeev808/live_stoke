import React from "react"
import MetaTags from 'react-meta-tags';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap"
import Vector from "./Vectormap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const MapsVector = () => {
  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
          <title>Vector Maps | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Maps" breadcrumbItem="Vector Maps" />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MapsVector
