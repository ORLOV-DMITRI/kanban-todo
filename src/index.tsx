import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TaskProvider } from "./context/task/task-provider";
import { StatusProvider } from "./context/status/status-provider";
import { AuthorProvider } from "./context/author/author-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaskProvider>
      <StatusProvider>
        <AuthorProvider>
          <App />
        </AuthorProvider>
      </StatusProvider>
    </TaskProvider>
  </React.StrictMode>
);
