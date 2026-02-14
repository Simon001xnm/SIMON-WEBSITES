
'use client';

/**
 * Utility to manage an anonymous identifier for tracking likes 
 * from non-authenticated users.
 */
export function getAnonymousId(): string {
  if (typeof window === 'undefined') return 'server-side';
  
  let id = localStorage.getItem('simon_styles_anon_id');
  if (!id) {
    id = 'anon_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('simon_styles_anon_id', id);
  }
  return id;
}
