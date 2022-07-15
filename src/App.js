import { Quiz } from "./components/Quiz";
import { Choice } from "./components/Choice";
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";
import { useContext } from "react";
import { LoginContext } from "./context/loginContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Nav } from "./components/Nav";
import { List } from "./components/List";
import { Single } from "./components/Single";
import { Temp } from "./components/Temp";
import { Read } from "./components/Read";
import { Calculations } from "./components/Calculations";

function App() {
  const { currentUser } = useContext(LoginContext);
  const ReqAuth = ({ children }) => {
    if (currentUser) return children;
    else return <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            index
            element={
              <ReqAuth>
                <Welcome />
              </ReqAuth>
            }
          />
          <Route
            path="quiz"
            element={
              <ReqAuth>
                <Quiz />
              </ReqAuth>
            }
          />
          <Route
            path="choice"
            element={
              <ReqAuth>
                <Choice />
              </ReqAuth>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <ReqAuth>
                  <List />
                </ReqAuth>
              }
            />
            <Route
              path=":userid"
              element={
                <ReqAuth>
                  <Single />
                </ReqAuth>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // <Read />
  );
}

export default App;
