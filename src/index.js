import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greet from './Greet';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';
import Message from './Message'
import Parent from './simple parent child/Parent';
import ParentC from './context api/class components/Parent';
import ParentF from './context api/functional components/Parent';
import LifeCycleExample from './life cycle/life cycle';
import ConstructorExample from './life cycle/constructor example';
import Unmount from './life cycle/unmount';
import Update from './life cycle/update';
import ParentComponent from './pure component/ParentComponent';
import ClassCounter from './hooks/ClassCounter';
import HookCounter from './hooks/use state examples';
import UseEffectHook from './hooks/use effect examples';
import MouseTracking from './hooks/MouseTracking';
import Theme from './Theme change/Theme';
import HookExample from './hooks/use effect 2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  
    {/* <Greet name="Sai" />
    <Greet name="Kiran" other="other"/>
    <Greet name="E" />
    <Welcome name="sai"/>
    <Welcome name="Kiran"/> */}

    {/* <Message /> */}

    {/* <Parent/> */}
    
    {/* <LifeCycleExample/> */}


    {/* <ConstructorExample/> */}

    {/* <Unmount/> */}

    {/* <Update/> */}

    {/* <ParentComponent/> */}

    {/* <ClassCounter/> */}
    {/* <HookCounter/> */}



    {/* <UseEffectHook/> */}

    {/* <MouseTracking/> */}


    {/* <ParentF/> */}


    {/* <Theme/> */}


    <HookExample/>









    
    </>



  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
