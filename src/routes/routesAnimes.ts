import { Router } from "express";

const routerAnimes = Router();

routerAnimes.get("/animes", (req, res) => {
    res.json({ message: "List of animes" });
});

routerAnimes.get("/animes/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Details of anime with ID: ${id}` });
});

routerAnimes.post("/animes", (req, res) => {
    const newAnime = req.body;
    res.status(201).json({ message: "Anime created", anime: newAnime });
});
routerAnimes.put("/animes/:id", (req, res) => {
    const { id } = req.params;
    const updatedAnime = req.body;
    res.json({ message: `Anime with ID: ${id} updated`, anime: updatedAnime });
});

routerAnimes.delete("/animes/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Anime with ID: ${id} deleted` });
});


export default routerAnimes;