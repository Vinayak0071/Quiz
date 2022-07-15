import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import he from "he";
import { Game } from "./Game";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { useContext } from "react";
import { UrlContext } from "../context/UrlContext";

export const Quiz = (props) => {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    err: "",
    data: null,
  });
  let { Url } = useContext(UrlContext);

  useEffect(() => {
    async function getQuiz() {
      try {
        // console.log(Url);
        const url = Url;
        const response = await fetch(url);
        const json = await response.json();
        const { response_code, results } = json;
        const decodedResults = results.map((i) => {
          return {
            ...i,
            question: he.decode(i.question),
            correct_answer: he.decode(i.correct_answer),
            incorrect_answers: i.incorrect_answers.map((inc) => he.decode(inc)),
          };
        });
        // console.log(decodedResults);
        setQuizFetch({
          isLoading: false,
          err: "",
          data: decodedResults,
        });
      } catch (e) {
        setQuizFetch({
          isLoading: false,
          err: "Something went wrong plz try again later",
          data: null,
        });
      }
    }
    getQuiz();
  }, []);
  const { isLoading, err, data } = quizFetch;
  let contents;
  if (isLoading) contents = <Loading />;
  else if (err !== "") contents = <Error />;
  else contents = <Game data={data} />;
  return <div>{contents}</div>;
};
