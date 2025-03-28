"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";

export default function ResetPasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [timeLeft, setTimeLeft] = useState(600); // 10 menit (600 detik)
    const [resendDisabled, setResendDisabled] = useState(true);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setResendDisabled(false);
        }
    }, [timeLeft]);

    const togglePasswordVisibility = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setShowConfirmPassword((prev) => !prev);
    };

    const isValidPassword = (password: string |string) => {
        return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
    };

    const handleResetPassword = () => {
        if (!isValidPassword(newPassword)) {
            alert("Password harus minimal 8 karakter dan mengandung angka serta huruf.");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }
        alert("Password has been reset successfully.");
    };

    const handleResendEmail = () => {
        setTimeLeft(600);
        setResendDisabled(true);
        alert("Email reset password telah dikirim ulang.");
    };

    return (
        <div className="flex h-screen bg-white items-center justify-center p-4">
            <div className="w-1/3 bg-gray-100 flex flex-col items-center justify-center rounded-3xl shadow-lg p-10 text-black">
                <Typography variant="h5" className="mb-4 font-semibold">
                    Reset Your Password
                </Typography>
                <Typography className="text-gray-600 mb-6 text-center">
                    Enter your new password below.
                </Typography>
                <Typography className="text-red-500 text-sm mb-4">
                    Link reset password akan expired dalam {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")} menit
                </Typography>
                
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="new-password">New Password</InputLabel>
                    <OutlinedInput
                        id="new-password"
                        type={showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="New Password"
                    />
                </FormControl>
                
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Confirm Password"
                    />
                </FormControl>
                
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, backgroundColor: "black", "&:hover": { backgroundColor: "#333" } }}
                    onClick={handleResetPassword}
                >
                    Reset Password
                </Button>
                <Button
                    variant="text"
                    fullWidth
                    sx={{ mt: 2, color: "black" }}
                    onClick={handleResendEmail}
                    disabled={resendDisabled}
                >
                    Kirim Ulang Email
                </Button>
            </div>
        </div>
    );
}
