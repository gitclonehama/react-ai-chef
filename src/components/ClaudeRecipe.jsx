import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef AI Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

ClaudeRecipe.propTypes = {
    recipe: PropTypes.string.isRequired,
};