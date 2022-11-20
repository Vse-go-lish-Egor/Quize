import {useEffect, useState} from 'react';
import {getQuotes, getRatings, Quotes, Result} from '../API';
import {getRandomAnswers} from '../utils/randomFunction';
type TypeOfData = 'rating' | 'quotes';
export const useGetData = (typeOfData: TypeOfData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Quotes[] | Result[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsLoading(true);
    if (typeOfData === 'quotes') {
      getQuotes()
        .then(response => setData(response.sort(() => Math.random() - 0.5)))
        .catch(errorResponse => setError(errorResponse))
        .finally(() => setIsLoading(false));
    } else {
      getRatings()
        .then(response => setData(response))
        .catch(errorResponse => setError(errorResponse))
        .finally(() => setIsLoading(false));
    }
  }, [typeOfData]);
  return {isLoading, data, error};
};

export interface QuestionModel {
  round: number;
  question: Quotes;
  answers: Quotes[];
}

export const useSetQuoteModel = (data: Quotes[]) => {
  const [questionModel, setQuestionModel] = useState<QuestionModel>({
    round: 0,
    answers: [],
    question: {authorName: '', quote: ''},
  });
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const setSelectAnswer = (answer: string): boolean => {
    setTimeout(() => setNumberOfQuestion(numberOfQuestion + 1), 1500);
    if (answer === questionModel.question.authorName) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
      console.log(numberOfCorrectAnswers);
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (data.length) {
      setQuestionModel({
        answers: [...getRandomAnswers(data, numberOfQuestion)],
        question: data[numberOfQuestion],
        round: numberOfQuestion + 1,
      });
    }
  }, [data, numberOfQuestion]);
  return {questionModel, setSelectAnswer, numberOfCorrectAnswers};
};
