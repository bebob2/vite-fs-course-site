import React from "react";
import { Part } from "./part";

export const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((course, index) => {
        const { name, exercises } = course;
        return (
          // <p key={index}>
          //   "{course.name}" || {course.exercises} exercises
          // </p>
          <Part key={index} name={name} exercises={exercises} />
        );
      })}
    </div>
  );
};
