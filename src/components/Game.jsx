import React from "react";
import { useState } from "react";
import { Calculations } from "./Calculations";
import { Score } from "./Score";

export const Game = ({ data }) => {
  const [answer, setAnswer] = useState("");
  const [gameState, setGameState] = useState({
    score: 0,
    trivialInd: 0,
    isGameOver: false,
    startTime: performance.now(),
  });

  function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (sourceArray.length - i));

      let temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }

  function difftopoints(diff) {
    if (diff === "easy") return 1;
    else if (diff === "medium") return 2;
    else return 3;
  }

  const { score, trivialInd, isGameOver, startTime } = gameState;

  const numQues = data.length;

  if (trivialInd == numQues)
    return (
      <div>
        <Calculations score={score} ind={trivialInd} totalQ={numQues} />
      </div>
    );

  const playtime = (performance.now() - startTime) / 1000;
  const qno = trivialInd + 1;
  let tmp = data[trivialInd].incorrect_answers;
  let answers = [];
  tmp.map((k, i) => answers.push(k));
  let correct = data[trivialInd].correct_answer;
  answers.push(data[trivialInd].correct_answer);

  const restartGame = () => {
    setGameState({
      score: 0,
      trivialInd: 0,
      isGameOver: false,
      startTime: performance.now(),
    });
  };

  const loadNext = () => {
    if (trivialInd >= numQues)
      setGameState({
        ...gameState,
        trivialInd: trivialInd + 1,
      });
    else
      setGameState({
        ...gameState,
        isGameOver: true,
      });
  };

  const click = (e) => {
    setAnswer(answers[e.target.id]);
  };

  const options = answers.map((key, i) => {
    return (
      <div key={i} onClick={click}>
        <span id={i}>{key}</span>
      </div>
    );
  });

  const submit = (e) => {
    e.preventDefault();
    let point = score;
    // console.log(answer);
    // console.log(correct);
    if (answer === correct) point = point + 1;
    setGameState({
      ...gameState,
      score: point,
      trivialInd: trivialInd + 1,
    });
  };

  return (
    <div>
      <div>
        Question Number {qno}: {data[trivialInd].question}
        {options}
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
};
