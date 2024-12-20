import React from "react";
import BookList from "./BookList";
import BookContextProvider from "../Context/BookContext";
class App extends React.Component {
  render() {
    return (
      <div>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
