import Part from '../src/Part';

const Content = (props) => {
    return (
        <>
            <p>
                <Part part={props.part1} exercise={props.exercises1} />
            </p>
            <p>
                <Part part={props.part2} exercise={props.exercises2} />
            </p>
            <p>
                <Part part={props.part3} exercise={props.exercises3} />
            </p>
        </>
    );
}

export default Content;