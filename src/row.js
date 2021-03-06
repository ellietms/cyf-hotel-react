import React, { useState } from "react";
import moment from "moment";

const Row = ({ element, index, showCustomerProfile }) => {
  const [active, setActiveClass] = useState(false);
  function handleClick() {
    setActiveClass(!active);
  }
  function showCustomer() {
    showCustomerProfile(element);
  }

  return (
    <tr
      key={index}
      className={
        active
          ? "col-12  text-white  bg-success"
          : "col-12 text-dark bg-danger "
      }
    >
      <th onClick={() => handleClick()}>
        <i className={active ? "fas fa-toggle-on" : "fas fa-toggle-off"} />
        {active ? "On" : "Off"}
      </th>
      <th
        onClick={() => handleClick()}
        scope="row"
        className={
          active ? "bg-warning mx-auto text-white" : "mx-auto text-white border"
        }
      >
        <button
          className={active ? "bg-success ml-3" : "bg-danger ml-3"}
          onClick={() => {
            showCustomer();
          }}
        >
          Show Profile
        </button>
      </th>
      <th
        onClick={() => handleClick()}
        scope="row"
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        <p>{element.title}</p>
      </th>
      <td className={active ? "bg-success text-white" : " text-white "}>
        {element.firstName}
      </td>
      <td
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        {element.surName}
      </td>
      <td className={active ? "bg-success text-white" : " text-white "}>
        {element.email}
      </td>
      <td
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        {element.roomId}
      </td>
      <td className={active ? "bg-success text-white" : " text-white "}>
        {element.checkIn}
      </td>
      <td
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        {element.checkOut}
      </td>
      <td className={active ? "bg-success text-white" : "text-white"}>
        {" "}
        {moment(element.checkOut).diff(moment(element.checkIn), "days")}
      </td>
    </tr>
  );
};

export default Row;
