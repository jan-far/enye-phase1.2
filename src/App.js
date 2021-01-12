import React, { Component } from 'react';
import Pagination from './components/pagination';
import Profiles from './components/profiles/Profiles';
import { ProfileHeader } from './components/profiles/profilesElements';
import SearchField from './components/SearchField';
import withSpinner from './components/withSpinner';

const ProfilesWithSpinner = withSpinner(Profiles);

class App extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      orderBy: 'Gender',
      queryText: '',
      totalPatients: 0,
      loading: true,
      currentPage: 1,
      patientPerPage: 20,
    };
    this.changeOrder = this.changeOrder.bind(this);
  }

  componentDidMount() {
    try {
      fetch('http://api.enye.tech/v1/challenge/records')
        .then((response) => response.json())
        .then(({ size, records }) => {
          return (this.setState({ totalPatients: size }), records);
        })
        .then(
          ({ profiles }) =>
            this.setState({ details: profiles, loading: false }),
          this.setState()
        );
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e) => {
    this.setState({ queryText: e.target.value });
  };

  changeOrder(order) {
    this.setState({
      orderBy: order,
    });
  }

  render() {
    const {
      details,
      queryText,
      loading,
      orderBy,
      currentPage,
      patientPerPage,
      totalPatients,
    } = this.state;

    // Get current patient records
    const indexOfLastPatient = currentPage * patientPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientPerPage;
    const currentPatient = details.slice(
      indexOfFirstPatient,
      indexOfLastPatient
    );

    // update the current page
    const paginate = (number) => {
      this.setState({ currentPage: number });
    };

    //  filter the current page patient records
    let filteredRecords = currentPatient;

    filteredRecords = filteredRecords
      .sort((a, b) => {
        if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      })
      .filter((eachItem) => {
        return (
          eachItem['UserName']
            .toLowerCase()
            .includes(queryText.toLowerCase()) ||
          eachItem['FirstName']
            .toLowerCase()
            .includes(queryText.toLowerCase()) ||
          eachItem['LastName']
            .toLowerCase()
            .includes(queryText.toLowerCase()) ||
          eachItem['Gender'].toLowerCase().includes(queryText.toLowerCase()) ||
          eachItem['CreditCardNumber']
            .toLowerCase()
            .includes(queryText.toLowerCase())
        );
      });

    return (
      <>
        <ProfileHeader>Patient Records</ProfileHeader>
        <SearchField
          placeholder="Search Patients"
          handleChange={this.handleChange}
          changeOrder={this.changeOrder}
        />
        <ProfilesWithSpinner isLoading={loading} profiles={filteredRecords} />
        <Pagination
          patientPerPage={patientPerPage}
          totalPatients={totalPatients}
          paginate={paginate}
        />
      </>
    );
  }
}

export default App;
