const Total = ({ parts }) => {
    let totalExercises = parts.reduce((acum, part) => acum + part.exercises, 0);
    return (
        <p>Number of exercises {totalExercises}</p>
    );
};
export default Total;