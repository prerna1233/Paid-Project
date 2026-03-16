
import { useState } from "react";
import "./WhoIsWho.css";
import { whoData } from "./WhoIsWho";
import Footer from "../../Components/Footer/Footer";
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
    (item) => item.section === "Sub Divisional Officers"
  );

  const bdo = filteredData.filter(
    (item) => item.section === "Block Development Officers"
  );

  return (
    <div className="whocontainer">
      <div className="who-container">
        <header className="who-page-header">
          <h1>Who Is Who</h1>
          <p>District contacts and administrative directory.</p>
        </header>

        <WhoSearch search={search} setSearch={setSearch} />

        <WhoTable title="District Administration" data={district} />
        <WhoTable title="Sub Divisional Officers" data={sdo} />
        <WhoTable title="Block Development Officers" data={bdo} />
      </div>

      <Footer />
    </div>
  );
}

export default WhoIsWho;
