import { Image, VisibilityOff, Visibility } from "@mui/icons-material";
import {
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginForm() {
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
    );
}
