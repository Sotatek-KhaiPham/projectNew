import config from '../src/config';
import { Api, TransactionDto } from './payment-api';

export const apiPayments = new Api({ baseURL: config.paymentApiUrl });

export async function getResultPayment(data: TransactionDto) {
  return (await apiPayments.api.paymentsControllerCreatePayment(data)).data;
}
