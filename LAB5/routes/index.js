const postStory = require("./story");
const postEducation = require("./education");
const postAbout = require("./about");

const constructorMethod = app => {
  app.use("/story", postStory);
  app.use("/education", postEducation);
  app.use("/about", postAbout);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;