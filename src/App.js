import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ value, text, percentage = false }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>
        {value} {percentage ? "%" : null}
      </td>
    </tr>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };

  return (
    <div>
      <h1>Give us feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <h1>Statistics</h1>
      {all ? (
        <table>
          <tbody>
            <Statistics text="Good" value={good} />
            <Statistics text="Neutral" value={neutral} />
            <Statistics text="Bad" value={bad} />
            <Statistics text="All" value={all} />
            <Statistics text="Average" value={average / all} />
            <Statistics text="Positive" value={(good / all) * 100} percentage />
          </tbody>
        </table>
      ) : (
        <p>No feedback has yet been given</p>
      )}
    </div>
  );
}

export default App;
