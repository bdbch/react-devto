import useArticles from "./lib/useArticles";
import useFollowSuggestions from "./lib/useFollowSuggestions";
import useTags from "./lib/useTags";
import useUser from "./lib/useUser";

export interface IBaseUser {
  name: string;
  username: string;
  twitter_username?: string;
  github_username?: string;
  website_url?: string;
  profile_image?: string;
  profile_image_90?: string;
}

export interface IUser extends IBaseUser {
  type_of: "user";
  summary?: string;
  location?: string;
  joined_at?: string;
  following?: boolean;
}

export interface ITag {
  id?: number;
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
}

export interface IPost {
  type_of: "article";
  id: number;
  title: string;
  description?: string;
  cover_image?: string;
  published_at: string;
  tag_list?: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  published_timestamp: string;
  user: IBaseUser;
  flare_tag?: ITag;
}

export interface IResponse {
  loading: boolean;
  error?: string;
}

export interface IArticlesResponse extends IResponse {
  articles?: IPost[];
}

export interface IUserResponse extends IResponse {
  user?: IUser;
}

export interface IFollowSuggestionsResponse extends IResponse {
  suggestions?: IUser[];
}

export interface ITagsResponse extends IResponse {
  tags?: ITag[];
}

export { useArticles, useUser, useFollowSuggestions, useTags };

export default {
  useArticles,
  useUser,
  useFollowSuggestions,
  useTags
};
