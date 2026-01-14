import React, { useEffect } from "react";
import { AuthTemplate } from "../../templates/AuthTemplate/AuthTemplate";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  console.log("import.meta.env:", import.meta.env);
  console.log("API_URL:", import.meta.env.VITE_API_URL);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.ok) navigate("/", { replace: true });
        else localStorage.removeItem("token");
      })
      .catch(() => localStorage.removeItem("token"));
  }, [navigate]);

  return <AuthTemplate initialView="register" />;
};
