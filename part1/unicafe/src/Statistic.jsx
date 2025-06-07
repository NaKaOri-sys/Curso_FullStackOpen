import Display from "./Display";
import StatisticLine from "./StatisticLine";

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
            <StatisticLine text='good' value={good} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='all' value={sumAll()} />
            <StatisticLine text='average' value={calculateAverage()} />
            <StatisticLine text='positive' value={calculateGoodPercent() + ' %'} />
        </>
    )
}

export default Statistic;