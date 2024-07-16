import { ProfileEntity } from '../entities/profile.entity';

export interface AccountFollowersFeedResponse {
  sections: null;
  users: AccountFollowersFeedResponseUsersItem[];
  big_list: boolean;
  next_max_id: string;
  page_size: number;
  status: string;
}
export class AccountFollowersFeedResponseUsersItem extends ProfileEntity {
  pk: number; 1000000000000
  username: string; https://www.instagram.com/thejhilton/
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  latest_reel_media?: number;
}
