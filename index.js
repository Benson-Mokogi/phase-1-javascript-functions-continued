// code your solution here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(whatTodo = "go to the office"){
return(`This Monday, I will ${whatTodo}.`);
};
mondayWork();

function wrapAdjective(mark = "*") {
    return function(adj) {
      return `You are ${mark}${adj}${mark}!`;
    };
  }
  