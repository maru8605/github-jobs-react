import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import {Container} from 'react-bootstrap';

function App() {

  const {jobs, loading, error} = useFetchJobs()
  return (
    <Container>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error, try again.</h1>}
      <h2>{jobs.length}</h2>
    </Container>
  );
}

export default App;
