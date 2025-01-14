import PropTypes from "prop-types"

export default function Form(props) {
    
    return (
        <form onSubmit={props.addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
    )
}

Form.propTypes = {
    addIngredient: PropTypes.func.isRequired,
}