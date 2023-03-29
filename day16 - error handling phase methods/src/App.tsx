import React from 'react';
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";


function App() {
  return (
    <div className="App">
        {/*development env wala react la kohomath error eka pennawa / production ekata dana koka mehema danne*/}
      <ErrorBoundary>
          <Hero heroName="batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="super man"/>
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="joker"/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
