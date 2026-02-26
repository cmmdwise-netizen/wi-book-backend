import express from "express";
import supabase from "../lib/supabase.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });

  if (error) return res.status(400).json({ error });
  res.json({ user: data });
});

router.post("/login", (req, res) => {
  res.json({
    message: "Login should be handled client-side using Supabase Auth."
  });
});

export default router;