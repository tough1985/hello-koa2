const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app.js');

describe('user_api', () => {
    
    it('getUser', (done) => {

        request(app.listen())
            .get('/api/users/getUser?id=1')     //get方法
            .expect(200)                        //断言状态码为200
            .end((err, res) => {

                console.log(res.body);
                //断言data属性是一个对象
                expect(res.body.data).to.be.an('object');

                done();
            });
    })

    it('registerUser', (done) => {

        // 请求参数，模拟用户对象
        var user = {
            username: '阿，希爸',
            age: 31
        }

        request(app.listen())
            .post('/api/users/registerUser')            //post方法
            .send(user)                                 //添加请求参数
            .set('Content-Type', 'application/json')    //设置header的Content-Type为json
            .expect(200)                                //断言状态码为200
            .end((err, res) => {

                console.log(res.body);
                //断言返回的code是0
                expect(res.body.code).to.be.equal(0);
                done();
            })
    })
})