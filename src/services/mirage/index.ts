import {createServer, Factory, Model} from 'miragejs'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    return createServer({
        models: {
            user: Model.extend<Partial<User>>({}),
        },

        factories: {
            user: Factory.extend({
                name(i) {
                    return `User ${i + 1}`
                },
                email(i) {
                    return `user_${i + 1}@email.com`
                },
                createdAt() {
                    return new Date()
                },
            })
        },

        seeds(server) {
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'mirage';
            this.timing = 750;

            this.get('/users');
            this.post('/users')

            this.namespace = '';
            this.passthrough();
        }
    });
}