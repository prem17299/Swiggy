import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./../components/Header";
import { screen, render, fireEvent } from "@testing-library/react";
import { appStore } from "../redux/appStore";
import "@testing-library/jest-dom";

describe("Header Component Test cases", () => {
  it("should render Header Component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("should render Header Component with a Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItem = screen.getByText(/cart/i);
    expect(cartItem).toBeInTheDocument();
  });

  it("should change Login button to Logout button on Click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
