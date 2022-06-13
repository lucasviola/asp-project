module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index.html", {title: "Dynamic Title 2"})
    });
    app.get("/search", function (req, res) {
        res.render("search.html");
    });
    app.get("/search-result", function (req, res) {
        //searching in the database
        console.log("Query received from GET request: ", req.query)
        res.send(req.query);
    });
    app.get("/register", function (req,res) {
        res.render("register.html");
    });
    app.post("/registered", function (req,res) {
        // saving data in database

        console.log("Receiving POST request: ", req.body);

        res.send("Hello "+ req.body.first + " "+ req.body.last +", you are now registered!");
    });
}