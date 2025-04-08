"use client";
import { Image, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    gender: "",
    domisili: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: "",
    domisili: "",
  });

  const validateForm = () => {
    let newErrors = {
      fullName: "",
      username: "",
      dob: "",
      phone: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      terms: "",
      domisili: "",
    };

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!formData.fullName) newErrors.fullName = "Nama Lengkap wajib diisi";
    if (!formData.username) newErrors.username = "Username wajib diisi";
    if (!formData.dob) newErrors.dob = "Tanggal Lahir wajib diisi";
    if (!formData.phone) newErrors.phone = "Nomor HP wajib diisi";
    if (!formData.email) newErrors.email = "Email wajib diisi";
    if (!formData.address) newErrors.address = "Alamat wajib diisi";
    if (!formData.domisili) newErrors.domisili = "Domisili wajib diisi";

    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password harus minimal 8 karakter, kombinasi huruf & angka";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    if (!termsChecked)
      newErrors.terms = "Anda harus menyetujui syarat & ketentuan";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = () => {
    if (!validateForm()) return;
    alert(
      "Registrasi Berhasil! Auto-Upgrade Role & OTP Handling akan diterapkan nanti."
    );
  };

  return (
    <div className="flex h-screen bg-white items-center justify-center gap-4 p-4">
      <div className="hidden md:flex w-full md:w-1/2 h-full bg-black flex-col items-center justify-center rounded-3xl shadow-lg p-4 md:p-8 text-white">
        <img
          src="https://img.freepik.com/premium-vector/elegant-cosmetic-face-crem-jar-skin-care-black-background-beautiful-cosmetic-template-ads-makeup-products-brand-realistic-3d-black-matte-cosmetic-jar_195742-203.jpg"
          alt="Cosmetic Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-full bg-gray-100 flex flex-col items-center justify-start rounded-3xl shadow-lg p-4 md:p-8 text-black overflow-y-auto">
        <Image />
        <h2 className="text-2xl font-semibold mb-2">Join Khasfee Today</h2>
        <p className="text-gray-600 mb-6">Create an account to get started</p>
        <TextField
          fullWidth
          id="fullName"
          label="Nama Lengkap"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
        />
        <TextField
          fullWidth
          id="username"
          label="Username"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          fullWidth
          id="dob"
          label="Tanggal Lahir"
          margin="normal"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
          error={!!errors.dob}
          helperText={errors.dob}
        />
        <TextField
          fullWidth
          id="phone"
          label="Nomor HP"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          id="address"
          label="Alamat"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
        <TextField
          fullWidth
          id="domisili"
          label="Domisili"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          error={!!errors.domisili}
          helperText={errors.domisili}
        />
        <TextField
          fullWidth
          id="referral"
          label="Kode Referral (Opsional)"
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            error={!!errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </FormControl>

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </FormControl>

        <div className="flex items-center justify-between w-full mt-2">
          <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
            }
            label="I agree to the terms and conditions"
          />
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
        <Button
          onClick={handleRegister}
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "black",
            "&:hover": { backgroundColor: "#333" },
          }}
          disabled={!termsChecked}
        >
          Sign Up
        </Button>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
