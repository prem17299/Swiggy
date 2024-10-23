import { Contact } from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test cases ", () => {
  it("Should load the contact US component ", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component ", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load input name  inside Contact component ", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Your Name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes  inside Contact component ", () => {
    render(<Contact />);
    const inpuyBoxes = screen.getAllByRole("textbox");
    expect(inpuyBoxes.length).toBe(2);
  });
});
