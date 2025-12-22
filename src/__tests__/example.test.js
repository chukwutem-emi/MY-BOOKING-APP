import { screen, render, fireEvent } from "@testing-library/react";
import GetUserDom from "../UserDom/GetUserDom";
import "@testing-library/jest-dom"


// The /i you are seeing is a regular expression (regex) flag that means "case-insensitive".
describe("GetUserDom Component", () => {
  test("renders fetch button with correct text when hasFetch is false", () => {
    render(<GetUserDom hasFetch={false} loading={false}/>);

    const button = screen.getByRole("button", {name:/fetch/i});
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
  test("renders 'Refetch' when hasFetch is true", () => {
    render(<GetUserDom hasFetch={true} loading={false}/>);
    const button = screen.getByRole("button", {name: /reFetch/i});
    expect(button).toBeInTheDocument();
  });
  test("disables button and shows loading text when loading is true", () => {
    render(<GetUserDom hasFetch={false} loading={true}/>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/processing/i);
  });

  test("calls handleGetUser when button is clicked", () => {
    const mockFn = jest.fn();
    render(
      <GetUserDom hasFetch={false} handleGetUser={mockFn}/>
    );
    const button = screen.getByRole("button", {name: /fetch/i});
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  test("display success response message when responseMsg is object", () => {
    const responseMsg = {
      username : "john",
      email_address: "john@gmail.com",
      phone_number: "123456789",
      admin: false,
      role: "user",
    };
    render(<GetUserDom responseMsg={responseMsg} errorMsg={false}/>);
    expect(screen.getByText(/username:/i)).toBeInTheDocument();
    expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/No/i)).toBeInTheDocument();
  });
  test("clicking cancel button clears responseMsg", () => {
    const mockSetResponseMsg = jest.fn();
    render(
      <GetUserDom
      responseMsg="Test Message"
      errorMsg={false}
      setResponseMsg={mockSetResponseMsg} 
      />
    );
    const cancelBtn = screen.getByRole("button", {name:/cancel/i});
    fireEvent.click(cancelBtn);
    expect(mockSetResponseMsg).toHaveBeenCalledWith("");
  });
  test("displays error text when errorMsg is true", () => {
    render(<GetUserDom responseMsg="User not found" errorMsg={true}/>);
    const box = screen.getByTestId("response-box");
    expect(box).toHaveClass("text-red-700");
    expect(box).toHaveClass("bg-red-50");
    const msgNode = screen.getByText(/user not found/i);
    expect(msgNode).toBeInTheDocument();
  });
  test("display string responseMsg when responseMsg is string", () => {
    render(<GetUserDom responseMsg="Hello world" errorMsg={false}/>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
})
