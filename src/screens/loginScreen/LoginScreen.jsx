import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import "./_loginScreen.scss";
import { login } from "../../redux";

function LoginScreen() {
  const dispatch = useDispatch();

  const accessToken = useSelector(state => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pngimg.com/uploads/youtube/youtube_PNG15.png"
          alt=""
        />
        <button onClick={handleLogin}>Login With Google</button>
        <p>Project's made using Youtube DATA API</p>
      </div>
    </div>
  );
}
export default LoginScreen;
