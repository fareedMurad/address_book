import React, { useState, useRef } from "react";
import Button from "../components/Button";
import "../Styles/_AddressForm.css";

const EditableTable = () => {
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      fname: "Jhon",
      lname: "Doe",
      phone: "52347583745934",
      email: "jhondoe@gmail.com",
      address: "Sporting Goods",
    },
    {
      id: 2,
      fname: "Ahan",
      lname: "Hood",
      phone: "52347583745934",
      email: "jhondoe@gmail.com",
      address: "Sporting Goods",
    },
    {
      id: 3,
      fname: "Jhon",
      lname: "Doe",
      phone: "52347583745934",
      email: "jhondoe@gmail.com",
      address: "Sporting Goods",
    },
    {
      id: 4,
      fname: "Jhon",
      lname: "Doe",
      phone: "52347583745934",
      email: "jhondoe@gmail.com",
      address: "Sporting Goods",
    },
    {
      id: 5,
      fname: "Jhon",
      lname: "Doe",
      phone: "52347583745934",
      email: "jhondoe@gmail.com",
      address: "Sporting Goods",
    },
    {
      id: 6,
      fname: "Jhon",
      lname: "Doe",
      phone: "52347583745934",
      email: "jhondoe@gmail.com",
      address: "Sporting Goods",
    },
  ]);

  const handleUserInput = (filterText) => {
    setFilterText(filterText);
  };

  const handleRowDel = (product) => {
    var index = this.state.products.indexOf(product);
    products.splice(index, 1);
    setProducts(products);
  };

  const handleAddEvent = (evt) => {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      fname: "",
      lname: "",
      phone: "",
      email: "",
      address: "",
    };
    setProducts(this.state.products);
  };

  const handleProductTable = (evt) => {
    var item = {
      id: evt.target.id,
      fname: evt.target.name,
      value: evt.target.value,
    };
    var products = products.slice();
    var newProducts = products.map(function (product) {
      for (var key in product) {
        if (key == item.fname && product.id == item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    setProducts({ products: newProducts });
  };

  const SearchBar = ({ onUserInput }) => {
    // const handleChange = () => {
    //   const onUserInput = filterTextInput.value;
    // };
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={onUserInput}
        />
      </div>
    );
  };

  const ProductTable = (onRowDel, onProductTableUpdate) => {
    var rowDel = onRowDel;
    var filterText = filterText;
    var product = products.map((product) => {
      if (product.fname.indexOf(filterText) === -1) {
        return;
      }
      console.log("cellData");
      return (
        <ProductRow
          onProductTableUpdate={onProductTableUpdate}
          product={product}
          onDelEvent={rowDel}
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

          <tbody>{product}</tbody>
        </table>
      </div>
    );
  };

  const ProductRow = (product, onProductTableUpdate) => {
    const onDelEvent = () => {
      onDelEvent(product);
    };

    return (
      <tr className="eachRow">
        <EditableCell
          onProductTableUpdate={onProductTableUpdate}
          cellData={{
            type: "fname",
            value: product.fname,
            id: product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={onProductTableUpdate}
          cellData={{
            type: "lname",
            value: product.lname,
            id: product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={onProductTableUpdate}
          cellData={{
            type: "phone",
            value: product.phone,
            id: product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={onProductTableUpdate}
          cellData={{
            type: "email",
            value: product.email,
            id: product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={onProductTableUpdate}
          cellData={{
            type: "address",
            value: product.address,
            id: product.id,
          }}
        />
        <td className="del-cell">
          <input
            type="button"
            onClick={onDelEvent}
            value="X"
            className="del-btn"
          />
        </td>
      </tr>
    );
  };

  const EditableCell = ({ onProductTableUpdate, cellData }) => {
    return (
      <td>
        <input
          type="text"
          name={cellData.type}
          id={cellData.id}
          value={cellData.value}
          onChange={onProductTableUpdate}
        />
      </td>
    );
  };

  return (
    <div className="contain">
      <div className="tableContainer">
        <SearchBar filterText={filterText} onUserInput={handleUserInput} />
        <ProductTable
          onProductTableUpdate={handleProductTable}
          onRowAdd={handleAddEvent}
          onRowDel={handleRowDel}
          products={products}
          filterText={filterText}
        />
      </div>
    </div>
  );
};

export default EditableTable;
