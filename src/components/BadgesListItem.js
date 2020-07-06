import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt="avatar"
        />
        <div className="row">
          <div className="col-12">
            <span className="fullName">
              {this.props.badge.firstName} {this.props.badge.lastName}
            </span>
          </div>
          <div className="twitter col-12">
            <span>
              <FontAwesomeIcon icon={faTwitter} /> {this.props.badge.twitter}
            </span>
          </div>
          <div className="col-12">
            <span>{this.props.badge.jobTitle}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesListItem;
