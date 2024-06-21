import type { Config } from 'drizzle-kit';


export default {
	schema: './src/lib/db/server/schema.ts',
	out: './drizzle',
	driver: 'better-sqlite',
	dbCredentials:{
        url: './sqlite.db'
    }
} satisfies Config;
