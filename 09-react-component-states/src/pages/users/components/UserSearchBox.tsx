import { useId } from "react";
import "./UserSearchBox.css";
import { throttle } from "@/utils/throttle";
import { debounce } from "@/utils/debounce";

interface Props {
  onSearch: (userInput: string) => void;
  onReset: () => void;
  searchTerm: string;
  IsInstantSearch: boolean;
}
function UserSearchBox({
  onSearch,
  onReset,
  searchTerm,
  IsInstantSearch,
}: Props) {
  const id = useId();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById(id) as HTMLInputElement;
    const value = input.value.trim();

    if (value.length > 0) {
      onSearch?.(value);
      input.value = "";
    } else {
      alert("검색어를 입력해주세요.");
      input.value = "";
      input.focus();
    }
  };

  const handleReset = () => {
    onReset?.();
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value);
  // const handleChange = throttle((e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value), 600);
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value), 700);

  return (
    <form
      className="UserSearchBox"
      onSubmit={handleSearch}
      onReset={handleReset}
    >
      <div className="control">
        <label htmlFor={id}>
          사용자 검색{" "}
          <input
            type="search"
            id={id}
            placeholder="사용자 정보 입력"
            onChange={IsInstantSearch ? handleChange : undefined}
          />
        </label>
      </div>
      <button hidden={IsInstantSearch} type="submit">
        찾기
      </button>
      <button hidden={IsInstantSearch} type="reset">
        목록 초기화
      </button>
    </form>
  );
}

export default UserSearchBox;
