export interface RatingTypes {
  maxRating?: number;
  color?: string;
  textColor?: string;
  size?: string | number;
  defaultRating?: number;
  message?: string[];
  onRatingChange?: (rating: number) => void;
}

export interface StarTypes {
  onClick: () => void;
  full: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  color: string;
  size: string | number;
}

export interface RatingTextTypes {
  textColor: string;
  tempRating: number;
  rating: number;
  maxRating: number;
  message: string[];
}
