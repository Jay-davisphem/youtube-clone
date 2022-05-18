import { useState } from "react";
import "./_categoriesBar.scss";
const keywords = [
  "All",
  "React.js",
  "Angular.js",
  "React Native",
  "All1",
  "All2",
  "All3",
  "React.js1",
  "Angular.jsw",
  "React Nat1ive",
  "React.js2",
  "Angular.xjs",
  "React Nastive",
  "React.cjs",
  "Angularcvz.js",
  "React Natixcve",
  "Allzc",
  "Reactxc.js",
  "Angularxx.js",
  "React Natxcxive",
];

function CategoriesBar() {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (val) => {
    setActiveElement(val);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((val, i) => (
        <span
          key={i}
          onClick={() => handleClick(val)}
          className={activeElement === val ? "active" : ""}
        >
          {val}
        </span>
      ))}
    </div>
  );
}
export default CategoriesBar;
