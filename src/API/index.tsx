import {createClient} from '@supabase/supabase-js';
import {SUPABASE_KEY, SUPABASE_URL} from '@env';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {detectSessionInUrl: false, storage: AsyncStorage},
});
export interface Quotes {
  quote: string;
  bookName?: string;
  authorName: string;
}
export interface Result {
  name: string;
  result: number;
}
export const putResult = async ({
  name,
  result,
}: {
  name: string;
  result: number;
}) => {
  try {
    await supabase.from('Result').insert({name: name, result: result});
  } catch (e) {
    console.log(e);
  }
};
export const getRatings = async () => {
  const {data, error} = await supabase
    .from('Result')
    .select<string, Result>('*');
  if (!data || error) {
    throw error;
  }
  return data;
};

export const getQuotes = async () => {
  const {data, error} = await supabase
    .from('Quotes')
    .select<string, Quotes>('*');
  if (!data || error) {
    throw error;
  }
  return data;
};
