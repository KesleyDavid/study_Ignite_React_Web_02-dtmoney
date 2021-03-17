import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import schema from 'miragejs/orm/schema';

createServer({
  // Banco de Dados interno
  models: {
    transition: Model,
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