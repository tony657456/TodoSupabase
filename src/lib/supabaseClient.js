import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://bwuxwckkawmehvbyytru.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3dXh3Y2trYXdtZWh2Ynl5dHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1ODg2MDAsImV4cCI6MjAxNTE2NDYwMH0.0JuRB7ZhhB-4Db3Pm7c4cD_ReHj3yz251FIScDU2svU',
);
