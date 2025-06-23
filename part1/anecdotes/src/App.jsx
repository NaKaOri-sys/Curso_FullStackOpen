import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const votes = new Int16Array(anecdotes.length);
  const [countVotes, updateVotes] = useState(votes);
  const getRandomAnecdote = () => setSelected(Math.floor(Math.random()* (anecdotes.length)));
  const updatedVotes = [...countVotes];
  const updateVoteAnecdotes = () => {
    updatedVotes[selected]+=1;
    updateVotes(updatedVotes);
  };
  const mostVotesAnecdote = () => {
    const result = {anecdote: 'Actually, there are no votes.', votes: 0};
    updatedVotes.forEach((vote, i)=>{
      if (result.votes < vote) {
        result.votes = vote;
        result.anecdote = anecdotes[i];
      }
    });
    return result;
  };
  console.log(mostVotesAnecdote().anecdote);

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      </div>
       <div>
        has {countVotes[selected]} votes.
        </div>
      <div>
        <button onClick={getRandomAnecdote}>next anecdotes</button>
        <button onClick={updateVoteAnecdotes}>vote anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{mostVotesAnecdote().anecdote}</p>
        <p>{mostVotesAnecdote().votes == 0 ? '' : `has ${mostVotesAnecdote().votes} votes.`}</p>
      </div>
    </>
  )
}

export default App
