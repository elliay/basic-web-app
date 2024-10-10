import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return my andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "elliay"
          ));
    });
    test('should return my name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Ellia"
          ));
    });
    test('should return sum', () => {
        const query = "What is 1 plus 1";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "2"
          ));
    });
    test('should return max', () => {
        const query = "Which of the following numbers is the largest: 2, 3, 15?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "15"
          ));
    });
    
});