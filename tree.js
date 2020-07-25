class Node {
  constructor() {
    this.left = null;
    this.right = null;
  }

  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

//create and insert a new node
var insertNode = function (root, value) {
  if (!root.hasOwnProperty('value')) {
    return root.setValue(value);
  } else {
    while (true) {
      if (value <= root.value) {
        if (!root.left) {
          root.left = new Node();
          return root.left.setValue(value);
        } else {
          root = root.left;
        }
      } else {
        if (!root.right) {
          root.right = new Node();
          return root.right.setValue(value);
        } else {
          root = root.right;
        }
      }
    }
  }
};

//show tree preOrder
var preOrder = function (root) {
  if (root) {
    console.log(root.getValue());
    preOrder(root.left);
    preOrder(root.right);
  }
}

//show tree inOrder
var inOrder = function (root) {
  if (root) {
    inOrder(root.left);
    console.log(root.getValue());
    inOrder(root.right);
  }
};

//show tree posOrder
var posOrder = function (root) {
  if (root) {
    posOrder(root.left);
    posOrder(root.right);
    console.log(root.getValue());
  }
}

//create a root
var root = new Node();

insertNode(root, 7);
insertNode(root, 41);
insertNode(root, 1);

preOrder(root);
inOrder(root);
posOrder(root);