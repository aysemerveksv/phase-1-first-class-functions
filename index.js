
function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    // we could give this function a name if we wanted to, but since
    // it's only available _inside_ morningRoutine(), we don't need to
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  }
  const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;
//=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }

afterExercise();
function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function");
    };
  }