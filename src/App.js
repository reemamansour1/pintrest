import './App.css';
import Header from './components/Header';
import photo from './assets/photo.jpeg';
import photo1 from './assets/photo1.jpeg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"content-container"}>
        <img src={photo} width={300} className={"content"}/>
        <img src={photo1} width={300} className={"content"}/>
        <img src={photo2} width={300} className={"content"}/>
        <img src={photo3} width={300} className={"content"}/>
        <img src={photo} width={300} className={"content"}/>
        <img src={photo1} width={300} className={"content"}/>
        <img src={photo2} width={300} className={"content"}/>
        <img src={photo3} width={300} className={"content"}/>
      </div>
    </div>
  );
}

export default App;
