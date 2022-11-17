import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it
} from '@jest/globals';
import app from '../../app';
import request from 'supertest';

let server;

beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET em /editoras', () => {
    it('Deve retornar uma lista de editoras', async () => {
        const resposta = await request(app)
            .get('/editoras')
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(200);

        expect(resposta.body[0].email).toEqual('e@e.com')
    });
});

let idResposta;
describe('POST em /editoras', () => {
    it.skip('Deve adicionar uma nova editora', () => {
        const resposta = request(app)
        .post('/editoras')
        .send({
            nome: 'CDC',
            cidade: 'Sao Paulo',
            email: 's@s.com'
        })
        .expect(201);

        idResposta = resposta.body.content.id;
    });
});

describe.skip('DELETE em /editoras/id', ()=>{
    it('Deletar o recurso adicionado', async ()=>{
        await request(app)
        .delete(`/editoras/${idResposta}`)
        .expect(200);
    });
});

describe.skip('GET em /editoras/id', ()=>{
    it('Deletar o recurso adicionado', async ()=>{
        await request(app)
        .get(`/editoras/${idResposta}`)
        .expect(200);
    });
});