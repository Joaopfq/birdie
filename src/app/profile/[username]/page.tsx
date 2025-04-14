import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from '@/actions/profile.action'
import { notFound } from 'next/navigation';
import React from 'react'
import ProfilePageClient from './ProfilePageClient';


export async function generateMetadata({params}: {params: {username: string}}) {
  
  const user = await getProfileByUsername(params.username);

  if (!user) return null;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Welcome to ${user.name ?? user.username}'s profile`,
  };
}


async function ProfilePageServer({params}: {params: {username: string}}) {

  const user = await getProfileByUsername(params.username);
  if (!user) notFound();

  const [post, likedPost, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient 
    user={user}
    posts={post}
    likedPosts={likedPost}
    isFollowing={isCurrentUserFollowing}
    />
  )
}

export default ProfilePageServer