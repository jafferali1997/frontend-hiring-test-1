import React  from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./Navigation/RouterConfig.jsx";
import { ProvideAuth } from "./customHooks/ProvideAuth.jsx";

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
