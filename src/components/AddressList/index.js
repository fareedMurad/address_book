import React, { useState, useEffect } from "react";
import { address } from "../../api";
import InputField from "../InputField";
import "../../styles/styles.css"


const EditableTable = () => {
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([]);


  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    setFilteredList(products)
  }, [products])

  useEffect(() => {
    fetchAdresses();
  }, [])


  const fetchAdresses = async () => {
   const addresses = await address.getList();
   setProducts(addresses)
  }

  useEffect(() => {
    const filter = reqObj => {
      let fname = reqObj.fname.toLowerCase();
      let lname = reqObj.lname.toLowerCase();
      let searchedString = filterText.toLowerCase()
      return (fname.includes(searchedString) || lname.includes(searchedString))
    }
    setFilteredList(products.filter(reqObj => filter(reqObj)))
  }, [filterText])

  const handleUserInput = (filterText) => {
    setFilterText(filterText);
  };

  const SearchBar = ({ value, onUserInput }) => {
    return (
      <div className="container">
        <InputField
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => onUserInput(e.target.value)}
        />
      </div>
    );
  };

  const ProductTable = ({ products, filterText }) => {
    var filterText = filterText;
    var rows = products.map((product) => {
      return (
        <ProductRow
          product={product}
          key={product.id}
        />
      );
    });
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  const ProductRow = ({ product }) => {

    return (
      <tr className="eachRow">
        <Cell
          cellData={{
            type: "fname",
            value: product.fname,
            id: product.id,
          }}
        />
        <Cell
          cellData={{
            type: "lname",
            value: product.lname,
            id: product.id,
          }}
        />
        <Cell
          cellData={{
            type: "phone",
            value: product.phone,
            id: product.id,
          }}
        />
        <Cell
          cellData={{
            type: "email",
            value: product.email,
            id: product.id,
          }}
        />
        <Cell
          cellData={{
            type: "address",
            value: product.address,
            id: product.id,
          }}
        />
      </tr>
    );
  };

  const Cell = ({ cellData }) => {
    return (
      <td>{cellData.value}</td>
    );
  };

  return (
    <div className="contain">
      <div className="tableContainer">
        <SearchBar value={filterText} onUserInput={handleUserInput} />
        <ProductTable
          products={filteredList}
          filterText={filterText}
        />
      </div>
    </div>
  );
};

export default EditableTable;
