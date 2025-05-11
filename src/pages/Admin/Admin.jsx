import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="alluser">
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">Foydalanuvchilar Ro'yxati</h4>
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Ism</th>
                      <th>Familiya</th>
                      <th>Yosh</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={user.user_id}>
                          <th scope="row">{index + 1}</th>
                          <td>{user.user_firstname}</td>
                          <td>{user.user_lastname}</td>
                          <td>{user.user_ageyear}</td>
                          <td>{user.user_email}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center text-muted">
                          Foydalanuvchilar topilmadi.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Admin;
