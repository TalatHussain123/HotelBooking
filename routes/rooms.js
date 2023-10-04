import express from 'express';
import { createRoom, deleteRoom, getRoom, getallRooms, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router()


//create
router.post("/:hotelid", verifyAdmin, createRoom)
//update
router.put("/:id", verifyAdmin, updateRoom)
// delete
router.delete("/:id", verifyAdmin, deleteRoom)
// get
router.get("/:id", getRoom)
// getall
router.get("/", getallRooms)

export default router