import {hello} from "./hello.world";
import {expect} from 'chai';
import 'mocha';

describe('Hello function', () => {
    it('should return Hello World', () =>{
        const result = hello();
        expect(result).to.equal('Hello World');
    });
});