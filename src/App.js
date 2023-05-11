
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import image from'./proj.png.png'
function App() {
  
   const handleName  = fullName => {
    alert(`Alert ${fullName}`);
  };
  const Styleobject={color:"red" ,textAling:"center"}
  return (
    <div className="App" style={Styleobject}>

      <ProfileComponent
      fullName={'hanen'}
      bio={'Mon sens de responsabilité, mon autonomie, mon esprit d’équipe et d’initiative, ainsi que ma formation sont des atouts que je souhaite partager avec vous'}
      profession={'student FuLLStak js'}
        handleName={handleName}

       >
      <img src={image}/>
       </ProfileComponent>

    </div>
  );
}

export default App;
