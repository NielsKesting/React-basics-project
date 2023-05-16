export const RecipePage (recipe) => {
    const info = recipe.recipe.recipe

    return (
        <>
        <div className="recipePage">
        <img src={cardInfo.image} className="recipePagePicture"></img>
        <div className="recipePageInfo">
            <div className="recipePageInfoLeft">
            <p>{info.mealtype}</p>
            <h2>{info.label}</h2>
            </div>
            <div className="recipePageInfoRight">
            <p>"Health labels:"</p>
            <p></p>
            
            </div>
        </div>
        </div>
        </>
    )
}