import React from 'react';
import ClickCount from "./components/ClickCount";
import HoverCount from "./components/HoverCount";
import User from "./components/User";
import CommonCount from "./components/CommonCount";



function App() {
  return (
    <div className="App">
      {/*<ClickCount/>*/}
      {/*<HoverCount/>*/}
      {/* <User userName={(isLoggedIn:boolean)=> isLoggedIn ? 'hello kamal' : 'bye'} />*/}

       {/*<CommonCount getCount={(count:number,countIncrement:any)=>*/}
       {/*    <ClickCount*/}
       {/*    count={count}*/}
       {/*    countIncrement={countIncrement}*/}
       {/*    />*/}
       {/*}/>*/}

       {/*<CommonCount getCount={(count:number,countIncrement:any)=>*/}
       {/*    <HoverCount*/}
       {/*    count={count}*/}
       {/*    countIncrement={countIncrement}*/}
       {/*    />*/}
       {/*}/>*/}

       {/* mehema open close tag athule liyanath puluwan <CommonCount></CommonCount>*/}
       {/* this.props.children(this.state.count,this.countIncrement) meka thule children keyword eka dala thiyanne one*/}
       <CommonCount>
           {(count:number,countIncrement:any)=>
               <ClickCount
                   count={count}
                   countIncrement={countIncrement}
               />
           }
       </CommonCount>


    </div>
  );
}

export default App;
