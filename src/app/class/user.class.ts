export class UserSettings {
  color_scheme: string;
  loc_name: string;
  loc_street: string;
  loc_bnum: string;
  loc_city: string;
  loc_country: string;
  loc_lat: string;
  loc_lon: string;
}

export class User {
  user_id: number;
  external_id: string;
  create_ts: number;
  create_ip: string;
  s_login_ts: number;
  s_login_ip: string;
  us_login_ts: number;
  us_login_ip: string;
  email: string;
  name: string;
  avatar: string;
  settings: UserSettings;
}
