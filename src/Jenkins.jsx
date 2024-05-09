import React, { useEffect, useState } from "react";

const Jenkins = () => {
  const [jenkinsURL, setJenkinsURL] = useState({
    name: "",
    url: "",
  });

  const saveJenkinsURLToLocalStorage = () => {
    const jenkinsURLs = JSON.parse(localStorage.getItem("jenkinsURLs")) || [];
    jenkinsURLs.push(jenkinsURL);
    localStorage.setItem("jenkinsURLs", JSON.stringify(jenkinsURLs));
  };

  const [jenkinsList, setJenkinsList] = useState([]);

  useEffect(() => {
    const jenkinsURLs = JSON.parse(localStorage.getItem("jenkinsURLs")) || [];
    setJenkinsList(jenkinsURLs);
  }, []);

  return (
    <div>
      <div className="mt-5 px-5">
        <label className="mb-[10px] block text-base font-medium text-dark">
          Enter Jenkins URL
        </label>
        <input
          type="text"
          placeholder="https://example.com"
          className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
          value={jenkinsURL.url}
          onChange={(e) =>
            setJenkinsURL({ ...jenkinsURL, url: e.target.value })
          }
        />
        <div className="h-5"></div>
        <input
          type="text"
          placeholder="Jenkins Name"
          className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
          value={jenkinsURL.name}
          onChange={(e) =>
            setJenkinsURL({ ...jenkinsURL, name: e.target.value })
          }
        />

        <button
          className="mt-5 bg-black text-white py-[10px] px-5 rounded-md transition"
          onClick={saveJenkinsURLToLocalStorage}
        >
          Add Jenkins
        </button>
      </div>

      <div className="mt-5 px-5">
        <h2 className="text-lg font-medium text-dark">Jenkins List</h2>
        <ul className="mt-2">
          {jenkinsList.map((jenkins, index) => (
            <li key={index} className="text-dark-6">
              <p className="mb-2 text-xl">{jenkins.name}</p>
              <a
                href={jenkins.url}
                target="_blank"
                rel="noreferrer"
                className="text-white bg-black py-[10px] px-5 rounded-md transition"
              >
                <span className="mr-2">🔄</span>
                Reload Jenkins
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Jenkins;
