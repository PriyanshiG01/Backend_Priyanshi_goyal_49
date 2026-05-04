const urlmod = require("../models/urlmodel");
const { nanoid } = require("nanoid");

async function generateurl(req, res) {
    const { url } = req.body;   // we expect 'url'

    if (!url) {
        return res.status(400).json({ error: "please provide a url" });
    }

    const shorturl = nanoid(8);

    const newEntry = await urlmod.create({
        shorturl: shorturl,
        actualurl: url
    });

    res.json({
        message: "short url created",
        shorturl: shorturl,
        data: newEntry
    });
}

module.exports = generateurl;
