import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from '../store/store';
const RootLayout = () => {
  return (
    <>
  <Provider store={store}>
    <NavBar/>
      <main>
      <Outlet/>
      </main>
      </Provider>
    </>
  )
}

export default RootLayout
/* 

The <Provider> component from the React Redux library is a crucial part of integrating Redux with a React application. Its primary role is to make the Redux store available to all components in the React component tree. */