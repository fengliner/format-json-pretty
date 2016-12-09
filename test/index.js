'use strict';

const formatJson = require('../index');
const expect = require('chai').expect;

describe('formatJson', function() {
  describe('#formatJson', function() {
    it('should get a standard format json string', function() {
      var user = {
        id: 1,
        name: 'fengliner',
        color: {
          id: 1,
          name: 'fengliner'
        },
        font: [{id: 1, name: 'fengliner'}]
      };
      let result = JSON.parse(formatJson(user));
      expect(result.id).equal(1);
      expect(result.name).equal('fengliner');
      expect(result.color.id).equal(1);
      expect(result.color.name).equal('fengliner');
      expect(result.font[0].id).equal(1);
      expect(result.font[0].name).equal('fengliner');
    })
  });
});
