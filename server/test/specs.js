/* eslint-disable */

var request = require('supertest');
var should = require('should')
var expect = require('chai').expect;
var express = require('express');
request = request('http://localhost:8090');


// var db = require('./db/db.js');
// var User = require('./user/user.js');

var app = express();

//server tests

describe('GET /', function() {
  it('should respond', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});

describe('GET /api', function() {
  it('should respond', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});

