import axios from "axios";

const AddTwite = (state , text , identity , a) => {
    const NewTwite = {
        text: text,
        id: a,
        Like: 0,
        name: identity.name,
        email: identity.email
    }
    a++;
    return [...state , NewTwite];
}

const TwiteReducer = (state , action) => {

    switch (action.type) {
        case "AddTwite" : {
            const NewTwite = {
                text: action.text,
                like: 0,
                name: action.identity.name,
                email: action.identity.email,
                likedby: [],
            }
            console.log(NewTwite);
            axios.post("http://localhost:3001/Twites" , NewTwite)
            return [...state , NewTwite];
        }
        case "like": {
            const index = state.findIndex((t) => t.id === action.id);
            const SelectedTodo = {...state[index]};
            const c = action.data.findIndex((u) => u.name === action.name);
            SelectedTodo.like++;
            const UpdatedTwite = [...state];
            UpdatedTwite[index] = SelectedTodo;
            action.data[c].totalLikes++;
            axios.put(`http://localhost:3001/Regester/${action.data[c].id}` , action.data[c]);
            axios.put(`http://localhost:3001/Twites/${action.id}` , SelectedTodo);
            return UpdatedTwite; 
        }
        case "Unlike": {
            const index = state.findIndex((t) => t.id === action.id);
            let SelectedTodo = {...state[index]};
            const c = action.data.findIndex((u) => u.name === action.name);
            action.data[c].totalLikes--;
            SelectedTodo.like--;
            const UpdatedTwite = [...state];
            UpdatedTwite[index] = SelectedTodo;
            // axios.put(`http://localhost:3001/Regester/${action.data[c].id}` , action.data[c]);
            // axios.put(`http://localhost:3001/Twites/${action.id}` , SelectedTodo);
            return UpdatedTwite;
        }
        case "init-twite": {
            return action.data;
        }
        case "search": {
            const value = action.title;
            const FiltredTwite = action.data.filter((t) => t.text.indexOf(value) >= 0);
            return FiltredTwite;
        }
        case "selected": {
            const FiltredTwite = action.data.filter((t) => t.name === action.name);
            return FiltredTwite;
        }
        // case "checklike": {
        //     const index = state.findIndex((t) => t.id === action.id);
        //     const SelectedTwite = {...state[index]};
        //     SelectedTwite.likedby = SelectedTwite.likedby.filter((u) => u === action.userid);
        //     if (SelectedTwite.likedby) {
                
        //     }
        //     const UpdatedTwite = [...state];
        //     UpdatedTwite[index] = SelectedTwite;
        //     return UpdatedTwite;
        // }
        default:
            return state;
    }
}

export default TwiteReducer;