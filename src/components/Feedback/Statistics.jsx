import React from "react";
import { Values, ValuesItem } from "./Feedback.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Values>
    <ValuesItem>good: {good}</ValuesItem>
    <ValuesItem>neutral: {neutral}</ValuesItem>
    <ValuesItem>bad: {bad}</ValuesItem>```
    <ValuesItem>total: {total}</ValuesItem>
    <ValuesItem>positive feedback: {positivePercentage}%</ValuesItem>
  </Values>
);

export default Statistics;
