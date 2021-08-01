import { calculateAndDisplayRoute } from "./googleDirectionsTest"

describe("calculateAndDisplayRoute", () => {
    it("should work", () => {
        const directionsService = { route: jest.fn((params) => Promise.resolve("service response")) };
        const directionsRenderer = { setDirections: jest.fn((params) => Promise.resolve("renderer response")) };

        return calculateAndDisplayRoute(directionsService, directionsRenderer).then((response) => {
            expect(directionsService.route.mock.calls[0][0].travelMode).toEqual("WALKING");
            expect(directionsRenderer.setDirections.mock.calls[0][0]).toEqual("service response");
        })
        //expect(directionsRenderer.setDirections.mock.calls);
        // const mockCallback = jest.fn(x => 42 + x);
        // console.log(mockCallback(10));
        // console.log(mockCallback(20, 30));
        // console.log(mockCallback.mock.calls)
    });
});