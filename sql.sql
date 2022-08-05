CREATE TABLE accounts (
    user_id serial PRIMARY KEY NOT NULL,
    uuid character varying NULL,
    username character varying(50) NOT NULL,
    password character varying(90) NOT NULL,
    email character varying(255) NOT NULL,
    created_on timestamp without time zone NOT NULL,
    last_login timestamp without time zone NULL
  );

