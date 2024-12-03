const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string()
})

router.post("/signup", (req,res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = User.findOne()
})

module.exports = router;