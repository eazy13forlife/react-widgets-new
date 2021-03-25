//our debouncedFunction, takes in the function we want to call and the time for when we want to call it. What this debounce function does is it sets our timerId in private scope and then returns a function. When we call this function, we call our function we want to  call after a certain time passes. If we call our function before this time passes, we clear the timeoutId from our previous function (which is in private scope) and our funciton will be called again at the giicen time.
const debounceFunction = (func, timeout = 300) => {
  //set timer equal to nothing for now;
  let timer;

  //return a function and we call this function with the arguments of the function we want to calll.
  return (...args) => {
    //clear the original timer id;
    clearTimeout(timer);
    //then, we plan to call our function again at the given time.
    timer = setTimeout(() => {
      // the apply method calls a function with a given this value and arguments provided as an array
      func.apply(this, args);
    }, timeout);
  };
};
