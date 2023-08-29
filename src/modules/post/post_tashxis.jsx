import axios from "../../api/axios";
import { useEffect, useState, useRef } from "react";
import './post_tshxis.css'
import DeleteFunction from "../delete/delete";
// import Loader from "../loader/loader";


function PostTashxis() {
  if(!localStorage.getItem('token')) {
    window.location = '/login'
  }
  const tashxisNameRef = useRef();
  const valueNameRef = useRef();
  const valueNumberRef = useRef();
  const tashxisValueRef = useRef();
  
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  const getTashxis = async () => {
    try {
      const fetchData = await axios.get("/tashxis");
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getTashxis);
    return () => {
      window.removeEventListener("load", getTashxis);
    };
  }, [data]);

  const addTashxisName = async (e) => {
    e.preventDefault();
    window.location.reload()
    try {
      const tashxisNameData = await axios.post("/tashxis", {
        name: tashxisNameRef.current.value,
      },{
        headers: {
          token: localStorage.getItem('token')
        }
      });
      console.log(tashxisNameData);
    } catch (error) {
      console.log(error);
    }
  };

  const addValueName = async (e) => {
    e.preventDefault();
    window.location.reload()
    try {
      const valueNameData = await axios.post("/value", {
        value_name: valueNameRef.current.value,
        value_number: valueNumberRef.current.value,
        tashxis_ref_id: tashxisValueRef.current.id
      },{
        headers: {
          token: localStorage.getItem('token')
        }
      });
      console.log(tashxisValueRef.current.id);
      console.log(valueNameData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post_tashxis">
      <form onSubmit={addTashxisName}>
        <input required ref={tashxisNameRef} placeholder="tashxis_name" type="text" />
        <br />
        <button type="submit">added</button>
      </form>
      <form onSubmit={addValueName}>
        <select>
            {data.map((res) => {
                return (
                    <option id={res.id} key={ res.id } ref={tashxisValueRef}> {res.name} </option>
                )
            })}
        </select>
        <br />
        <input required ref={valueNameRef} placeholder="value_name" type="text" />
        <br />
        <input required ref={valueNumberRef} placeholder="value_number" type="number" />
        <br />
        <button type="submit">added</button>
      </form>

      <DeleteFunction/>
    </div>
  );
}

export default PostTashxis;
