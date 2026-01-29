
import { useState } from "react";
import "./WhoIsWho.css";
import { whoData } from "./WhoIsWho";
import Footer from "../../../Components/Footer/Footer";
import WhoTable from "./WhoTable";
import WhoSearch from "./WhoSearch"
function WhoIsWho() {
  const [search, setSearch] = useState("");

  const filteredData = whoData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.designation.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  const district = filteredData.filter(
    (item) => item.section === "District Administration"
  );

  const sdo = filteredData.filter(
    (item) => item.section === "Departmental Heads"
  );

  const bdo = filteredData.filter(
    (item) => item.section === "Block"
  );

  return (
    <div className="whocontainer">
      <div className="who-container">
        <h1>Who’s Who</h1>

        {/* ✅ NEW SEARCH BAR ADDED HERE */}
        <WhoSearch search={search} setSearch={setSearch} />

        <WhoTable title="District Administration" data={district} />
        <WhoTable title="Departmental Heads" data={sdo} />
        <WhoTable title="Block" data={bdo} />
      </div>

      <Footer />
    </div>
  );
}

export default WhoIsWho;
