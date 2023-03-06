import React, { useEffect, useState } from "react";

import protectionNames from "../markdown/protections/protections.json";

type Protection = {
  name: string;
};

const Protections = () => {
  const [protections, setProtections] = useState<Protection[]>([]);

  useEffect(() => {
    const mappedProtections = protectionNames.protections.map(
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
            <a href={`docs/protections/${protection.name}`}>
              {protection.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Protections;
