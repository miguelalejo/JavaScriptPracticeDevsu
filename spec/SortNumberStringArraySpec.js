describe("Player", function() {
  

  beforeEach(function() {

  });

  it("t1", function() {    
    expect(sort(['a',1,'b',2])).toEqual([1,2,'a','b']);
  });

  it("t2", function() {    
    expect(sort([1,3,'123','dsd','ghr',99])).toEqual([1, 3, 99, "123", "dsd", "ghr"]);
  });

  it("t3", function() {    
    expect(sort(['14',43,'76',23,'adadsd','xghr','saaa'])).toEqual([23, 43, "14", "76", "adadsd", "saaa", "xghr"]);
  });

  
  

  

});
