-- Create demo_assessments table for storing personality test results
CREATE TABLE IF NOT EXISTS demo_assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  responses JSONB NOT NULL,           -- Raw 1-5 ratings for each question
  trait_scores JSONB NOT NULL,        -- Calculated scores for each of the 12 traits
  top_traits TEXT[] NOT NULL,         -- Top 3 personality traits
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_demo_assessments_email ON demo_assessments(email);

-- Create index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_demo_assessments_created_at ON demo_assessments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE demo_assessments ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for demo purposes
CREATE POLICY "Allow anonymous inserts" ON demo_assessments
  FOR INSERT TO anon WITH CHECK (true);

-- Allow users to read their own assessments by email
CREATE POLICY "Allow read own assessments" ON demo_assessments
  FOR SELECT TO anon USING (true);

-- Comment on table for documentation
COMMENT ON TABLE demo_assessments IS 'Stores personality assessment results from the demo page';
COMMENT ON COLUMN demo_assessments.responses IS 'JSON object with question IDs as keys and 1-5 ratings as values';
COMMENT ON COLUMN demo_assessments.trait_scores IS 'JSON object with 12 personality traits and their calculated scores';
COMMENT ON COLUMN demo_assessments.top_traits IS 'Array of the top 3 personality traits based on scores';

