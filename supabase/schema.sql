-- Supremework Synergy — Quote Requests table
-- Run this in the Supabase SQL Editor for your project.

create extension if not exists pgcrypto;

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  service_needed text not null,
  message text,
  phone text not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.quote_requests enable row level security;

-- Allow anyone (anon key) to INSERT a quote request, but never read/update/delete from the client.
drop policy if exists "Allow public insert" on public.quote_requests;
create policy "Allow public insert"
  on public.quote_requests
  for insert
  to anon
  with check (true);

-- No select/update/delete policy is created for anon, so the public site cannot read submissions.
-- Company staff can view submissions in the Supabase Table Editor while logged into the project.
