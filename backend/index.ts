import express from "express";

const app = express();

app.use(express.json());

app.post("/ask_endpoint",async (req , res) => {
    //get the query from user 
    const query = req.body.query;
    //make sure user has acess and cerdits to hit the endpoints
    //web search to gether resourses
    //do context enginerring on prompt = web search responses
    //hit the llm and stream back the response 
    // also stream back the sources and the follow up questions 

    
});


app.listen(3000);