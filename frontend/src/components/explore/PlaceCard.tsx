import { Heart, Star, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface PlaceCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  rating: number;
  likes: number;
  category: string;
  isLiked?: boolean;
}

const PlaceCard = ({
  id,
  title,
  location,
  image,
  description,
  rating,
  likes,
  category,
  isLiked = false,
}: PlaceCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div>
      <div className="feature-card h-full overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-primary/80 hover:bg-primary">
            {category}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
