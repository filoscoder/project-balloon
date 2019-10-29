import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCustomers } from '../../store/actions/customer'
import './customers.css';
import { getMembers } from '../../store/actions/members';

class Customers extends Component {

  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
    members: PropTypes.array.isRequired,
    getMembers: PropTypes.func.isRequired,
  }

  static defaultProps = {
    customers: [],
    members: [],
  }

  componentDidMount() {
    this.props.getCustomers();
    this.props.getMembers();
  }



  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.props.customers.map(customer =>
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}

        </ul>

        <ul>
          {this.props.members.map(member =>
            <li key={member.id}>{member.name} {member.email}</li>
          )}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers,
  members: state.members
})

const dispatchToProps = (dispatch) => ({
  getMembers: () => dispatch(getMembers()),
  getCustomers: () => dispatch(getCustomers()),


})

export default connect(mapStateToProps, dispatchToProps)(Customers);
