const Total = ({ parts }) => {
    let totalExercises = parts.reduce((acum, part) => acum + part.exercises, 0);
    return (
        <p><b>Number of exercises {totalExercises}</b></p>
    );
};
export default Total;