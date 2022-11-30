import axios from "axios";


export function getRecipes() {
	return (dispatch) => {
		axios.get("/recipes")
		.then((response) => {
			dispatch({ type: "GET_RECIPES", payload: response.data });
		}).catch(()=> alert("Recipe not found"))
	}
}  

export function getRecipesByName(name) {
	return (dispatch) => {
		axios.get("/recipes?name=" + name)
		.then((response) => {
			dispatch({ type: "GET_RECIPES_BY_NAME", payload: response.data });
		}).catch(()=> alert("Recipe not found"))
	};
}
export function getDiets() {
	return (dispatch) => {
		axios.get("/types")
		.then((response) => {
			dispatch({ type: "GET_DIETS", payload: response.data });
		}).catch(()=> alert("Diet not found"))
	};
}  


 export function postRecipe(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post("/recipe", payload);
      return json;
    } catch (error) {
      alert("POST ERROR")
    }
  };
} 


export function filterRecipesbyDiets(payload) {
  return {
    type: "FILTER_BY_DIETS",
    payload,
  };
}
export function filterRecipesbyDishTypes(payload) {
  return {
    type: "FILTER_BY_DISHTYPES",
    payload,
  };
}
export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByScore(payload) {
  return {
    type: "ORDER_BY_SCORE",
    payload,
  };
}
export function orderByLike(payload) {
  return {
    type: "ORDER_BY_LIKE",
    payload,
  };
}

export function getDetails(id) {
	return (dispatch) => {
		axios.get("/recipes/" + id)
		.then((response) => {
			dispatch({ type: "GET_DETAILS", payload: response.data });
		}).catch(()=> alert(`Ups...we dont have a recipe with ${id} as ID `))
	};
}



export function removeDetail() {
  return {
    type: "REMOVE_DETAILS",
  };
}

 export function filterCreated(payload) {
  return {
      type: "FILTER_CREATED",
      payload
  }
} 

   export function removeRecipe (id) {
  return async function(dispatch){
    try {
    await axios.delete("/recipe/" + id)
      return dispatch({
				type: "REMOVE_RECIPE",
				payload: id,
			})	
    } catch (error) {
      alert("DELETE ERROR")
      
    }
 } 
}   











