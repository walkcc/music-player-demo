import axios from 'axios';

import { serviceBaseConfig } from './config';

export const request = axios.create(serviceBaseConfig);

export default request
