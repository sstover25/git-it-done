var getUserRepo = function() {
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepo();