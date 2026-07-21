-- database/setup.sql

-- Extensões
\i schema/extensions.sql

-- Tabelas independentes (não dependem de outras)
\i schema/professions.sql
\i schema/locations.sql
\i schema/skills.sql

-- Tabelas principais
\i schema/users.sql

-- Tabelas dependentes
\i schema/user_profiles.sql
\i schema/user_skills.sql

-- Dados iniciais
\i seeds/professions.seed.sql
\i seeds/skills.seed.sql
\i seeds/locations.seed.sql