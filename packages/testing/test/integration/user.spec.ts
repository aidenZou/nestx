
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('User module test', () => {

    beforeEach(async () => {
        await HttpClient.mockApi.mockInitData();
    })

    afterEach(async () => {
        // await HttpClient.mockApi.mockReset();
    })

    /**
     * TODO if not admin user can create admin user?
     */
    it('create user', async () => {
        await login();
        const createUserReq = {
            "username": "vellengs2",
            "password": "8911111",
            "mobile": "13063090591",
            "email": "demo@domain.com",
            "mobilePrefix": "86",
            "isAdmin": "true",
            "veryCode": "123456"
        }

        const res = await HttpClient.coreApi.usersCreate(createUserReq);
        expect(res.status).toBe(201);
    });

    /**
     * TODO if not admin user can create admin user?
     */
    it('edit user', async () => {
        await login();
        const editUserReq = {
            "_id": "5c984580d8efba637156bc85",
            "name": "viking",
            "username": "vellengs2",
            "mobile": "s",
            "email": "vellengs@qq.com"
        }
        const res = await HttpClient.coreApi
            .usersUpdate(editUserReq);
        expect(res.status).toBe(200);
    });


});