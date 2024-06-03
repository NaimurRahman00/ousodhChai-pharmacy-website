import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { user, signIn, signInWithGoogle, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";

  // Go to homepage if you are already login
  useEffect(() => {
    if (user) {
      navigate("/");
      // toast.success('Already logged in!')
    }
  }, [navigate, user]);

  // Google sign in
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // toast.success('Log in successful!')
      navigate(from, {replace: true});
    } catch (err) {
      console.log(err);
      // toast.error(err?.message)
    }
  };

    // Email password sign in
    const handleSignIn = async e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      try {
        const result = await signIn(email, password)
        console.log(result)
        navigate('/')
        // toast.success('Sign in successful!')
      } catch (err) {
        console.log(err)
        // toast.error(err?.message)
      }
    }
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-t from-[#16191c] to-[#173003] overflow-hidden">
      <div className="bg-black/50 w-full min-h-screen flex justify-center items-center backdrop-blur-[5rem] z-20 ">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-transparent text-gray-900 border-black/50 border w-[40rem] shadow-2xl shadow-black">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-[#9fe870]">Log In</h1>
            <p className="text-sm text-lime-100/70">
              Sign in to access your account
            </p>
          </div>
          <form
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-[#72bb45]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#9fe870] bg-transparent text-white/80"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm mb-2 text-[#72bb45]"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#9fe870] bg-transparent text-white/80"
                />
              </div>
            </div>

            <div onClick={handleSignIn}>
              <button
                type="submit"
                className="bg-[#9fe870] font-bold text-xl w-full rounded-md py-3 text-[#16191c] hover:bg-transparent border border-black/0 hover:border-[#9fe870] transition-all hover:text-[#9fe870]"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button className="text-sm hover:underline text-lime-100/70 hover:text-[#9fe870]">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-base text-[#72bb45] font-semibold">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          {/* Google login */}
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border my-4 p-2 border-gray-300 border-rounded cursor-pointer bg-black/5 hover:bg-[#9fe870] hover:border-transparent py-2 transition-all rounded-lg"
          >
            <FcGoogle size={32} />

            <p className="text-black/85 font-bold">Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-lime-100/70">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-[#9fe870] text-black font-semibold text-base"
            >
              Sign up.
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute w-[50rem] h-[20rem] bg-gradient-to-r to-lime-300 from-blue-200 top-1/2 left-1/3 rounded-full rotate-45"></div>
    </div>
  );
};

export default Login;
