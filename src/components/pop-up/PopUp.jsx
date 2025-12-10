
import "./popUp.css";

const PopUp = ({ isOpen, mode = "signin", onClose, onSwitchMode }) => {
  if (!isOpen) return null;

  const isSignIn = mode === "signin";

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        
        <h2 className="auth-title">
          {isSignIn ? "Welcome Back!" : "Welcome!"}
        </h2>

        <div className="auth-inner-card">
          {/* form */}
          <form className="auth-form">
            {!isSignIn && (
              <>
                <label>
                  <span>Username</span>
                  <input type="text" placeholder="Your Name" />
                </label>

                <label>
                  <span>Email</span>
                  <input type="email" placeholder="you@example.com" />
                </label>
              </>
            )}

            {isSignIn && (
              <label>
                <span>Username/Email</span>
                <input type="text" placeholder="Lena Choukor" />
              </label>
            )}

            <label>
              <span>Password</span>
              <input type="password" placeholder="••••••••" />
            </label>

            {!isSignIn && (
              <label>
                <span>Password Confirmation</span>
                <input type="password" placeholder="••••••••" />
              </label>
            )}

            <div className="auth-buttons-row">
              <button type="submit" className="btn-primary-outline">
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
              <span className="auth-or">Or</span>
              <button type="button" className="btn-primary-filled">
                {isSignIn ? "Sign In With Google" : "Sign Up With Google"}
              </button>
            </div>
          </form>

          {/* footer switch text */}
          <p className="auth-switch-text">
            {isSignIn ? "Don’t have an account? " : "Already have an account? "}
            <button
              type="button"
              className="auth-switch-link"
              onClick={onSwitchMode}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        {/* close button (optional) */}
        <button className="auth-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default PopUp;
