import { createClient } from '@supabase/supabase-js';

// Usar las variables de entorno definidas en el archivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // URL de tu proyecto Supabase
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Tu clave pública anon

// Crear la instancia de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase URL:', supabaseUrl);  // Deberías ver la URL correcta
console.log('Supabase Key:', supabaseKey);  // Deberías ver la clave correcta

export { supabase };
