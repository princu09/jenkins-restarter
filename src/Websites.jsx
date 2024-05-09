import React, { useEffect, useState } from "react";
import WebsiteStatusChecker from "./WebsiteStatusChecker";

const Websites = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");

  const saveWebsiteToLocalStorage = () => {
    const websites = JSON.parse(localStorage.getItem("websites")) || [];
    websites.push(websiteUrl);
    localStorage.setItem("websites", JSON.stringify(websites));
  };

  const [websiteList, setWebsiteList] = useState([]);
  useEffect(() => {
    const websites = JSON.parse(localStorage.getItem("websites")) || [];
    setWebsiteList(websites);
  }, []);

  return (
    <div>
      <div className="mt-5 px-5">
        <label className="mb-[10px] block text-base font-medium text-dark">
          Enter Website URL
        </label>
        <input
          type="text"
          placeholder="https://example.com"
          className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />

        <button
          className="mt-5 bg-black text-white py-[10px] px-5 rounded-md transition"
          onClick={saveWebsiteToLocalStorage}
        >
          Add Website
        </button>
      </div>

      <div className="mt-5 px-5">
        <h2 className="text-lg font-medium text-dark">Websites List</h2>
        <ul className="mt-2">
          {websiteList.map((website, index) => (
            <li key={index} className="text-dark-6">
              <WebsiteStatusChecker websiteUrl={website} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Websites;
