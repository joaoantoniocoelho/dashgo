import {createServer, Factory, Model, Response} from 'miragejs'

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
            this.timing = 750; // delay para as chamadas retornarem
            this.get('/users', function (schema, request) {
                const { page = 1, per_page = 10 } = request.queryParams;

                const total = schema.all('user').length;

                const start = (Number(page) - 1) * Number(per_page);
                const end = start + Number(per_page);

                const users = this.serialize(schema.all('user')).users.slice(start, end);

                return new Response(200,
                    { 'x-total-count': String(total) },
                    { users }
                )
            });
            this.get('/users/:id');
            this.post('/users');

            // Reset para não conflitar com o api routes do next
            this.namespace = '';
            this.passthrough(); // Como se fosse o next() de um middleware em node, executa o que vem depois
        }
    });
}