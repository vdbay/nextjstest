"use client";
import { Image, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [captchaRequired, setCaptchaRequired] = useState(false);
  const [role, setRole] = useState("customer"); // customer | affiliator
  const [resendTime, setResendTime] = useState(0); // Default tidak ada cooldown
  const [resendDisabled, setResendDisabled] = useState(false);
  const [isFirstSend, setIsFirstSend] = useState(true); // Untuk kontrol tombol pertama kali

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendDisabled && resendTime > 0) {
      timer = setInterval(() => {
        setResendTime((prev) => prev - 1);
      }, 1000);
    } else if (resendTime === 0) {
      setResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [resendDisabled, resendTime]);

  const handleSendResetLink = () => {
    alert(`Reset link sent to ${resetEmail}`);
    setIsFirstSend(false); // Ubah state agar tombol berubah jadi "Resend Email"
    setResendDisabled(true);
    setResendTime(60); // Set cooldown 1 menit
    // Redirect ke halaman reset password in new tab
    window.open("/reset-password", "_blank");
  };

  const handleResendEmail = () => {
    alert(`Resend link sent to ${resetEmail}`);
    setResendDisabled(true);
    setResendTime(60); // Set cooldown 1 menit lagi
    window.open("/reset-password", "_blank");
  };

  const togglePasswordVisibility = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    if (failedAttempts >= 2) setCaptchaRequired(true);
    if (failedAttempts >= 4) {
      alert("Too many failed attempts. Please wait or complete CAPTCHA.");
      return;
    }
    setFailedAttempts((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen bg-white items-center justify-center gap-4 p-4">
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 h-full bg-gray-100 flex flex-col items-center justify-center rounded-3xl shadow-lg p-4 md:p-8 text-black">
        <Image />
        <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
        <p className="text-gray-600 mb-6">Sign in to continue</p>

        <TextField
          fullWidth
          id="email"
          label="Email"
          margin="normal"
          variant="outlined"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {captchaRequired && (
          <p className="text-red-500">Please complete CAPTCHA</p>
        )}

        <div className="flex items-center justify-between w-full mt-2">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setOpenForgotPassword(true)}
          >
            Forgot Password?
          </button>
        </div>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "black",
            "&:hover": { backgroundColor: "#333" },
          }}
          onClick={handleLogin}
        >
          Sign In
        </Button>

        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex w-full md:w-1/2 h-full bg-black flex-col items-center justify-center rounded-3xl shadow-lg p-4 md:p-8 text-white">
        <img
          src="https://img.freepik.com/premium-vector/elegant-cosmetic-face-crem-jar-skin-care-black-background-beautiful-cosmetic-template-ads-makeup-products-brand-realistic-3d-black-matte-cosmetic-jar_195742-203.jpg"
          alt="Cosmetic Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Forgot Password Dialog */}
      <Dialog
        open={openForgotPassword}
        onClose={() => setOpenForgotPassword(false)}
      >
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email address and we will send you a link to reset your
            password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="reset-email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForgotPassword(false)}>Cancel</Button>

          {/* Awalnya "Send Reset Link", kemudian berubah ke "Resend Email" */}
          {isFirstSend ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendResetLink}
              disabled={!resetEmail} // Disable jika email kosong
            >
              Send Reset Link
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              disabled={resendDisabled}
              onClick={handleResendEmail}
            >
              {resendDisabled ? `Resend in ${resendTime}s` : "Resend Email"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
