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
        return (
            <Display text={'No feedback given.'} />
        )
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <StatisticLine text='good' value={good} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StatisticLine text='bad' value={bad} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StatisticLine text='neutral' value={neutral} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StatisticLine text='all' value={sumAll()} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StatisticLine text='average' value={calculateAverage()} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StatisticLine text='positive' value={calculateGoodPercent() + ' %'} />
                        </td>
                    </tr>
                </tbody>
            </table >
        </>
    )
}

export default Statistic;