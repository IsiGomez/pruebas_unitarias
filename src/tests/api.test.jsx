jest.mock('../api');
import { fetchData } from '../api';

test('maneja la carga de datos', async () => {
  fetchData.mockResolvedValue({ id: 1, name: 'Test' });
});