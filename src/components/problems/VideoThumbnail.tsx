import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import { VideoContent } from "./config";

interface VideoThumbnailProps {
  video: VideoContent;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video }) => {
  // Extract video ID from URL
  const getYouTubeID = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Get high quality thumbnail URL
  const videoId = getYouTubeID(video.videoUrl);
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : video.thumbnailUrl; // Fallback to provided thumbnail

  return (
    <Link href={video.videoUrl} isExternal>
      <Box 
        maxW="sm" 
        borderRadius="lg" 
        overflow="hidden"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image 
          src={thumbnailUrl}
          alt={video.title}
          width="100%"
          height="auto"
          fallbackSrc={`https://img.youtube.com/vi/${videoId}/0.jpg`} // Fallback to standard quality
        />
        <Box p={1}>
          <Text fontSize="xl" fontWeight="bold">
            {video.title}
          </Text>
          <Text fontSize="md">
            {video.description}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default VideoThumbnail;
