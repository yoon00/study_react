import { routes } from "@/router/router";
import S from "./Header.module.css";
import NavLink from "../NavLink";
import { useAuth } from "@/auth/AuthProvider";
import Swal from "sweetalert2";
import { getAvatarUrl } from "@/api/getAvatarUrl";
import { useEffect, useState } from "react";

function Header() {
  const { user, isAuth, logout } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  const visibleRoutes = routes.filter(({ title }) => {
    if (isAuth) return title !== "로그인" && title !== "회원가입" && title !== '상품상세';
    else return title !== "회원가입";
  });

  useEffect(() => {
    if (user) {
      const fetchAvatarUrl = async() => {
        const url = await getAvatarUrl(user.id);
        setAvatarUrl(url);
        setIsAvatarLoaded(true);
      }
      fetchAvatarUrl();
    }
  }, [user]);

  return (
    <header className={S.header}>
      <h1>Apple</h1>
      <nav>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        <ul>
          {visibleRoutes.map(({ path, title }) => (
            <li key={path}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
          {isAuth && (
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  Swal.fire({
                    title: "로그아웃 하시겠습니까?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "로그아웃",
                    cancelButtonText: "돌아가기",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logout();
                    }
                  });
                }}
                href=""
              >
                로그아웃
              </a>
            </li>
          )}
          {isAvatarLoaded && <img style={{width:'30px', position:'absolute', right:'1px', top:'1px'}} src={avatarUrl ?? '/vite.svg'} alt="프로필" />}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
