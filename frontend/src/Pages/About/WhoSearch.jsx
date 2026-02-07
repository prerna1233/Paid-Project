
import "./WhoSearch.css";

function WhoSearch({ search, setSearch }) {
  return (
    <div className="who_search-wrapper">
      
      {/* Left red label */}
      <div className="who_search-label">
        Filter Who’s Who divisions wise
      </div>

      {/* Right search area */}
      <div className="who_search-box">
        <input
          type="text"
          placeholder="Search by name, designation or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="filter-btn">
          🔍 Filter
        </button>
      </div>
<div></div>
    </div>
  );
}
export default WhoSearch;