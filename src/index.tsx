import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  // Banco de Dados interno
  models: {
    transaction: Model,
  },

  // Insert dados default
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1, // Sempre tem de ter
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-03-17 09:00:00'),
        },
        {
          id: 2,
          title: 'Alugel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-10 14:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'; // Base URL PATCH
    this.get('/transactions', () => {
      // Values default
      // return [
      //   {
      //     id: 1,
      //     title: 'Transaction 1',
      //     amount: 400,
      //     type: 'deposit',
      //     category: 'Food',
      //     createdAt: new Date()
      //   }
      // ]

      // Retornar todas Transactions do Banco de Dados
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody); 
      // schema => Banco de Dados
      // request => Enviamos JSON e temos de converter em obj

      // Cria novo registro no Banco de Dados
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);