//eslint disable @typescript-eslint/no-var-requires
import { dummyFunc } from "./userService"

//write a test for dummyFunc
describe("dummyFunc", () => {
    it("should return 'hello world'", () => {
        expect(dummyFunc()).toMatch(/hello/)
    })
})
