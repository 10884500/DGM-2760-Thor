const trees = ['oak', 'pine', 'Aspen', 'Bald Cypress'];
const errorElement = document.querySelector("#error");
const displayResults = document.querySelector("#displayResults");

//Display tree list inside displayResults div
const listTrees = () => {
  let treeList = '';
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

// Lower case the trees
document.querySelector("#lowerTrees").onclick = () => {
    trees.toLowerCase();
    listTrees();
    }


document.querySelector("#remove_t1").onclick = () => {
  if (trees.length > 0) {
    trees.shift();
    listTrees();
  } else {
    errorElement.textContent =
      "What's wrong with you, I can't remove a tree if there's nothing there";
  }
};

document.querySelector("#remove_last").onclick = () => {
  if (trees.length > 0) {
    trees.unshift();
    listTrees();
  } else {
    errorElement.textContent =
      "What's wrong with you, I can't remove a tree if there's nothing there";
  }
};
