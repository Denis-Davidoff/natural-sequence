const { findSkippedNatural } = require("../index");

describe("Natural sequence", function () {

  it("success 5 items", async function () {
    let t = [4, -1, 2, 1, 5]
    expect( findSkippedNatural(t) ).toStrictEqual( [3] )
  })

  it("success 10 items", async function () {
    let t = [4, -1, 2, 1, 5, -22, -33, 11, 22, 9]
    expect( findSkippedNatural(t) ).toStrictEqual( [
        3,  6,  7,  8, 10, 12,
        13, 14, 15, 16, 17, 18,
        19, 20, 21
      ])
  })

  it("all negative", async function () {
    let t = [-4, -1, -2, -1, -5]
    expect( findSkippedNatural(t).length ).toBe( 0 )
  })
})