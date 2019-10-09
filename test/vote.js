var Vote = artifacts.require("./Vote.sol");

contract("Vote", function(accounts) {
  var voteInstance;

  it("initializes with two candidates", function() {
    return Vote.deployed().then(function(instance) {
      return instance.condidatesCount();
    }).then(function(count) {
      assert.equal(count, 4);
    });
  });

  it("it initializes the candidates with the correct values", function() {
    return Vote.deployed().then(function(instance) {
      voteInstance = instance;
      return voteInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, "contains the correct id");
      assert.equal(candidate[1], "Candidate 1", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return voteInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, "contains the correct id");
      assert.equal(candidate[1], "Candidate 2", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return voteInstance.candidates(3);

    }).then(function(candidate) {
        assert.equal(candidate[0], 3, "contains the correct id");
        assert.equal(candidate[1], "Candidate 3", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct votes count");
        return voteInstance.candidates(4);
    }).then(function(candidate) {
        assert.equal(candidate[0], 4, "contains the correct id");
        assert.equal(candidate[1], "Candidate 4", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct votes count");

    });
  });
});