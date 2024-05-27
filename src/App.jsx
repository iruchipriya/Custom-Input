import Input from './Input';

function App() {
  const handleChange = () => {
    console.log('hlooe');
  };
  return (
    <>
      <Input onChange={handleChange} />
    </>
  );
}

export default App;
