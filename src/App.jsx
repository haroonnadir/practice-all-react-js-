import './index.css'
import Header from './Header';

function App() {
  return (
    <>
      <Header />

      <section id="center">
        <h1>Welcome Home Page</h1>
      </section>

      <h1 className="text-3xl font-bold underline text-green-500">
        Hello World!
      </h1>
    </>
  );
}

export default App;