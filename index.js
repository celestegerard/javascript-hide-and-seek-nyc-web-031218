function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(selector) {
  let nested = document.getElementById("nested");
  return nested;
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div');
  let mostDeep = nodes[nodes.length- 1];
  return mostDeep;
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('ul.ranked-list li')


  for (let i = 0; i < rankedList.length; i++) {
      rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }

}
