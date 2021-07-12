import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import ColorData from "./data.json";
import LazyLoad from "react-lazy-load";
import { FiSearch } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentLoader from "react-content-loader";
const App = () => {
  const brandsArray = [];
  Object.keys(ColorData).map((key) => {
    brandsArray.push(ColorData[key]);
  });
  const [inputVal, setInputVal] = useState("");
  const [typing, setTyping] = useState(false);
  const [selected, setSelected] = useState(false);
  const [mainBrandShow, setMainBrandShow] = useState(brandsArray);
  const [copiedColor, setCopiedColor] = useState("");
  const [checkColor, setCheckColor] = useState(false);
  // const handleSelect = (e) => {
  //   setSelected(!selected);
  // };
  const handleCopied = (e) => {
    setCopiedColor(e);
    setCheckColor(true);
    setTimeout(() => {
      setCheckColor(false);
    }, 2000);
  };
  const handleSearch = (e) => {
    setMainBrandShow(
      brandsArray.filter((name) => name.title.toLowerCase().includes(inputVal))
    );

    setInputVal(e.target.value);
    if (e.target.value === "") {
      setMainBrandShow(brandsArray);
    }
  };
  const handleTyping = (e) => {
    setTyping(true);
    setInterval(() => {
      setTyping(false);
    }, 2000);
    console.log(typing);
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div
        className={`absolute bottom-4 right-4 w-56 h-10 flex items-center justify-center font-bold transition-all transform translate-x-64 ${
          checkColor ? "translate-x-0" : null
        }`}
        style={{ background: copiedColor }}
      >
        {copiedColor}
      </div>
      <Sidebar />
      <div className="w-full h-full">
        <div className="searchbar border w-full h-12 p-4 flex items-center">
          <FiSearch className="mr-3 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Searach Brands"
            value={inputVal}
            className="outline-none w-full"
            onChange={handleSearch}
            onKeyPress={handleTyping}
          />
        </div>
        <div className="main-contetn h-full overflow-auto p-3">
          {mainBrandShow.map((brand, key) => (
            <LazyLoad height={100} offsetTop={10}>
              <div className="border-b-2 w-full flex items-center justify-start cursor-pointer">
                <h2 className=" w-56 ml-2">{brand.title}</h2>
                <div className="brandsAll flex justify-start items-center w-full overflow-hidden">
                  {brand.colors.map((brandColor, key) => (
                    <CopyToClipboard
                      text={`#${brandColor}`}
                      key={key}
                      onCopy={handleCopied}
                    >
                      <div
                        className={`brand border-2 w-14 h-[2.3rem] my-3 mx-1 flex items-center justify-center group ${
                          selected ? "flex-1" : null
                        }`}
                        style={{ background: `#${brandColor}` }}
                      >
                        <span className="hidden group-hover:block text-white text-lg">
                          <MdContentCopy />
                        </span>
                      </div>
                    </CopyToClipboard>
                  ))}
                </div>
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
