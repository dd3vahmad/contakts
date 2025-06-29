CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  name TEXT,
  email TEXT,
  created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can access their contacts" ON contacts
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their contacts" ON contacts
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their contacts" ON contacts
FOR UPDATE USING (auth.uid() = user_id)
