import React from "react";
import "./App.css";

const LogContext = React.createContext({ log: () => {} });

function App() {
  const consoleLogger = (message) => {
    console.log(message);
  };

  const listLogger = () => {
    const log = [];
    const logger = (message) => {
      log.push(message);

      // just so we can see it!
      console.log({ log })
    };
    return logger;
  };

  return (
    <div className="App">
      <LogContext.Provider value={{ log: consoleLogger }}>
        <Component />
      </LogContext.Provider>

      <LogContext.Provider value={{ log: listLogger() }}>
        <Component />
      </LogContext.Provider>
    </div>
  );
}

function Component() {
  return (
    <LogContext.Consumer>
      {(value) => {
        value.log("Hello, World!");

        return <div>Hello</div>;
      }}
    </LogContext.Consumer>
  );
}

export default App;
