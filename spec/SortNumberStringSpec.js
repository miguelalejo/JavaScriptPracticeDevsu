describe("Player", function() {
  

  beforeEach(function() {

  });

  it("t1", function() {    
    expect(sort('a111')).toEqual('111a');
  });

  it("t2", function() {    
    expect(sort('2a111b')).toEqual('1112ab');
  });

});
