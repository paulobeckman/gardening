DROP DATABASE IF EXISTS gardening;
CREATE DATABASE gardening;

CREATE TABLE "services" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "title" text NOT NULL,
  "description" text NOT NULL,
  "price" int NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text UNIQUE NOT NULL,
  "password" text NOT NULL,
  "cep" text  NOT NULL,
  "address" text  NOT NULL,
  "number" text  NOT NULL,
  "latitude" numeric NOT NULL,
  "longitude" numeric NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);


CREATE TABLE "scheduling" (
  "id" SERIAL PRIMARY KEY,
  "gardener_id" int,
  "user_id" int,
  "service_id" int,
  "date" timestamp,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

ALTER TABLE "services" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "scheduling" ADD FOREIGN KEY ("gardener_id") REFERENCES "users" ("id");
ALTER TABLE "scheduling" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "scheduling" ADD FOREIGN KEY ("service_id") REFERENCES "service" ("id");


-- foreing key
ALTER TABLE "services" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- create procedure
CREATE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN 
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- auto updated_at users
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

--connect pg simple table
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;