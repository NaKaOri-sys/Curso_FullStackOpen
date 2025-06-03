import Part from '../src/Part';

const Content = (props) => {
    console.log(props)
    return (
        <>
            <p>
                <Part part={props.part1.name} exercise={props.part1.exercises} />
            </p>
            <p>
                <Part part={props.part2.name} exercise={props.part2.exercises} />
            </p>
            <p>
                <Part part={props.part3.name} exercise={props.part3.exercises} />
            </p>
        </>
    );
}

export default Content;