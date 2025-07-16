import { useAuth } from "@/auth/AuthProvider";
import S from "./Product.module.css";
import { useRouter } from "@/router/RouterProvider";
import useProducts from "@/hook/useProducts";

function Product() {
  const { isAuth } = useAuth();
  const { products, loading } = useProducts();
  const { setHistoryRoute } = useRouter();
  if (!isAuth) {
    return (
      <div className={S.invalid}>
        <span style={{ fontSize: "10rem", marginBottom: "0.5rem" }}>😥</span>
        <h3>상품 목록은 로그인 후 이용 가능합니다.</h3>
        <a href="#">회원가입 하시겠습니까?</a>
      </div>
    );
  }
  const handleRouter  = (e:React.MouseEvent<HTMLAnchorElement>, id:string) => {
    e.preventDefault();
    history.pushState(null, '', `Product/${id}`)
    setHistoryRoute(`/Product/${id}`)
  }
  if(loading) return <p>로딩 중 . . . . .</p>

  return (
    <div className={S.container}>
      <ul>
        {
          products &&
          products.map((item)=>(
            <li key={item.id}>
              <a href="#" onClick={(e) => handleRouter(e, item.id)}>
                <figure>
                  <img src={item.image_url} alt="" />
                </figure>
                <span className={S.brand}>{item.name}</span>
                <span className={S.description}>{item.description}</span>
                <span className={S.price}>{item.price.toLocaleString()}원</span>
                <div>
                  <span className={S.discount}>{item.sale}%</span>
                  <span className={S.realPrice}>{(item.price - (item.price * (item.sale * 0.01))).toLocaleString()}원</span>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default Product;