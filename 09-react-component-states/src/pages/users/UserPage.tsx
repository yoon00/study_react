import UserList from "@/pages/users/components/UserList";
import userData from "@/data/users.json";
import { useState } from "react";
import UserSearchBox from "./components/UserSearchBox";
import UserListCount from "./components/UserListCount";
import InstanceSearch from "./components/InstanceSearch";

function UserPage() {
  // 상태선언
  const [users] = useState(userData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isInstantSearch, setIsInstantSearch] = useState(false);

  // 상태 업데이트
  const handleSearch = (userInput: string) => setSearchTerm(userInput);
  const handleReset = () => setSearchTerm("");

  const searchedUserList = users.filter(
    (user) =>
      user.name.includes(searchTerm) ||
      user.email.includes(searchTerm) ||
      user.city.includes(searchTerm)
  );

  const handleToggleInstantSearch = () => setIsInstantSearch(!isInstantSearch);

  // 마크업(JSX)
  return (
    <div className="UserPage">
      <InstanceSearch
        onToggle={handleToggleInstantSearch}
        isInstantSearch={isInstantSearch}
      />
      <UserSearchBox
        IsInstantSearch={isInstantSearch}
        onSearch={handleSearch}
        onReset={handleReset}
        searchTerm={searchTerm}
      />
      <UserList users={searchedUserList} />
      <UserListCount
        searchedUsersCount={searchedUserList.length}
        totalUsersCount={users.length}
      />
    </div>
  );
}
export default UserPage;
