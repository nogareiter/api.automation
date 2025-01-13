let response;

describe("get users test", () => {
    before("request to add a post", () => {
        cy.request({
            method: "POST", url: "https://jsonplaceholder.typicode.com/posts", 
            body: JSON.stringify({
                title: 'posttt',
                body: 'very long and interesting post',
                userId: 1,
            })
        }).then(res => {
            response = res;
        })
    })

    it("check response status", () => {
        expect(response.status).to.eq(201);
    })

    it("check id is correct", () => {
        expect(response.body.id).to.eq(101) // there are 100 posts so next post's id is 101
    })
})