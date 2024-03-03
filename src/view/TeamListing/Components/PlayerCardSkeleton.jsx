import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  Card,
  ProfilePhoto,
  PlayerDetails,
  ActionButtons,
  PlayerContent 
} from "@/view/PlayerListing/StyledComponents";

const skeletonAnimationDuration = 1000; // Set the duration in milliseconds

const PlayerCardSkeleton = () => {
  return (
    <Card>
      <PlayerContentSkeleton />
      <ActionButtonsSkeleton />
    </Card>
  );
};

const PlayerContentSkeleton = () => {
  return (
    <PlayerContent>
      <ProfilePhotoSkeleton />
      <PlayerDetailsSkeleton />
    </PlayerContent>
  );
};

const ProfilePhotoSkeleton = () => (
  <div>
    <Skeleton width={100} height={100} circle={true} duration={skeletonAnimationDuration} />
  </div>
);

const PlayerDetailsSkeleton = () => (
  <PlayerDetails>
    <Skeleton width={120} height={20} duration={skeletonAnimationDuration} />
    <Skeleton width={180} height={20} duration={skeletonAnimationDuration} />
  </PlayerDetails>
);

const ActionButtonsSkeleton = () => (
  <ActionButtons>
    <Skeleton width={80} height={30} duration={skeletonAnimationDuration} />
    <Skeleton width={80} height={30} duration={skeletonAnimationDuration} />
  </ActionButtons>
);

export default PlayerCardSkeleton;
