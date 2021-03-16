import { Component } from "react";

export default class MainContent extends Component {
  state = {
    appTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Mijail",
        phone: "3412234532",
        address: { city: "Mexico" },
      },
      {
        id: 2,
        name: "Victoria",
        phone: "9012345678",
        address: { city: "Sydney" },
      },
      {
        id: 3,
        name: "Zara",
        phone: "1265903456",
        address: { city: "New York" },
      },
      {
        id: 4,
        name: "Scarlet",
        phone: "5512873088",
        address: { city: "Praga" },
      },
      {
        id: 5,
        name: "Yovana",
        phone: "5516314271",
        address: { city: "Belice" },
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.appTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className=" table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => {
              return (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  // Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    // this.setState({ customersCount: 7 });
    this.setState({ customersCount: this.state.customersCount + 1 });
  };
}
