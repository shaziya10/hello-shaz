import React from 'react';
import classprops from "./classprops";
import functionprops from "./functionprops";
class App extends React.Component{
 render() {
 return (
 <div>
 <Classprops name="Learner1" place="Bagepalii"></Classprops>
 <p>Child Component</p>
 <Classprops name="Learner2" place="Banglore"></Classprops>
 <button>Click</button>
 <Classprops name="Learner3" place="Mysore"></Classprops>
 <Functionprops name="Learner4" place="Madikeri"/>
 </div>
 );
 }
}
export default App; 
