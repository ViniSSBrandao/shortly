--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    userid integer NOT NULL,
    token uuid NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shortenUrls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."shortenUrls" (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    "userId" integer NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "shortUrl" text NOT NULL
);


--
-- Name: shortenUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."shortenUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shortenUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."shortenUrls_id_seq" OWNED BY public."shortenUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    name character varying(150) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shortenUrls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortenUrls" ALTER COLUMN id SET DEFAULT nextval('public."shortenUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, '96d87b86-9980-4daa-944b-370bb0598c6f', '2023-03-02 11:20:11.928363');
INSERT INTO public.sessions VALUES (2, 1, 'e1aea359-e0f4-452d-abb8-ba113a234f44', '2023-03-02 11:20:11.928363');
INSERT INTO public.sessions VALUES (3, 1, 'e3549e34-495c-449d-832d-d61a07807b31', '2023-03-02 11:20:11.928363');
INSERT INTO public.sessions VALUES (4, 1, '15fc9463-7122-4a7e-bb02-9889b8c0e4ce', '2023-03-02 11:20:11.928363');
INSERT INTO public.sessions VALUES (5, 6, '7777dcd3-b5f1-490d-938b-f3fe9800ee2c', '2023-03-02 12:58:43.754174');
INSERT INTO public.sessions VALUES (6, 1, '14665b26-a574-4a87-89fb-7e8df9327b4f', '2023-03-02 14:32:49.941876');
INSERT INTO public.sessions VALUES (7, 1, '5f731f1d-d752-4083-bbfa-0e2b50d2e054', '2023-03-02 19:23:28.777178');


--
-- Data for Name: shortenUrls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."shortenUrls" VALUES (1, '2023-03-02 15:19:42.87038', 1, 'https://www.youtube.com/watch?v=oXsx4INEv8E', 3, 'Pbz0ZeST');
INSERT INTO public."shortenUrls" VALUES (3, '2023-03-02 15:30:31.940725', 1, 'https://www.youtube.com/watch?v=oXsx4INEv8E', 11, '2miXJ3sc');
INSERT INTO public."shortenUrls" VALUES (4, '2023-03-02 20:16:46.449722', 1, 'https://www.youtube.com/watch?v=oXsx4INEv8E', 0, 'IQ_VARD8');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, '2023-03-02 14:32:48.009215', 'joao@drsw.com.br', '$2b$10$A/jXLLlWMMn1RYWWhlQDO.jWSGmVEXVO6mR7YfJMjA7nhVlyG9u0q', 'Joaw');
INSERT INTO public.users VALUES (3, '2023-03-02 19:23:26.1384', 'joao@dw.com.br', '$2b$10$sMDE.28.thn627dzlgPvjeG3wn0S.VpvQI32BehrJYLRY.NEybQQG', 'Joaw');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: shortenUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."shortenUrls_id_seq"', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: shortenUrls shortenUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortenUrls"
    ADD CONSTRAINT "shortenUrls_pkey" PRIMARY KEY (id);


--
-- Name: shortenUrls shortenUrls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortenUrls"
    ADD CONSTRAINT "shortenUrls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

