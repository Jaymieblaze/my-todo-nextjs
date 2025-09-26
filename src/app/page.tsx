"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { LoaderSpin } from '@/components/Icons';

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/todos');
      } else {
        router.replace('/login');
      }
    }
  }, [user, loading, router]);

  // Display a loading indicator while checking auth status
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderSpin className="h-12 w-12 text-indigo-600" />
    </div>
  );
}


