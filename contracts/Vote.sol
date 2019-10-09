pragma solidity ^0.5.0;

contract Vote {

  struct Candidate 
   { 
      uint id;
      string name;
      uint voteCount; 
    }
    uint public condidatesCount;

    mapping(uint => Candidate) public candidates;

    string public Cand;

   constructor() public 
   {
        Cand = "khaoula";
        addCondidate("Candidate 1");
        addCondidate("Candidate 2");
        addCondidate("Candidate 3");
        addCondidate("Candidate 4");


        
   }

  function addCondidate (string memory _name) private 
  {
      condidatesCount ++;
      candidates[condidatesCount] = Candidate(condidatesCount, _name, 0);
  }

  

}
