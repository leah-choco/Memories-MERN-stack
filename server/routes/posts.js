import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

//This file structure will allow us to easily keep this file clean and add logic into controllers
router.get("/", getPosts);
router.post("/", createPost);

export default router;
