# Data Models

## Table: `quote_requests`

| Column | Type | Constraints |
|--------|------|-------------|
| id | uuid | primary key, default `gen_random_uuid()` |
| name | text | not null |
| company | text | not null |
| service_needed | text | not null (one of the 7 service categories or "Other") |
| message | text | nullable |
| phone | text | not null |
| created_at | timestamptz | not null, default `now()` |

## Security
Row Level Security (RLS) enabled. Policy: `anon` role may `INSERT` only (no `SELECT`/`UPDATE`/
`DELETE` from the client). Company staff review submissions via the Supabase dashboard (Table
Editor) using their authenticated project login, not via the public site.

See `supabase/schema.sql` for the exact DDL + policy.
