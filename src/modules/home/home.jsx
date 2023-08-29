import "./home.css";
import axios from "../../api/axios";
import { useState, useEffect } from "react";
import Loader from "../loader/loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState(0);

  const handleSelectChange = (event) => {
    const optionValue = event.target.value;
    if (optionValue !== "") {
      const optionNumber = Number(optionValue);
      setResult(result + optionNumber);
      setSelectedOption(result + optionNumber);
    }
  };

  const toAdd = async (e) => { 
    e.preventDefault();
    const qisqa = "Низкий риск (BMScore L):";
    const orta = "Средный риск(BMScore M):";
    const yuqori = "Высокий риск (BMScore H):";
    var resultDivEl = document.querySelector("#result_div");
    var resH3El = document.createElement("h3");
    resultDivEl.append(resH3El);
    try {
      if (selectedOption <= 24.6) {
        resH3El.append(
          qisqa +
            " " +
            selectedOption +
            " " +
            ` балл Резекция с эндопротезированием 
        Лучевая терапия 
        Противоопухолевые, антирезорбтивные, гормональные, таргетные и биологические препараты`
        );
      }
      if (selectedOption >= 24.7 && selectedOption <= 53.3) {
        orta +
          " " +
          selectedOption +
          " " +
          ` балл Остеосинтез 
        Лучевая терапия 
        Противоопухолевые, антирезорбтивные, гормональные, таргетные и биологические препараты`;
      }
      if (selectedOption >= 53.4) {
        yuqori +
          " " +
          selectedOption +
          " " +
          ` балл Паллиативный 
        Лучевая терапия 
        Противоопухолевые, антирезорбтивные, гормональные, таргетные и биологические препараты`;
      }
      console.log(selectedOption);

      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

  return (
    <div className="container">
      <div className="home">
        {isLoading ? (
          <Loader className="loader" />
        ) : (
          <form className="home_form" onSubmit={toAdd}>
            {data.map((res) => {
              return (
                <div className="result_form" key={res.id}>
                  <h4 className="form_title">{res.name}</h4>
                  <select className="select_form" value={selectedOption} onChange={handleSelectChange}>
                    <option value=""> входить... </option>
                    {res.TashxisValues.map((element) => {
                      return (
                        <option
                          className="select_option"
                          selected
                          key={element.id}
                          value={element.value_number}
                        >
                          {element.value_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })}
              <button className="hisobla_btn" type="submit">Расчет</button>
          </form>
        )}
        <br />
        <div id="result_div"></div>
      </div>
    </div>
  );
}

export default Home;
