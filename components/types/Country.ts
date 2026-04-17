export interface Countries {
   code: string;
   iso2: string;
   name: string;
   native: string;
   calling_code: string;
   min_length?: number;
   max_length?: number;
   regex?: string;
};
