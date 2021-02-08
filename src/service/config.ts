interface ServiceBaseConfig {
    baseURL: string,
    timeout: number,
    headers?: object
}

export const serviceBaseConfig: ServiceBaseConfig = {
    baseURL:'127.0.0.1:3000',
    timeout:30000
};

export default serviceBaseConfig;
