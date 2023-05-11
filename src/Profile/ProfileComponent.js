import '../App.css'

function ProfileComponent({fullName,bio,profession,children,handleName}) {
 
    return (
    <div className="App">
         <p>{fullName}</p>
      <p>{bio}</p>
      <p>{profession}</p>
      {children} 
      <p><button onClick={()=>{handleName(fullName)}}>click me !</button></p>
     </div>
  );

}
ProfileComponent.defaultProps={
    bio:"this is the defaultProps"
}
export default ProfileComponent;
