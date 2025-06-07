import Display from "./Display";

const Statistic = ({ good, bad, neutral }) => {
    const sumAll = () => { return good + bad + neutral };
    const calculateAverage = () => { return sumAll() / 3 };
    const calculateGoodPercent = () => {
        if (good == 0) {
            return 0;
        }
        return ((good / sumAll()) * 100)
    };
    if (good == 0 && bad == 0 && neutral == 0) {
        return(
            <Display text={'No feedback given.'}/>
        )
    }
    return (
        <>
            <Display text='good' value={good} />
            <Display text='bad' value={bad} />
            <Display text='neutral' value={neutral} />
            <Display text='all' value={sumAll()} />
            <Display text='average' value={calculateAverage()} />
            <Display text='positive' value={calculateGoodPercent() + ' %'} />
        </>
    )
}

export default Statistic;