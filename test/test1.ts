
import * as assert from 'assert';
//import {describe, it} from 'mocha';

import greet from '../src/greet';

describe('It should', function(){
    it('work', function(){
        assert.equal('Molo, Andre', greet('Andre', 'xhosa'));
    });

    it('work for english', function(){
        assert.equal('Good morning, Andre', greet('Andre', 'english'));
    });

});
