

var bindEventListeners = function() {
  var subjectDiv = document.querySelectorAll('.grades');
  for(let i = 0; i < subjectDiv.length; i++) {
    subjectDiv[i].addEventListener('click', function(evt) {
        let target = evt.target;
        let grandParent = evt.target.parentNode.parentNode;
        let parent = evt.target.parentNode;
        let siblings = parent.children;

        target.classList.add('active');
        for(let i = 0; i < siblings.length; i++) {
          if(siblings[i] != target) siblings[i].classList.remove('active');
        }

        grandParent.getElementsByClassName('output')[0].innerHTML = target.dataset.grade;
    });
  }
}

var addSubject = function() {
  let count = document.querySelectorAll('.grades').length;
  var container = document.querySelector('.wrapper');
  var clonee = document.querySelector('.subject');
  var clone = clonee.cloneNode(true);

  clone.getElementsByClassName('grades')[0].dataset.subjectCount = count+1;
  clone.getElementsByClassName('output')[0].innerHTML = "";

  let cloneChildren = clone.children[0].children;
  for (let i = 0; i < cloneChildren.length; i++) {
    cloneChildren[i].classList.remove('active');
  }

  clone.addEventListener('click', function(evt) {
    let target = evt.target;
    let grandParent = evt.target.parentNode.parentNode;
    let parent = evt.target.parentNode;
    let siblings = parent.children;

    target.classList.add('active');
    for(let i = 0; i < siblings.length; i++) {
      if(siblings[i] != target) siblings[i].classList.remove('active');
    }

    grandParent.getElementsByClassName('output')[0].innerHTML = target.dataset.grade;

  });
  container.appendChild(clone);
}

window.onload = function() {
  bindEventListeners();

  document.querySelector('.add').addEventListener('click', addSubject);
}
