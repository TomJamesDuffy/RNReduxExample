# RNReduxExample - setup
`npm install`  
`react-native run-ios`  
or if you're really wild:  
`react-native run-android` 

----------
# In the file everything you need is in:
App.js  
src/component/ChildComponent.js  
src/reducer/reducer.js  
src/action/action.js  

----------
# What's redux
variables store data  
variables with meaningful names, that store data are information  
the information you store within variables can change  
state describes what is currently stored within that variable with an understanding that it can change  

redux is a big object that stores the current state of lots of different variables as well as a history for how they have changed.  

Like this (although usually much bigger!)  

`state = {   
  cat:  
    {  
      price: 10,  
      mood: "sad"  
    },  
   dog:  
    {  
      price: 12,  
      mood: "happy" 
     }  
 }`
    
----------
# What you can do

You can extract data out and you can put data in.  

To take it out you can call on the redux-created global object 'state'.  
To put it in you call an 'action creator' from your view, that dispatches an action, which triggers a reducer, that adjusts the store.  

view -> action + action creator -> reducer -> store . 

----------
# Those words are confusing

view = Whatever triggers your action be it a button, constructor, method  
action = Sends off actions, just a function   
action creator = The message sent to the reducer (in the form of an object)  
reducer = Makes a change in the redux store, why reduce?! Similiar to how the method .reduce works, it has an accumulator that is added to every iteration. Just like a reducer adds to the store every time it's called (and stores a history).  

----------

# Next steps

Redux-saga and redux-thunk - What if you want to make an API call and you don't know when you are going to get a response...  
combineReducers - What if you have loads of reducers and want to not have a huge one titan of a reducer...  
Redux persist - What if you want data to persist across instances...  
