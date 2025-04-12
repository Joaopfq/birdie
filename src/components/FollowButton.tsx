"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import { toggleFollow } from '@/actions/user.action';

function FollowButton({ userId } : { userId: string}) {

  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);

    try {
      await toggleFollow(userId);
      toast.success("User followed successfully");

    } catch (error) {
      toast.error("Failed to follow user");

    } finally {
      setIsLoading(false);
    }
  }


  return (
    <Button
     size="sm"
     variant="secondary"
     onClick={handleFollow}
     disabled={isLoading}
     className="w-20" 
    >
      {isLoading ? (
        <Loader2Icon className="animate-spin h-4 w-4" />
      ) : (
        "Follow"
      )}
    </Button>
  )
}

export default FollowButton