import { useState, useEffect } from "react";
import Link from "next/link";

const FileList = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFileNames = async () => {
      const res = await fetch("/api/getProtections");
      const data = await res.json();
      setFileNames(data);
    };
    fetchFileNames();
  }, []);

  return (
    <div>
      <h5>Protections</h5>
      <ul>
        {fileNames.map((fileName, index) => (
          <li key={index}>
            <Link href={`docs/protections/${fileName}`}>{fileName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
