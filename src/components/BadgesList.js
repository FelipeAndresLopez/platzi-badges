import React from "react";

import { Link } from "react-router-dom";
import BadgesListItem from "./BadgesListItem";

function useSearchBadges(badgesList) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badgesList);
  console.log(query);
  if (query !== "") {
    React.useMemo(() => {
      const result = badgesList.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase);
      });
      if (filteredBadges.length !== result.length) setFilteredBadges(result);
    }, [badgesList, query]);
  }
  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  console.log("1");
  const badgesList = props.badges.slice(0).reverse();
  const { query, setQuery, filteredBadges } = useSearchBadges(badgesList);
  console.log(filteredBadges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No encontramos ningun badge</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BadgesList;
