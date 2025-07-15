import { useState } from "react";
import Parent from "./Parent";
import { UserContext } from "./UserContext";



// props drilling
function App() {
  const [username, setUsername] = useState("u_s_e_r");
  return (
    <UserContext value={{username}}>
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
        }}
      >
        <h1>버튼을 클릭하면 사용자가 변경됩니다.</h1>
        <Parent username={username} />
        <button type="button">사용자 변경</button>
      </div>
    </UserContext>
  );
}
export default App;
