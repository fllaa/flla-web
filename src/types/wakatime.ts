export type WakatimeResponse<T> = {
  data: T;
};

export interface AllTime {
  total_seconds: number;
  text: string;
  decimal: string;
  digital: string;
  is_up_to_date: boolean;
  percent_calculated: boolean;
  range: {
    start: string;
    start_date: string;
    start_text: string;
    end: string;
    end_date: string;
    end_text: string;
    timezone: string;
  };
  timeout: number;
}

export interface StatItem {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  decimal: string;
  text: string;
  hours: number;
  minutes: number;
}

export interface Stats {
  id: string;
  user_id: string;
  range: string;
  timeout: number;
  writes_only: boolean;
  holidays: number;
  status: string;
  is_already_updating: boolean;
  operating_systems: StatItem[];
  total_seconds: number;
  total_seconds_including_other_language: number;
  languages: StatItem[];
  is_up_to_date: boolean;
  daily_average_including_other_language: number;
  percent_calculated: number;
  human_readable_daily_average: string;
  editors: StatItem[];
  human_readable_daily_average_including_other_language: string;
  is_up_to_date_pending_future: boolean;
  human_readable_total_including_other_language: string;
  daily_average: number;
  human_readable_total: string;
  categories: StatItem[];
  days_including_holidays: number;
  days_minus_holidays: number;
  is_stuck: boolean;
  username: string;
  is_including_today: boolean;
  human_readable_range: string;
  is_coding_activity_visible: boolean;
  is_other_usage_visible: boolean;
}
