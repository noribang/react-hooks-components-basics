import React from "react";
import Article from "./Article";
import Comment from "./Comment";

// function App() {
//   return (
//     <div>
//       <Article />
//       <Comment />
//     </div>
//   );
// }

// export default App;

function article() {
  return <div>Dear reader: ,,,,
</div>
}

function App() {
  return (
    <div>
      {/* <article /> */}
      <Article />
      <Comment />
    </div>
  )
}

export default App