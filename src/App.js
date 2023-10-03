import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/id/288/60/60",
    name: "나길동",
    birthday: "20010101",
    gender: "남자",
    job: "프로그래머",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/289/60/60",
    name: "너순애",
    birthday: "19991230",
    gender: "여자",
    job: "웹디자이너",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/290/60/60",
    name: "우리팀",
    birthday: "19901010",
    gender: "남자",
    job: "P.M.",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
