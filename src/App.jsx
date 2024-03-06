import React from 'react'
import FunctionalCounterComponent from './components/FunctionalCounterComponent/FunctionalCounterComponent' 
import ClassCounterComponent from './components/ClassCounterComponent/ClassCounterComponent'
import GreetFunctionalComponent from './components/GreetFunctionalComponent/GreetFunctionalComponent'
const App = () => {
  return (
    <React.Fragment>
    <FunctionalCounterComponent/>
    <ClassCounterComponent></ClassCounterComponent>
    <GreetFunctionalComponent username="Divya"/>
    </React.Fragment>
  )
}

export default App