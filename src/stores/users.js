import { derived, writable } from 'svelte/store';

export const user = writable(null);

export const isLoggedIn = derived(user, $user => !!$user);