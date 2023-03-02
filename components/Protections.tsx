import React, { useEffect, useState } from "react";

import protectionsData from "../data/protections.json";

type Protection = {
  name: string;
};

const Protections = () => {
  const [protections, setProtections] = useState<Protection[]>([]);

  useEffect(() => {
    const mappedProtections = protectionsData.protections.map(
      (protection): Protection => ({
        name: protection.name,
      })
    );
    setProtections(mappedProtections);
  }, []);

  return (
    <div>
      <h2>Protections</h2>
      <ul>
        {protections.map((protection) => (
          <li key={protection.name}>
            <h3>{protection.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Protections;