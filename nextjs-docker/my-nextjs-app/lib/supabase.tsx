// // lib/supabase.js
// import { createClient } from '@supabase/supabase-js'

// // SupabaseのURLとAPIキーを設定
// const supabaseUrl = 'https://kulmsxibdjegdqguwljk.supabase.co'  // SupabaseプロジェクトのURL
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1bG1zeGliZGplZ2RxZ3V3bGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0ODI1MDIsImV4cCI6MjA0OTA1ODUwMn0.heXv1mbkCG0PkO-c4cOY6oCCP2IpTVbzyayALB-FkdU'  // SupabaseプロジェクトのAPIキー

// export const supabase = createClient(supabaseUrl, supabaseKey);
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// 下記は公式ドキュメントの記載です。
// import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
// const supabase = createClient(
//   'https://xyzcompany.supabase.co', 
//   'public-anon-key'
// )
