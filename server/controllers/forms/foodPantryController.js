// Food Pantry
const FoodPantryData = require("../models/FoodPantry");

const newFoodPantryItemPage = async (req, res) => {
    res.render("newFoodPantryItem", {
        title: "New food pantry",
    })
}

const storeFoodPantryItem = async (req, res) => {
    await FoodPantryData.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/foodPantry')
}

const deleteFoodItem = async (req, res) => {
    await FoodPantryData.findByIdAndDelete(req.params.id)
    res.redirect('/foodPantry')
}

const foodPantryPage = async (req, res) => {
    const foodItem = await FoodPantryData.find({}).sort({_id: -1});
    res.render("foodPantry", {
        title: "Food Pantry",
        foodItem
    })
}

module.exports = {
    foodPantryPage,
    storeFoodPantryItem,
    deleteFoodItem,
    newFoodPantryItemPage
}