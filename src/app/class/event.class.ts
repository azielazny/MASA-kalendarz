export class Event {
  event_id: number;
  user_id: number;
  title: string;
  picture: string;
  creat_ts: number;
  mod_ts: number;
  start_ts: number;
  end_ts: number;
  is_day_long: boolean;
  timezone: string;
  visibility: string;
  description: string;
  loc_name: string;
  loc_street: string;
  loc_bnum: string;
  loc_city: string;
  loc_country: string;
  loc_lat: string;
  loc_lon: string;
  enabled: boolean;
  is_remind_set: boolean;
  remind_threshold: number;
  category: number;
  attendants: number;
  reminder:boolean;
}

