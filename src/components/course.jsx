export const Course = ({ course }) => {
  const totalExercises = () => {
    return course.parts.reduce((total, part) => total + part.exercises, 0);
  };

  return (
    <>
      <h1>{course.name}</h1>

      <div>
        {course.parts.map((course, index) => (
          <p key={index}>
            "{course.name}" || {course.exercises} exercises
          </p>
        ))}
      </div>

      <p>Total exercises: {totalExercises()}</p>
    </>
  );
};
