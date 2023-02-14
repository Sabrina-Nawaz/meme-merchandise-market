import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
  Text: {
    paddingTop: "3%",
    paddingLeft: "20%",
    paddingRight: "20%",
  },

  Navbar: {
    textAlign: "right",
    justifyContent: "left",
  },
};

export default function Shipping() {
  return (
    <>
      <Navbar sticky="top" variant="light" bg="light" expand="sm" style={styles.Navbar}>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Brand> {">"} </Navbar.Brand>
        <Navbar.Brand as={Link} to="/shipping">
          Shipping and Delivery
        </Navbar.Brand>
      </Navbar>

      <div style={styles.Text}>
        <h2>faq: shipping & delivery</h2>
        <h4>Do you ship worldwide?</h4>
        <ul>
          <li>Yes (except Cuba, Crimea, Iran, North Korea, and Syria).</li>
          <li>Regional restrictions due to the pandemic may also affect and change where we can deliver.</li>
        </ul>
        <h3>How long does it take to fulfill and deliver my order?</h3>

        <h4> Delivery (standard) </h4>
        <ul>
          <li>NA/EU: 1-4 weeks</li>
          <li>Mexico/SE Asia: 4-6 weeks</li>
          <li>Middle east: 6-12 weeks</li>
        </ul>

        <h3>I recently placed an order but haven't received any shipping information.</h3>
        <p>
          All our stuff is made to order so we may need some time to prepare it for you. Once your order has
          been fulfilled and is ready to ship, you'll receive an email with your tracking info.
        </p>
        <h3>Where are orders fulfilled from?</h3>
        <p>
          • Our supplier's main print facilities are in the US, Canada, and Europe (Latvia). <br />• Some
          items (like notebooks and enamel pins) are only stocked in the US
          <br />• Generally, your item will be fulfilled in the facility closest to you—unless they're not
          stocked there, in which case&nbsp;it'll be fulfilled at one of the other locations.
        </p>
        <h3>
          Tracking shows my package has been in the "item sent abroad" status for a long time now.
          is&nbsp;this normal?
        </h3>
        <ul>
          <li>"Item sent abroad" means your package is either:</li>
          <li>
            <strong>waiting for transportation</strong> / <strong>on its way</strong> to the destination
            country
          </li>
          <li>
            <strong>in the destination country</strong> but is waiting to be processed by customs or scanned
            by the local post office
          </li>
        </ul>
        <p>
          • This process can take anywhere from a few days to a few weeks. if&nbsp;it's been stuck in this
          status for more than 20 days, please let us know.
        </p>
        <h3>My package has been marked delivered ... but there's nothing in my mailbox. :(</h3>
        <p>
          • Most missing deliveries are resolved through the carrier delivering your parcel. Please contact
          them first in case of system errors or if it was delivered to the wrong place.
        </p>
        <h3>My package was returned to the sender!</h3>
        <p>
          • Please e-mail us right away. We can reship the package to you once we receive it and will cover
          the cost for the first reshipment. :)
          <br />• <strong>Packages returned to us&nbsp;more than once</strong> will incur additional shipping
          costs. if this happens, please verify the shipping address or suggest another address&nbsp;so we can
          avoid further costs and minimize our global footprint.&nbsp;
        </p>
        <p>
          <strong></strong>
          <span>
            <br />
          </span>
        </p>
        <p>
          <strong></strong>
          <span>
            <br />
          </span>
        </p>
      </div>
    </>
  );
}
