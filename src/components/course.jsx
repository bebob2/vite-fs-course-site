import { Content } from "./content.jsx";
import { Header } from "./header.jsx";

export const Course = ({ course }) => {
  const totalExercises = () => {
    return course.parts.reduce((total, part) => total + part.exercises, 0);
  };

  return (
    <>
      <Header courseName={course.name} />

      <Content course={course} />

      <p>Total exercises: {totalExercises()}</p>
    </>
  );
};
