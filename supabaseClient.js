import { createClient } from '@supabase/supabase-js';

// Usar las variables de entorno definidas en el archivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // URL de la bd en Supabase
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Clave

// Crear la instancia de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase URL:', supabaseUrl);  // Comprobación URL correcta
console.log('Supabase Key:', supabaseKey);  // Comprobación clave correcta

export { supabase };
