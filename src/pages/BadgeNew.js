import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import api from "../api";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: ""
    }
  };

  handleChange = e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fuid"
            src={header}
            alt="logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                email={this.state.form.email || "email"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "twitter"}
                avatarUrl="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60"
              />
            </div>

            <div className="col-6">
              <h1>New attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
