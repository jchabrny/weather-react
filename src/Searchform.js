import React from "react";
import "./Searchform.css";

export default function Searchform() {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Type a city"
            autoComplete="off"
            autoFocus="on"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-50"
          />
        </div>
      </div>
    </form>
  );
}
