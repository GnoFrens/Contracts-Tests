import './App.css';
import React from "react";
import env from "react-dotenv";
import { init, useQuery } from "@airstack/airstack-react";

const airstackAPIKey = env.AIRSTACK_API_KEY;

init(airstackAPIKey);

const App = () => {
  const { data, loading, error } = useQuery(
    `query POAPsForGnoFrens {
      Poaps(input: {filter: {owner: {_eq: "cryptosmiff.eth"}}, blockchain: ALL}) {
        Poap {
          id
          chainId
          eventId
          createdAtBlockNumber
          poapEvent {
            chainId
            eventId
            eventName
            description
            isVirtualEvent
            id
          }
          owner {
            addresses
            domains {
              id
              name
              labelName
            }
          }
        }
      }
    }`
  );

  if (loading) {
    return <div>Loading: </div>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  <div>
        <h1>Flow App</h1>
        {data}
      </div>
  // Render your component using the data returned by the query
};

export default App;
