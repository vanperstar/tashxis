import { useState, useEffect } from "react";
import axios from "../../api/axios";
import './delete.css'

function DeleteFunction() {
  const [data, setData] = useState([]);

  const getDeleteTashxis = async () => {
    try {
      const fetchData = await axios.get("/tashxis");
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getDeleteTashxis);
    return () => {
      window.removeEventListener("load", getDeleteTashxis);
    };
  }, [data]);

  const deleteTashxis = async (id) => {
    location.reload()
    try {
        await axios.delete(`/tashxis/${id}`)
        console.log(`Item witdh id ${id} delete succes`);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="container">
      <form className="delete_form" >
        {data.map((res) => {
          return (
            <div className="delete_tashxis" key={res.id}>
              <h4 id={res.id}>{res.name}</h4>
              {/* <p>{res.create_at.slice(0, 10)}</p> */}
              <button className="delete_btn" onClick={() => deleteTashxis(res.id)}>delete</button>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default DeleteFunction;
