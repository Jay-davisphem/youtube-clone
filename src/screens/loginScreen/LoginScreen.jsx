import "./_loginScreen.scss";

function LoginScreen() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pngimg.com/uploads/youtube/youtube_PNG15.png"
          alt=""
        />
        <button>Login With Google</button>
        <p>Project's made using Youtube DATA API</p>
      </div>
    </div>
  );
}
export default LoginScreen;
