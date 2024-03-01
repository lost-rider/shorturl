const URL=require("../models/url");
let i=0;
const base="lost";
async function Generateshort(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'})
    const shortID=base+i;
    i++;

    try {
        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
        });

        return res.json({ id: shortID });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }    
}
module.exports={
    Generateshort,
}