import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container/Container";
import appActions from "./redux/app/app-actions";
import appOperations from "./redux/app/app-operations";
import selectors from "./redux/app/contacts-selectors";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    console.log(this.props.contacts);
    console.log(this.props.filter);
    console.log(this.props.visibleArray);

    return (
      <Container>
        <div className="App">
          <h1>Phonebook</h1>
          {this.props.isLoadingContacts && <h2>Loading ...</h2>}
          <ContactForm onSubmitData={this.props.formSubmitHandler} />
          <h1>Contacts</h1>
          <Filter setFilterToState={this.props.filterSet} />
          <ContactList
            contacts={this.props.visibleArray}
            del={this.props.contactDelete}
          />
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingContacts: selectors.getIsLoading(state),
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  visibleArray: selectors.getVisibleFilterArray(state),
});

const mapDispatchToProrps = (dispatch) => ({
  fetchContacts: () => dispatch(appOperations.fetchContacts()),
  formSubmitHandler: (contactData) =>
    dispatch(appOperations.addContact(contactData)),
  contactDelete: (contactId) =>
    dispatch(appOperations.deleteContact(contactId)),
  filterSet: (str) => dispatch(appActions.filterSet(str)),
});
export default connect(mapStateToProps, mapDispatchToProrps)(App);
