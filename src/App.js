 
import {Switch, Route } from 'react-router'; 
import Home from './components/Home'; 
import Feature from './components/Feature'; 
import Pricing from './components/Pricing'; 
import Contact from './components/Contact'; 
import './style/app.scss';   

function App() {
  return (
    <>   
    <Switch>
      <Route exact path="/" component={Home}/> 
      <Route  path="/Feature" component={Feature}/>
      <Route path="/Pricing" component={Pricing}/>
      <Route path="/Contact" component={Contact}/>
    </Switch> 
    </>
  );
}

export default App;
