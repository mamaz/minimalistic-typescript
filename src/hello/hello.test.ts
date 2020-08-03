import { hello } from "./hello"

test("it should be able to say hello", ()=> {
    expect(hello("mamaz")).toEqual("hello mamaz");
});
