import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

const router = express.Router();

export const createPost = async (req,res) => {
    const { movieTitle, creator, priority, submittedOn } = req.body;
    const newPostMessage = new postMessage({ movieTitle, creator, priority, submittedOn })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}