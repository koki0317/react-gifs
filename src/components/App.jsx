import React, { useState } from "react";
import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from "./SearchBar";

const giphy = require("giphy-api")({
  apiKey: "KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR",
  https: true,
});

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedId = "gG6OcTSRWaSis";

  const [selectedId, setSelectedId] = useState("gG6OcTSRWaSis");
  const [gifIds, setGifIds] = useState([
    "WuGSL4LFUMQU",
    "HuVCpmfKheI2Q",
    "u6uAu3yyDNqRq",
  ]);
  const fetchGiphy = (keyword) => {
    giphy.search(
      {
        q: keyword,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        const gifIdArray = res.data.map((gif) => gif.id);
        setGifIds(gifIdArray);
      }
    );
  };
  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={selectedId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
};

export default App;
