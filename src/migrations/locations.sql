CREATE TABLE locations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL
);