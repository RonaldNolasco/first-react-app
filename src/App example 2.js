import './App.css';

function App() {
  const blogObj = {
    title: 'Blog Tittle 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
  }

  const styles = {
    margin: '16px',
    padding: '16px',
    borderRadius: '5px',
    boxSizing: 'border-box',
    boxShadow: '0 2px 5px #ccc'
  }

  return (
    <div className="App">
      <div style={styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <hr />
      <div>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <hr />
      <div className="BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>

    </div>
  );
}

export default App;
