import express from "express";
import supabase from "../lib/supabase.js";

const router = express.Router();

router.get("/:book_id", async (req, res) => {
  const { book_id } = req.params;

  const { data, error } = await supabase
    .from("discrepancy_log")
    .select("*")
    .eq("book_id", book_id)
    .order("created_at", { ascending: false });

  if (error) return res.status(400).json({ error });
  res.json(data);
});

export default router;