import express from "express";
import supabase from "../lib/supabase.js";

const router = express.Router();

router.get("/:book_id", async (req, res) => {
  const { book_id } = req.params;

  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("book_id", book_id);

  if (error) return res.status(400).json({ error });
  res.json(data);
});

router.post("/", async (req, res) => {
  const payload = req.body;

  const { data, error } = await supabase
    .from("transactions")
    .insert(payload)
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data);
});

export default router;