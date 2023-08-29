import "./tashxis.css";
import { useRef } from "react";

function Tashxis() {
  const ВозрастRef = useRef();
  const ПолRef = useRef();
  // console.log(ПолRef.current.value);
  // console.log(ВозрастRef.current.value + " " + ПолRef.current.value);

  return (
    <div className="container">
      <div className="tashxis">
        <div>
          <h4>Пол</h4>
          <select ref={ПолRef} id={ПолRef}>
            <option value="0">Женщина</option>
            <option value="1">Мужчина</option>
          </select>
        </div>

        <div>
          <h4>Возраст</h4>
          <select ref={ВозрастRef} id="yoshi">
            <option value="1">40-55 лет</option>
            <option value="2">56-70 лет</option>
            <option value="3"> 70 лет 40 лет</option>
          </select>
        </div>

        <div>
          <h4>Метастаз</h4>
          <select name="" id="">
            <option value="0">Ремиссия</option>
            <option value="1">Солитарный</option>
            <option value="2">Олигометастаз</option>
            <option value="3">Множественный</option>
          </select>
        </div>

        <div>
          <h4>Кость</h4>
          <select name="" id="">
            <option value="0">Ремиссия</option>
            <option value="1">Верхняя конечность</option>
            <option value="2">Нижняя конечность</option>
            <option value="3">Осевой скелет</option>
          </select>
        </div>

        <div>
          <h4>ECOG-PS</h4>
          <select name="" id="">
            <option value="0">0</option>
            <option value="1">1-2</option>
            <option value="2">3</option>
            <option value="3">4</option>
          </select>
        </div>

        <div>
          <h4>Патологический перелом</h4>
          <select name="" id="">
            <option value="0">Нет</option>
            <option value="1">Риск</option>
            <option value="2">Есть</option>
            <option value="3">Повторный</option>
          </select>
        </div>

        <div>
          <h4>Боль</h4>
          <select name="" id="">
            <option value="0">Нет</option>
            <option value="1">Умеренный</option>
            <option value="2">Сильный</option>
            <option value="3">Очень сильный</option>
          </select>
        </div>

        <div>
          <h4>Гиперкальциемия, мг/Дл</h4>
          <select name="" id="">
            <option value="0">8,5-10,5</option>
            <option value="1">10,6-14 мг/Дл</option>
            <option value="2">14 мг/Дл</option>
          </select>
        </div>

        <div>
          <h4>NLR</h4>
          <select name="" id="">
            <option value="0">0-3</option>
            <option value="1">4-5</option>
            <option value="2">5</option>
          </select>
        </div>

        <div>
          <h4>Гемоглобин, г/л</h4>
          <select name="" id="">
            <option value="0">120</option>
            <option value="1">101-120</option>
            <option value="2">80-100</option>
            <option value="3">80</option>
          </select>
        </div>

        <div>
          <h4>Тромбоциты (10/л)</h4>
          <select name="" id="">
            <option value="0">100-300</option>
            <option value="1">301-400</option>
            <option value="2">400, 100</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Tashxis;
