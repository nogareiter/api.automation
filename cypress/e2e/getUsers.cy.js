let response;

describe("get users test", () => {
    before("request to get all users", () => {
        cy.request({method: "GET", url: "https://jsonplaceholder.typicode.com/users"}).then(res => {
            response = res;
        })
    })

    
    it("check response status", () => {
        expect(response.status).to.eq(200);
    })
    
    it("check response's length", () => {
        expect(response.body).to.have.lengthOf(10)
    })

    it("check ids are unique", () => {
        const ids = response.body.map(user => user.id)

        ids.forEach((id) => {
            expect(ids.indexOf(id)).to.eq(ids.lastIndexOf(id))
        });
    })
})