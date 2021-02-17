import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

const router = express.Router();

export const getPost = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req,res) => {
    const { movieTitle, creator, priority, submittedOn } = req.body;
    const newPostMessage = new PostMessage({ movieTitle, creator, priority, submittedOn })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deletePost = async (req, res) => {
    console.log(req.params.id)
    const { id } = req.params.id
    PostMessage.findByIdAndRemove(id, (error, data) => {
        if (error) {
            console.log("ERROR:", error)
        } else {
            console.log("deleted successfully")
        }
    });
}