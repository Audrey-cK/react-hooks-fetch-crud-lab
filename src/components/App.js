import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

const handleAddQuestion = () => {
    setPage("Form");
  };

  const handlePageChange = (pageName) => {
    setPage(pageName);
  };

  
 return (
    <main>
      <AdminNavBar onChangePage={handlePageChange} onAddQuestion={handleAddQuestion} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={() => handlePageChange("List")} />
      ) : (
        <QuestionList />
      )}
    </main>
  );
}


export default App;
