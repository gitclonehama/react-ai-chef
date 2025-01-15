import React from "react"
import Loader from "./Loading.jsx"
import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import Form from "./Form.jsx"
import { getRecipeFromMistral } from "../ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [showLoader, setShowLoader] = React.useState(false)

    async function getRecipe() {
        setShowLoader(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setShowLoader(false)
    }

    function addIngredient(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        form.reset()
    }

    return (
        <main>
            <p className="explainer">
                Please add available ingredients below, 
                keep in mind you need to add at least 3 items 
                before a suggestion can be generated.
            </p>

            <Form addIngredient={addIngredient}  />

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {showLoader && <Loader />}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}