import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    DATABASE_URL: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV == 'test') {
    config.DATABASE_URL = process.env.DATABASE_URL_TEST;
}

export default config;
