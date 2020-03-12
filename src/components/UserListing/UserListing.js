import React from 'react';
import { Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { User } from '../models/User';

class UserListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      firstNameFilter: '',
      lastNameFilter: '',
      createdAtOrder: '',
      creditScoreOrder: '',
      creditIndicatorStatus: ''
    }
  }

  componentDidMount() {
    fetch("http://private-041255-sakura3.apiary-mock.com/applicants")
      .then(res => res.json())
      .then(
        (responseList) => {
          let allUsers = [];
          responseList.forEach(element => {
            allUsers.push(new User(element.id, element.created_at, element.first_name, element.last_name, element.credit_indicator));
          });
          this.setState({ usersList: allUsers });
        },
        (error) => {
          console.log("something went wrong !");
        }
      )
  }



  static applyFilter(currentState) {
    let filteredUsers = currentState.usersList;
    if (currentState.firstNameFilter) {
      const firstNamePattern = currentState.firstNameFilter.toLowerCase().trim();
      filteredUsers = filteredUsers.filter(function (item) {
        return item.firstName.toLowerCase().includes(firstNamePattern);
      });
    }
    if (currentState.lastNameFilter) {
      const lastNamePattern = currentState.lastNameFilter.toLowerCase().trim();
      filteredUsers = filteredUsers.filter(function (item) {
        return item.lastName.toLowerCase().includes(lastNamePattern);
      });
    }
    if (currentState.createdAtOrder) {
      if (currentState.createdAtOrder === "newest") {
        filteredUsers = filteredUsers.sort((b, a) => {
          return a.createdAt.getTime() - b.createdAt.getTime();
        });
      }
      else {
        filteredUsers = filteredUsers.sort((a, b) => {
          return a.createdAt.getTime() - b.createdAt.getTime();
        });
      }
    }
    if(currentState.creditIndicatorStatus) {
      if(currentState.creditIndicatorStatus === "bad") filteredUsers = filteredUsers.filter(item => item.creditIndicator < 5);
      else if(currentState.creditIndicatorStatus === "neutral") filteredUsers = filteredUsers.filter(item => item.creditIndicator >= 5 && item.creditIndicator < 7);
      else if(currentState.creditIndicatorStatus === "good") filteredUsers = filteredUsers.filter(item => item.creditIndicator >= 7);
    }
    if (currentState.creditScoreOrder) {
      if (currentState.creditScoreOrder === "highest") {
        filteredUsers = filteredUsers.sort((b, a) => {
          return a.creditIndicator - b.creditIndicator;
        });
      } else {
        filteredUsers = filteredUsers.sort((a, b) => {
          return a.creditIndicator - b.creditIndicator;
        });
      }
    }
    return filteredUsers;
  }


  render() {
    const filteredUsers = UserListing.applyFilter(this.state);
    return (
      <div>
        <Table bordered hover className="col-8 mx-auto m-2">
          <thead>
            <tr>
              <th>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="name" placeholder="filter by first name" value={this.state.firstName}
                    onChange={event => this.setState({ firstNameFilter: event.target.value })}
                  />
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="name" placeholder="filter by last name" value={this.state.lastName}
                    onChange={event => this.setState({ lastNameFilter: event.target.value })}
                  />
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                  <Form.Label>Date Created</Form.Label>
                  <Form.Control as="select" value={this.state.createdAtOrder}
                    onChange={event => this.setState({ createdAtOrder: event.target.value, creditScoreOrder: '' })}>
                    <option></option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </Form.Control>
                </Form.Group>
              </th>
              <th>
                <Form.Group  >
                  <Form.Label>Credit Indicator order</Form.Label>
                  <Form.Control as="select" value={this.state.creditScoreOrder}
                    onChange={event => this.setState({ creditScoreOrder: event.target.value, createdAtOrder: '' })}>
                    <option></option>
                    <option value="highest">High to low</option>
                    <option value="lowest">Low to high</option>
                  </Form.Control>
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                <Form.Label>Credit Status</Form.Label>
                  <Form.Control as="select" value={this.state.creditIndicatorStatus}
                    onChange={event => this.setState({ creditIndicatorStatus: event.target.value })}>
                    <option value="">All</option>
                    <option value="bad">Bad</option>
                    <option value="neutral">Neutral</option>
                    <option value="good">Good</option>
                  </Form.Control>
                </Form.Group>
              </th>
            </tr>
          </thead>
        </Table>
        <Table bordered hover className="col-8 mx-auto m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Date Created</th>
              <th>Credit Indicator</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((item, key) =>
              <tr key={item.id}>
                <td>{key + 1}</td>
                <td><Link to={{ pathname: ("/users/" + item.firstName), userData: { ...item } }}>{item.firstName + " " + item.lastName}</Link></td>
                <td>{item.createdAt.toString()}</td>
                <td>{item.creditIndicator}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserListing;