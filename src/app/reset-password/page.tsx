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
import React, { useState } from "react";

export default function ResetPasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const togglePasswordVisibility = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowConfirmPassword((prev) => !prev);
    };

    const isValidPassword = (password: string) => {
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
        alert("Password berhasil direset.");
    };

    return (
        <div className="flex h-screen bg-white items-center justify-center p-4 md:p-8">
            <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-100 flex flex-col items-center justify-center rounded-3xl shadow-lg p-10 text-black">
                <Typography variant="h5" className="mb-4 font-semibold">
                    Reset Password
                </Typography>
                <Typography className="text-gray-600 mb-6 text-center">
                    Masukkan password baru Anda.
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
            </div>
        </div>
    );
}
