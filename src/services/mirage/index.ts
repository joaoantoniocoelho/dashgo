import {ActiveModelSerializer, createServer, Factory, Model, Response} from 'miragejs'
import {User} from "../../types/types";

export function makeServer() {
    return createServer({
        serializers: {
            application: ActiveModelSerializer
        },

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
                }
            })
        },

        seeds(server) {
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'mirage';
            this.timing = 750;

            this.get('/users', function (schema, request) {
                const { page = 1, per_page = 10 } = request.queryParams;

                const total = schema.all('user').length;

                const start = (Number(page) - 1) * Number(per_page);
                const end = start + Number(per_page);

                const users = this.serialize(schema.all('user'))
                    .users
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .slice(start, end);

                return new Response(200,
                    { 'x-total-count': String(total) },
                    { users }
                )
            });
            this.get('/users/:id');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }
    });
}