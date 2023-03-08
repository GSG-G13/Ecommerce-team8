const deleteItem = require("../seller/helper");

describe("test delete function",()=>{
  test("function must return array after delete 1 item",()=>{
    const actual = deleteItem([{id:12134,name:'phoen'},{id:413,name:'phoen'},{id:43141,name:'phoen'}],413);
    const expected = [{id:12134,name:'phoen'},{id:43141,name:'phoen'}]

    expect(actual).toEqual(expected);
  })
})