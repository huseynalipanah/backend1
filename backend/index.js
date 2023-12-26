const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const data = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  data.push(req.body);
  res.json(req.body);
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((i) => i.id === id);
  if (item) {
    Object.assign(item, req.body);
    res.json(item);
  } else {
    res.send("Item not found");
  }
});

app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((i) => i.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.send();
  } else {
    res.send("Item not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
