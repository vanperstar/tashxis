import axios from "../../api/axios";
import './admin.css'
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

function Admin() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const adminLog = async (e) => {
    e.preventDefault();
    try {
      const adminData = await axios.post("/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(adminData);
      if (adminData.data.data?.status != 200) {
        toast.success(adminData.data?.message, {
          position: "top-center",
          theme: "colored",
          autoClose: 3000,
          closeButton: false,
        });
        localStorage.setItem("token", adminData.data.data.token);
      }
      if (window.localStorage.getItem("token")) {
        window.location.href = "/post";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <ToastContainer />
        <form className="login_form" onSubmit={adminLog}>
          <input
            className="login_input"
            ref={usernameRef}
            required
            type={"text"}
            placeholder="username"
          />
          <input
            className="password_input"
            ref={passwordRef}
            required
            type={"password"}
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
