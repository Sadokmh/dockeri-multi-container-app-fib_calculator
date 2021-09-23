import React from "react";

import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <div>
      I'm the second page in your app !<Link to="/">Go Back home</Link>
    </div>
  );
};

export default SecondPage;
