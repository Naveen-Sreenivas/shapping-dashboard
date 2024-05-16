
import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload);
        }
    }
});
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;

/*
Creating a Slice:
Imagine a slice as a piece of cake that represents a specific part of your application's data, like a shopping cart or a user profile.
To create a slice, you use a special function called createSlice(). It's like using a recipe to bake a cake.
Initial State:
Every slice starts with an initial state, which is like the basic ingredients you need to make the cake. For example, an empty shopping cart or a user with no data.
You set up this initial state when you create the slice.
Reducers:
Reducers are like the steps in a recipe that tell you how to change the cake as you bake it. They define how the state of your slice changes in response to different actions.
For example, if someone adds an item to the shopping cart, the reducer knows how to update the cart's state to include that item.
Action Creators:
Action creators are functions that create actions, which are like requests for changes to your slice's state. You use these actions to tell your reducers what needs to change.
For instance, when someone clicks "Add to Cart" on your website, you dispatch an action creator to add that item to the shopping cart.
Exporting:
Once you've created your slice, you export its reducer function and action creators. It's like packaging up your cake and sharing it with others so they can use it in their recipes.
Other parts of your app, like your Redux store or components, can then import and use these exported functions to manage and update the slice's state.

An action creator in Redux is a function that creates and returns an action object 
(here it is 
    add(state,action){
    state.push(action.payload);
}

).

This action object describes an event that has occurred in your application and contains information about the event, such as the type of action and any additional data (payload) associated with it. 

In Redux Toolkit, when you create a slice using the createSlice function, it generates an object that contains all the action creators associated with that slice. This object is often referred to as the "actions object."

action object is a parameter passed to a reducer function. It's an object that describes an event or an action that has occurred in your application. This object holds information about the action, such as the type of action and any additional data associated with it (often referred to as the "payload").

*/