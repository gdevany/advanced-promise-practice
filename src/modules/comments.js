import getOneComment from "./get-one-comment";
import makeComment from "./create-comment";


function loadAllComments() {
  // 1) Long way


  // 2) Short way
  fetch("/comments").then((response) => {
    return response.json();
  }).then((data) => {
    document.getElementById("numberOfComments").innerHTML = data.length;
    document.getElementById("numberOfComments2").innerHTML = data.length;
    console.log(data);
    })
  }
loadAllComments();

// 3) We can use promises from other modules
getOneComment(1).then((data) => {
  document.getElementById("firstComment").innerHTML = data.body;

})


window.makeComment = function () {
  makeComment({
    body: "dfasdfd dfs sd sdf",
    postId: 1
  }).then(function () {
    loadAllComments();
  });
};
