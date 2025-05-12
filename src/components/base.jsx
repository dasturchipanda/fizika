const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "https://fizika-server-production.up.railway.app"
    : "https://yourdomain.com"; // backend online manzilingiz

export default API_BASE_URL;
