var trees = ["oak", "pine", "Aspen", "Bald Cypress"];
const errorElement = document.querySelector("#error");
const displayResults = document.querySelector("#displayResults");

//Display tree list inside displayResults div
const listTrees = () => {
  let treeList = "";
  trees.forEach(tree => {
    treeList += `${tree} <br>`;
  });
  displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`;
};

listTrees();

// Redwood to the end
document.querySelector("#add_redwood").onclick = () => {
  trees.push("redwood");
  listTrees();
};

// Pear to the start
document.querySelector("#add_pear").onclick = () => {
  trees.unshift("pear");
  listTrees();
};

// Sort trees
document.querySelector("#sortTrees").onclick = () => {
  trees.sort();
  listTrees();
};

// Make all the trees lower case
document.querySelector("#lowerTrees").onclick = () => {
  trees = trees.join(" <br>").toLowerCase();
  trees = trees.split(" ,");
  console.log(trees.length);
  listTrees();
};

document.querySelector("#remove_t1").onclick = () => {
  if (trees.length > 0) {
    trees.shift();
    listTrees();
  } else {
    errorElement.textContent =
      "What's wrong with you, I can't remove a tree if there's nothing there";
  }
};

document.querySelector("#remove_t2").onclick = () => {
  if (trees.length > 1) {
    trees.splice(1, 1);
    listTrees();
  } else {
    errorElement.textContent = "Error! Cannot remove the second tree";
  }
};

document.querySelector("#remove_last").onclick = () => {
  if (trees.length > 0) {
    trees.pop();
    listTrees();
  } else {
    errorElement.textContent =
      "What's wrong with you, I can't remove a tree if there's nothing there";
  }
};

// Name of tree #3
document.querySelector("#showName3").onclick = () => {
  if (trees.length > 2) {
    let thirdTree = trees[2];
    errorElement.textContent = thirdTree;
    listTrees();
  } else {
    errorElement.innerHTML =
      "You need a third tree in the list to get the name. <br> Add some more trees!";
  }
};

// Name of tree #4
document.querySelector("#showName4").onclick = () => {
  if (trees.length > 3) {
    let fourthTree = trees[3];
    errorElement.textContent = fourthTree;
    console.log(trees.length);
    listTrees();
  } else {
    errorElement.innerHTML =
      "You need a fourth tree in the list to get the name. <br> Add some more trees!";
  }
};
