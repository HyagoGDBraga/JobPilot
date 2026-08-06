-- src/migrations/setup/setup.sql

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

\i /migrations/locations.sql
\i /migrations/professions.sql
\i /migrations/users.sql

\i /migrations/user_profiles.sql