'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/portfolio'); // Redirect to /portfolio
  }, [router]);

  return null; // Return nothing as the user is redirected
}
