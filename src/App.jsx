import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "Title 1",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Title 2",
    question:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45BC",
  },

  {
    id: 3,
    title: "Title 3",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function App() {
  const [accordionSelected, setAccordionSelected] = useState(null);

  function handleAccordionSelection(currentAccordionSelected) {
    if (accordionSelected === currentAccordionSelected) {
      return setAccordionSelected(null);
    }
    setAccordionSelected(currentAccordionSelected);
    console.log(accordionSelected);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div key={item.id} className="accordion__item">
            <div
              className="accordion__title"
              onClick={() => handleAccordionSelection(index)}
            >
              <h2>{item.title}</h2>
              <span className="accordion__title--icon">
                {accordionSelected === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`accordion__content ${
                accordionSelected === index ? "show" : ""
              }`}
            >
              {item.question}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
