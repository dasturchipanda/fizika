const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:9000"
    : "https://fizika-server-production.up.railway.app"; // backend online manzilingiz

export default API_BASE_URL;
