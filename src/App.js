
import './styles.css';
import inSrcImage from "./imageInSrc.png"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className="title red">Your name here</h1>
        <br/>
        <img src={inSrcImage}/>
        <br/>
        <img src="imageInPublic.png"/>
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
